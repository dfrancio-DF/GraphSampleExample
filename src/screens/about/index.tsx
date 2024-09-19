import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Engenharia de Software</Text>
      <Text style={styles.subtitleText}>Engenharia de Software para Web</Text>
      <Text></Text>
      <Text style={styles.subtitleText}>Grupo 5</Text>
      <Text>Caina dos Santos Mota</Text>
      <Text>Diego Francio</Text>
      <Text>João Jeefer da Silva Félix</Text>
      <Text>Renata Barros da Silva</Text>
    </View>
  );
};
