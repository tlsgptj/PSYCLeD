import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password') {
            setError('');
            // Handle successful login
            console.log('Login successful');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;