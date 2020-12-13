import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-community/async-storage";

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
  user_id: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsApp() {
    api.post('connections', {
      user_id: teacher.id
    })

    Linking.openURL(`whatsapp://send?text=Olá Proffy!&phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id)
      favoritesArray.splice(favoriteIndex)
      setIsFavorited(false)
    } else {
      favoritesArray.push(teacher)
      setIsFavorited(true)
    }
    AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: `${teacher.avatar}`
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
            <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
          </RectButton>

          <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>

    </View>
  );
}

export default TeacherItem;