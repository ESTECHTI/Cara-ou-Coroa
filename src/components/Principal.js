import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";

import { Actions } from 'react-native-router-flux';

const logo = require("../../src/imgs/logo.png");
const btnJogar = require("../../src/imgs/botao_jogar.png");
const btnSobreJogo = require("../../src/imgs/sobre_jogo.png");
const btnOutrosjogos = require("../../src/imgs/outros_jogos.png");

export default class Principal extends React.Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
        <TouchableHighlight
            onPress={() => { Actions.resultado(); }}
        >
            <Image source={btnJogar} />
        </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
        <TouchableHighlight
            onPress={() => { Actions.sobrejogo(); }}
        >
          <Image source={btnSobreJogo} />
        </TouchableHighlight>

        <TouchableHighlight
            onPress={() => { Actions.outrosjogos(); }}
        >
          <Image source={btnOutrosjogos} />
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: "#61BD8C"
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rodape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
