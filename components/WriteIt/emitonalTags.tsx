import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import BitcoinSvg from './assets/images/Bitcoin.svg';

const { width } = Dimensions.get('window');

const EmotionalTag: React.FC = () => {
    const [emotion, setEmotion] = useState<string | null>(null);
    const [color, setColor] = useState<string>('#000000');

    useEffect(() => {
        axios.get('YOUR_BACKEND_API_ENDPOINT')
            .then(response => {
                const emotionName = response.data.emotion;
                setEmotion(emotionName);
                const colorMap: { [key: string]: string } = {
                    'JOY': '#F9D877', 
                    'ANGRY': '#FF968A',
                    'Surprised': '#EF8F5A',
                    'Bad': '#705499',
                    'Fearful': '#CBAACB',
                    'Disgusted': '#B6CFB6',
                    'Sad': '#D4F1FF'
                };
                setColor(colorMap[emotionName] || '#000000');
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <BitcoinSvg width={100} height={100} fill={color} />
            <Text>{emtionName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#140A30",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 150,
    },
});

export default EmotionalTag;