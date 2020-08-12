import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import giveClassesBackgroud from "../../assets/images/give-classes-background.png";

import styles from './styles';

const GiveClasses: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBackgroud}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
        </Text>
      </ImageBackground>

      <RectButton enabled onPress={handleNavigateBack} style={styles.button}>
        <Text style={styles.buttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;