import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import WordCloud from "rn-wordcloud"

interface Word {
    text: string;
    value: number;
}

const Textmining: React.FC = () => {
    const [words] = useState<Word[]>([
        { text: 'Friends', value: 10 },
        { text: 'Project', value: 15 },
        { text: 'School', value: 20 },
        { text: 'Family', value: 25 },
        { text: 'Coding', value: 30 },
    ]);

    const [color] = useState<string>('blue');

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





