import { Request, Response } from 'express';
import { Table as TABLE } from '../interfaces';
import db from '../database/connection';

export default class ConnectionsController {

  async get(request: Request, response: Response) {
    const totalConnections = await db(TABLE.CONNECTIONS).count('* as total');
    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db(TABLE.CONNECTIONS).insert({ user_id });

    return response.status(201).send();
  }
}
