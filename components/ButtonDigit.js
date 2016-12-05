'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';

const styles = require('../styles.js')
const constants = styles.constants;
const {StyleSheet, TouchableHighlight, Text, View } = ReactNative;

class ButtonDigit extends Component {
    


    render() {
        return (
            <TouchableHighlight
                style={styles.buttonDigit}
                underlayColor={constants.primaryLight}
                onPress={this.props.onPress}
                >

                <Text style={styles.buttonDigitText}>
                    {this.props.title}
                </Text>

            </TouchableHighlight>
        )
    }
}

module.exports = ButtonDigit;