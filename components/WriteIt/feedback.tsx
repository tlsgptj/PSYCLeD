import React, { useState } from 'react';
import PsyLed from '../main/PSYLeD';
import { View, TextInput, Button, Text, BackHandler, StyleSheet } from 'react-native';
import axios from 'axios';

interface OutputProps {
    advice : string //부모 컴포넌트로부터 조언을 받음
}

const feedback : React.FC<OutputProps> = ({ advice }) => {
    return (
        <View style={styles.container}>
            <PsyLed/>
            <Text style={styles.title}>Feedback</Text>
            <Text style={styles.advice}>{advice ? advice: '조언이 없습니다'}</Text>

            <Text/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    title: {
        fontSize: 15,
        color: '#000'
    },
    advice: {
        fontSize: 10,
        color: '#000'
    }
})

export default feedback;