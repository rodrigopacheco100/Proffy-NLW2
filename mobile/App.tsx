import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from "expo";
import { useFonts, Archivo_400Regular, Archivo_700Bold } from "@expo-google-fonts/archivo";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Landing from './src/pages/Landing';

export default function App() {
  let [fontsLoader] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoader) {
    return <AppLoading />
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="auto" />
      </>
    );
  }
}
