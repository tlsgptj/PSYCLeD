import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface SectionProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ image, title, description }) => {
  return (
    <View style={styles.section}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    textAlign: 'center',
    color: '#ddd',
    marginHorizontal: 30,
  },
});

export default Section;