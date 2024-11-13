import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function Filme01() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Até o Último Homem</Text>
      </View>
      
      <Image 
        source={require('../../../assets/ate_oultimohomem.jpg')} 
        style={styles.image} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>Sinopse</Text>
        <Text style={styles.description}>
          Durante a Segunda Guerra Mundial, Desmond T. Doss, um médico do exército americano, recusa-se a pegar em armas e a matar pessoas. Trabalhando na linha de frente da batalha, ele salva a vida de 75 soldados, tornando-se um dos maiores heróis americanos, mesmo sem disparar uma única bala.
        </Text>

        <Text style={styles.subTitle}>Direção</Text>
        <Text style={styles.detailText}>Mel Gibson</Text>

        <Text style={styles.subTitle}>Elenco</Text>
        <Text style={styles.detailText}>Andrew Garfield, Vince Vaughn, Sam Worthington, Teresa Palmer</Text>

        <Text style={styles.subTitle}>Gênero</Text>
        <Text style={styles.detailText}>Drama, Guerra</Text>

        <Text style={styles.subTitle}>Ano</Text>
        <Text style={styles.detailText}>2016</Text>
      </View>
    </ScrollView>
  );
}
