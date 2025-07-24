import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!email.trim() || !senha.trim()) {
      setErrorMessage('Preencha todos os campos!');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Login incorreto: o e-mail deve ser um @gmail.com');
      return;
    }

    setErrorMessage('');
    router.replace('/(tabs)');
  };

  return (
    <ImageBackground
      source={require('../image/fundoLogo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../image/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>GRAND CLUB BLUE ROMA</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrorMessage('');
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setErrorMessage('');
          }}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {errorMessage !== '' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(248, 244, 242, 0.8)', // um fundo semi-transparente pra suavizar fundo
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#800000',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#800000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  errorText: {
    marginTop: 12,
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
});
