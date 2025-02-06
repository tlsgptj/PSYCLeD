import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {Alert} from 'react-native';

const ResetPW: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match');
            return;
        }
        // Add logic to handle password reset
        Alert.alert('Password has been reset successfully');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default ResetPW;