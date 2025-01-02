import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainBanner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>Explore your feelings;</Text>
      <Text style={styles.subtitle}>we're here to hear</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    marginTop: 100,
    color: '#000',
  },
  title: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default MainBanner;
