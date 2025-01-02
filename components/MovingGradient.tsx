import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MovingGradientBackground = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff0000', '#00ff00', '#0000ff']}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MovingGradientBackground;
