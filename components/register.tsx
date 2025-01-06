import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Register = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState('');

    const handleRegister = () => {
        console.log('Registering user:', { password, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello! welcome here.</Text>
            <Text style={styles.ment1}>email address</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.ment1}>password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={styles.ment}>Password must be 8-12 characters</Text>
            <Text style={styles.ment}>with letters, numbers, and</Text>
            <Text style={styles.ment}>special characters.</Text>

            <Text style={styles.ment1}>password check</Text>
            <TextInput
                style={styles.input}
                placeholder="Password Check"
                value={passwordCheck}
                onChangeText={setPasswordCheck}
                secureTextEntry
            />

            <View style={styles.button}>
                <Button onPress={handleRegister} title="Sign up" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000",
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
    ment: {
        color: '#fff',
        textAlign: 'center',
    },
    ment1: {
        color: '#fff',
        textAlign: 'left', 
        marginTop: 30,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#fff',
        color: '#000',
    },
});

export default Register;