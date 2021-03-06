'use strict';
import React, { Component } from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const {StyleSheet, Text, View} = ReactNative;

class StatusBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.StatusBar}>
                    <View style={styles.navBar}>
                        <Text style={styles.navBarText}>{this.props.title}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
module.exports = StatusBar;