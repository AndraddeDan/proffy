import { Request, Response } from 'express';
import db from './../database/connection';
import { ScheduleItem, Table as TABLE } from './../interfaces';
import convertHoursToMinutes from './../utils/convert-hours-to-minutes';

export default class ClassesController {

  async list(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db(TABLE.CLASSES)
      .whereExists(function () {
        this.select('class_schedule.*')
          .from(TABLE.CLASS_SCHEDULE)
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [Number(timeInMinutes)])
          .whereRaw('`class_schedule`.`to` > ??', [Number(timeInMinutes)])
      })
      .where('classes.subject', '=', subject)
      .join(TABLE.USERS, 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

    const trx = await db.transaction();

    try {

      const insertedUsersIds = await trx(TABLE.USERS).insert({
        name, avatar, whatsapp, bio
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx(TABLE.CLASSES).insert({
        subject, cost, user_id
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule
        .map((scheduleItem: ScheduleItem) => ({
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to)
        }));

      await trx(TABLE.CLASS_SCHEDULE).insert(classSchedule);

      await trx.commit();

      return response.status(201).send();

    } catch (error) {

      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}
