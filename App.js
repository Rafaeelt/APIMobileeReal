// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  // Função que faz o papel do: "API, me manda os filmes"
  const buscarFilmes = async () => {
    try {
      // Substitua 'localhost' pelo IP do seu PC se testar no celular físico
      const resposta = await fetch('http://localhost:3000/filmes');
      const dados = await response.json(); // Transforma a resposta em JSON
      
      setFilmes(dados); // Guarda os dados para mostrar na tela
    } catch (erro) {
      console.log("Erro ao buscar filmes:", erro);
    }
  };

  // Executa a busca assim que o aplicativo abre
  useEffect(() => {
    buscarFilmes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloHeader}>NETFLIX CLONE</Text>
      
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartaoFilme}>
            <Text style={styles.nomeFilme}>{item.nome}</Text>
            <Text style={styles.anoFilme}>{item.ano}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111', // Fundo escuro estilo Netflix
    paddingTop: 40,
  },
  tituloHeader: {
    color: '#E50914', // Vermelho Netflix
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartaoFilme: {
    backgroundColor: '#222',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  nomeFilme: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  anoFilme: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
  },
});