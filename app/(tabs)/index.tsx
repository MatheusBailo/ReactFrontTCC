import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>QUEM SOMOS?</Text>
      <Text style={styles.paragraph}>
        O Grand Club Blue Roma é um espaço acolhedor e seguro para pessoas idosas, com foco em bem-estar e qualidade de vida.
      </Text>

      <Text style={styles.sectionTitle}>MISSÃO</Text>
      <Text style={styles.paragraph}>
        Oferecer cuidado humanizado e suporte completo às necessidades dos idosos, promovendo saúde, alegria e respeito.
      </Text>

      <Text style={styles.sectionTitle}>VALORES</Text>
      <View style={styles.list}>
        <Text style={styles.bullet}>• Respeito à individualidade</Text>
        <Text style={styles.bullet}>• Segurança e conforto</Text>
        <Text style={styles.bullet}>• Humanização e empatia</Text>
        <Text style={styles.bullet}>• Valorização da vida</Text>
      </View>

      <Text style={styles.sectionTitle}>FILOSOFIA</Text>
      <Text style={styles.paragraph}>
        Envelhecer com dignidade, alegria e amor, mantendo os vínculos familiares e o cuidado integral.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F5F1EC',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D1D1D',
    marginTop: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  list: {
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
