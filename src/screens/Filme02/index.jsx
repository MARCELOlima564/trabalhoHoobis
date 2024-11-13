import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function Filme02() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Velozes e Furiosos</Text>
      </View>
      
      <Image 
        source={require('../../../assets/velozes-e-furiosos.jpg')} 
        style={styles.image} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>Sinopse</Text>
        <Text style={styles.description}>
          Dominic Toretto e sua equipe de corredores enfrentam desafios dentro e fora das pistas, envolvendo-se em aventuras que mesclam adrenalina, velocidade e uma forte amizade. Entre confrontos com a lei e inimigos perigosos, eles provam que família é tudo.
        </Text>

        <Text style={styles.subTitle}>Direção</Text>
        <Text style={styles.detailText}>Rob Cohen</Text>

        <Text style={styles.subTitle}>Elenco</Text>
        <Text style={styles.detailText}>Vin Diesel, Paul Walker, Michelle Rodriguez, Jordana Brewster</Text>

        <Text style={styles.subTitle}>Gênero</Text>
        <Text style={styles.detailText}>Ação, Aventura</Text>

        <Text style={styles.subTitle}>Ano</Text>
        <Text style={styles.detailText}>2001</Text>
      </View>
    </ScrollView>
  );
}
