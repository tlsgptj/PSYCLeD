import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, TextInput, Button, Text, BackHandler } from 'react-native';
import { StyleSheet } from 'react-native';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  register: undefined;
  forgot: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


const Login: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password') {
            setError('');
            console.log('Login successful');
        } else {
            setError('Invalid email or password');
        }
    };

    const clientId = 'clientID';

    return (
        <View style={styles.container}>

            <Text style={styles.started}>Let's get started</Text>

            <Text style={styles.email}>email address</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.password}>password</Text>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />

            <Text style={styles.started}>Is it your first time?</Text>
            <Button title="click here" onPress={() => navigation.navigate('register')}/>

            <Button title="Forgot password?" onPress={() => navigation.navigate('forgot')} />
                
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin 
                    onSuccess={(res) => {
                        console.log('Google login successful', res);
                        setUser(res.profileObj);
                    }}
                    onError={() => {
                        console.log('Google login failed');
                    }} 
                />
            </GoogleOAuthProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },

    started: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },

    email: {
        color: '#fff',
        marginTop: 30,
        fontSize: 10,
    },

    password: {
        color: '#fff',
        marginTop: 20,
        fontSize: 10,
    },

    Button: {
        color: 'blue'
    },


});

export default Login;