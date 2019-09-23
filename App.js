/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {FloatingAction} from "react-native-floating-action";

import {Colors,} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <FloatingAction
                    color={'lightblue'}
                    actions={[
                        {
                            text: 'TEST',
                            name: "test",
                            color: 'lightblue',
                            position: 1
                        },
                    ]}
                />


                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 5,
                        backgroundColor: 'lightblue',
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        shadowOpacity: 0.35,
                        shadowOffset:  {
                            width: 0,
                            height: 5,
                        },
                        shadowColor: '#000000',
                        shadowRadius: 3,
                    }}>

                    </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
