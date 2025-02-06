import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';

interface inputComProps {
    onSendMessage: (message: { title: string, content: string }) => void;
}

const Content: React.FC<inputComProps> = ({ onSendMessage }) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSendMessage = async () => {
        if (title.trim() && content.trim()) {
            try {
                const response = await axios.post("http://your-backend-url", {
                    title,
                    content,
                });

                if (response.data.status === 'success') {
                    console.log('Message saved successfully');
                } else {
                    console.log('Error saving message', response.data.message);
                }
            } catch (error) {
                console.log("API error", error);
            }
            onSendMessage({ title, content });
            setTitle('');
            setContent('');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Content</Text>
            <View style={styles.separator} />
            <TextInput
                style={styles.title}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.message}
                placeholder="Type your emotion"
                value={content}
                onChangeText={setContent}
            />
            <View style={styles.button}>
                <Button title="Save It" onPress={handleSendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    separator: {
        
    },
    title: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        width: '80%',
    },
    message: {
        color: '#000',
        fontSize: 10,
    },
    button: {
        backgroundColor: '#000',
        color: '#fff' ,
        width: 20,
        height: 10 
    }
});

export default Content;
