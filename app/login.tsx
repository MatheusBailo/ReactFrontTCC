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
  ActivityIndicator,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // Carregar a fonte Cinzel
  const [fontsLoaded] = useFonts({
    Cinzel: require('../assets/fonts/Cinzel-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#800000" />
      </View>
    );
  }

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
        {/* LOGO e textos no topo */}
        <View style={styles.logoSection}>
          <Image
            source={require('../image/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Grand Club</Text>
          <Text style={styles.logoTexts}>Blue Roma</Text>
        </View>

        {/* CARD COM SHADOW */}
        <View style={styles.card}>
          <Text style={styles.title}>Entre com seu login</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#ccc"
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
            placeholderTextColor="#ccc"
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
        </View>

        {/* Texto abaixo do card */}
        <Text style={styles.footerText}>cuidando de quem mais amamos</Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(248, 244, 242, 0.8)',
    zIndex: 1,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  logoText: {
    color: '#800000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    fontFamily: 'Cinzel', 
  },
  logoTexts: {
    color: '#800000',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 28,
    fontFamily: 'Cinzel', 
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 16,
    padding: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#800000',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Cinzel',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#666666',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 18,
    borderWidth: 0,
    color: '#fff',
  },
  button: {
    height: 48,
    backgroundColor: '#4C2A30',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    fontFamily: 'Cinzel',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 21,
    fontFamily: 'Cinzel',
  },
  errorText: {
    marginTop: 12,
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#800000',
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'Cinzel', 
  },
});
