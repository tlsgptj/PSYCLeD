import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FeelingsComponent: React.FC = () => {
  const [feelings, setFeelings] = useState<{ text: string }[]>([]);

  // 데이터 로드
  useEffect(() => {
    fetch('https://your-backend-api.com/feelings') // API 엔드포인트 수정
      .then((response) => response.json())
      .then((data) => setFeelings(data))
      .catch((error) => console.error('Error fetching feelings:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feelings with situations</Text>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {feelings.map((feeling, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{feeling.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    width: 300,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FeelingsComponent;
