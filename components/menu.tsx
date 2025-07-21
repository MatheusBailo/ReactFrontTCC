import { StyleSheet, Text, View } from 'react-native';

export function Menu() {
  return (
    <View style={styles.menu}>
      <Text style={styles.menuText}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    padding: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
