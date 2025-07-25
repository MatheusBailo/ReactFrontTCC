
import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Image,ScrollView,ImageBackground,TouchableOpacity,} from 'react-native';
import api from '@/services/api';


const fundoLogo = require('../../image/fundoLogo.png');
const logo = require('../../image/Logo.png');

type Idoso = {
  id: number;
  name: string;
  bornAge: string;
  image: string;
  roomNumber: number;
  caregiverName: string;
  especialConditions: string;
};


export default function List() {
  const [list, setList] = useState<Idoso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get('/list');
        setList(response.data);
      } catch (error) {
        setError('Erro ao carregar listas');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchList();
  }, []);

  if (loading) return <Text style={styles.loading}>Carregando...</Text>;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <ImageBackground source={fundoLogo} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        

        <Text style={styles.titulo}>ÁREA DOS IDOSOS</Text>
        <Text style={styles.subtitulo}>veja as informações sobre seu idoso cadastrado</Text>

        {list.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.foto}
              resizeMode="cover"
            />

            <View style={styles.infoBloco}>
              <Text style={styles.infoNegrito}>{item.name}</Text>
            </View>

            <View style={styles.infoBloco}>
              <Text style={styles.infoNormal}>{item.bornAge}</Text>
            </View>

            <View style={styles.infoBloco}>
              <Text style={styles.infoNormal}>Quarto - {item.roomNumber}</Text>
            </View>

            <View style={styles.especificacoes}>
              <Text style={styles.especificacoesTitulo}>ESPECIFICAÇÕES:</Text>
              <Text style={styles.especificacoesTexto}>{item.especialConditions}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Visualizar lista de rotina</Text>
            </TouchableOpacity>

            <Text style={styles.cuidadorTitulo}>Cuidador(a) responsável:</Text>
            <Text style={styles.cuidadorNome}>{item.caregiverName}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  container: {
    padding: 20,
    paddingBottom: 100,
    alignItems: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
  },
  error: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: 'red',
  },
  
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 	'rgba(249, 244, 227, 0.4)', 
    borderRadius: 30,
    padding: 20,
    marginBottom: 25,
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  

  foto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 10,
  },
  infoBloco: {
    backgroundColor: '#5E5A5A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoNegrito: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoNormal: {
    color: '#fff',
    fontSize: 15,
  },
  especificacoes: {
    backgroundColor: '#B0B0B0',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  especificacoesTitulo: {
    color: '#8B0000',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  especificacoesTexto: {
    color: '#fff',
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  cuidadorTitulo: {
    fontSize: 16,
    color: '#8B0000',
    fontWeight: 'bold',
    marginTop: 12,
  },
  cuidadorNome: {
    fontSize: 16,
    marginBottom: 5,
  },
});
