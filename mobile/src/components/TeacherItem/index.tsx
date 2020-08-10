import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://github.com/andraddedan.png' }}
          style={styles.avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}> Daniel Andrade </Text>
          <Text style={styles.subject}> Artes </Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta em programação mobile.
      </Text>

      <View style={styles.footer} >
        <Text style={styles.price}>
          Preço/hora {'   '} <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
