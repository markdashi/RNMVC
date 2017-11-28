/**
 * @providesModule Main
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import CommonFlatView from 'CommonFlatView'

export default class App extends Component<{}> {
    render() {
        return (
            <CommonFlatView />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});