'use strict';
import React, { Component } from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const {StyleSheet, Text, View} = ReactNative;

class DisplayInputField extends Component {
    render() {
        
        return (
            <Text displayText={this.props.displayText}
                style={styles.displayText}
                />
        );
    }
}

module.exports = DisplayInputField;