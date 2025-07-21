import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../services/api'; // seu arquivo de API

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        router.replace('/(tabs)/app');
      }
    };
    checkUser();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, password });
      const user = response.data;

      await AsyncStorage.setItem('user', JSON.stringify(user));

      router.replace('/(tabs)/app');
    } catch (error: any) {
      const errMsg = error?.response?.data?.message || 'Verifique os dados';
      setMessage('Erro no login: ' + errMsg);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.toggle}>
          {showPassword ? 'Ocultar' : 'Mostrar'} senha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {message !== '' && <Text style={styles.error}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  toggle: {
    color: '#00aaff',
    textAlign: 'right',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00aaff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    marginTop: 20,
    color: '#ff4444',
    textAlign: 'center',
  },
});
