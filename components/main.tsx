import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    register: undefined;
    Main: undefined;
}

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

type Props = {
    navigation: MainScreenNavigationProp;
};

const Main = ({ navigation }: Props) => {
    return (
     <View>
        <Text> How were you today? </Text>
        <Text> we're here to hear </Text>
        <Button title="Write It" onPress={() => navigation.navigate('register')}/>
     </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    }
})