import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import WordCloud from 'react-native-word-cloud';

interface Word {
    text: string;
    value: number;
}

const Textmining: React.FC = () => {
    const [words, setWords] = useState<Word[]>([
        { text: 'Friends', value: 10 },
        { text: 'Project', value: 15 },
        { text: 'School', value: 20 },
        { text: 'Family', value: 25 },
        { text: 'Coding', value: 30 },
    ]);

    const [color, setColor] = useState<string>('blue');
    //데이터 로드

    return (
        <ScrollView style={styles.container}>
            <WordCloud words={words} color={[color]} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Textmining;





