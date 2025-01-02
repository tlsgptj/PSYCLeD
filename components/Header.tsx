import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>PSYCLeD</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#FDFDFD',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default Header;