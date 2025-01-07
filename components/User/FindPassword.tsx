import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet ,View, TextInput, Button, Text, Alert } from 'react-native';
import PsyLed from '../main/PSYLeD';
type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const FindPassword = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        // Here you would typically make an API call to send the reset link
        // For demonstration, we'll just show an alert
        if (email) {
            Alert.alert('Password Reset', `A password reset link has been sent to ${email}`);
            // Reset email input
            setEmail('');
        } else {
            Alert.alert('Error', 'Please enter a valid email address');
        }
    };

    return (
        <View style={styles.container}>
            <PsyLed />
            <Text style={styles.Find}>Find password</Text>
            <Text style={styles.small}>Email address</Text>
            <TextInput 
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
            />
            <Text style={styles.small}>we will send you a link to</Text>
            <Text style={styles.small}>reset your password via email</Text>
            <Button title="Send Reset Link" onPress={handlePasswordReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    Find : {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 20,
    },
    small: {
        fontSize: 10,
        marginBottom: 20,
    },

})

export default FindPassword;