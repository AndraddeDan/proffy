import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        {isFiltersVisible && <>
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual o dia?" />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual horário?" />
            </View>
          </View>
        </>}

      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
