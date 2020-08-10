import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import landingImg from '../../assets/img/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

import styles from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg} />
      <Text style={styles.title} >
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}> O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas! {' '}
        <Image source={heartIcon} />
      </Text>

    </View>
  );
}

export default HomeScreen;