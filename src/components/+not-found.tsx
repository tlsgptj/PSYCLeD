import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFound = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.NotFound}>Page Not Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  NotFound: {
    fontSize: 20,
    fontWeight: 'bold',
  }

})
export default NotFound;
