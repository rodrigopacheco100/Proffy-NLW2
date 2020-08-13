import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        setFavorites(favoritedTeachers)
      }
    })
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView style={styles.TeacherList}>
        {
          favorites.map((teacher: Teacher) =>
            <TeacherItem
              favorited
              teacher={teacher}
              key={teacher.id}
            />)
        }
      </ScrollView>
    </View>
  );
}

export default Favorites;