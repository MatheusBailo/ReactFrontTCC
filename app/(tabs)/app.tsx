import { StyleSheet, Text, View } from 'react-native';

export default function AppTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à tela principal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});