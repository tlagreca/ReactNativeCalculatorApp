'use strict'

//This is a comment to test the pull request from Byron's machine. 

//Git Kraken Comment Push


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

const DisplayInputField = require('./components/DisplayInputField');
const StatusBar = require('./components/StatusBar');
const ButtonDigit = require('./components/ButtonDigit');
const styles = require('./styles.js')
const constants = styles.constants;

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        displayText: '',
        numberContainerA: 0,
        numberContainerB: 0,
        currentOperand: ''
      };
  }
  onDigitClick(digit) {
    this.setState({ displayText: this.state.displayText += digit });
    console.log('numberContainerB = ' + this.state.numberContainerB)
    console.log('numberContainerA = ' + this.state.numberContainerA)
    if (this.state.currentOperand == '') {
      this.setState({ numberContainerA: parseInt(this.state.displayText) })
    } else {
      this.setState({ numberContainerB: parseInt(this.state.displayText) })
    }
  }
  onClearClick() {
    this.setState({ displayText: '', numberContainerA: 0, numberContainerB: 0, currentOperand: '' });
  }
  onOperandClick() {
    this.setState({ currentOperand: '+', displayText: '' });
  }
  onEqualsClick() {
    if (this.state.currentOperand == '+') {
      var num1 = this.state.numberContainerA;
      var num2 = this.state.numberContainerB;
      var result = num1 + num2;

      this.setState({ displayText: result.toString() });
    }
    this.setState({ currentOperand: '', numberContainerA: 0, numberContainerB: 0 })
  }

  render() {
    return (
      <View style={styles.app}>
        <StatusBar title="My Calculator" />
        <View style={styles.displayTextContainer}>

          <Text style={{ flex: 1, backgroundColor: '#fff', color: '#000', padding: 5, justifyContent: 'center', alignItems: 'center' }}>{this.state.displayText}</Text>

        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainerRow}>
            <ButtonDigit title="AC" onPress={this.onClearClick.bind(this)} />
            <ButtonDigit title="." />
            <ButtonDigit title="%" />
            <ButtonDigit title="/" />
          </View>
          <View style={styles.buttonContainerRow}>
            <ButtonDigit title="7" onPress={this.onDigitClick.bind(this, 7)} />
            <ButtonDigit title="8" onPress={this.onDigitClick.bind(this, 8)} />
            <ButtonDigit title="9" onPress={this.onDigitClick.bind(this, 9)} />
            <ButtonDigit title="X" />
          </View>
          <View style={styles.buttonContainerRow}>
            <ButtonDigit title="4" onPress={this.onDigitClick.bind(this, 4)} />
            <ButtonDigit title="5" onPress={this.onDigitClick.bind(this, 5)} />
            <ButtonDigit title="6" onPress={this.onDigitClick.bind(this, 6)} />
            <ButtonDigit title="-" />
          </View>
          <View style={styles.buttonContainerRow}>
            <ButtonDigit title="1" onPress={this.onDigitClick.bind(this, 1)} />
            <ButtonDigit title="2" onPress={this.onDigitClick.bind(this, 2)} />
            <ButtonDigit title="3" onPress={this.onDigitClick.bind(this, 3)} />
            <ButtonDigit title="+" onPress={this.onOperandClick.bind(this)} />
          </View>
          <View style={styles.buttonContainerRow}>
            <ButtonDigit title="0" onPress={this.onDigitClick.bind(this, 0)} />
            <ButtonDigit title="=" onPress={this.onEqualsClick.bind(this)} />
          </View>

        </View>

      </View>
    );
  }
}



AppRegistry.registerComponent('CalculatorApp', () => CalculatorApp);
