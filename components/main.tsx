import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    register: undefined;
    Main: undefined;
    
}

const Main = () => {
    const [data, setData] = useState([]);
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