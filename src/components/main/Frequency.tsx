import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const mockData = [
    { label: 'Joy', value: 5, color: '#FBD42C' },
    { label: 'Bad', value: 3, color: '#9C89E0' },
    { label: 'Fearful', value: 2, color: '#CDA3F3' },
    { label: 'Disgusted', value: 3, color: '#A6D8A5' },
    { label: 'Angry', value: 4, color: '#F48381' },
    { label: 'Sad', value: 2, color: '#8FD4F8' },
    { label: 'Surprised', value: 3, color: '#FFB066' },
  ];

const Frequency: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Frequency</Text>
        <View style={styles.chartContainer}>
          {mockData.map((item, index) => (
            <View key={index} style={styles.column}>
              {/* 동전 스택 */}
              {Array.from({ length: item.value }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.coin,
                    { backgroundColor: item.color, top: -i * 10 },
                  ]}
                />
              ))}
              {/* 감정 이름 */}
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    column: {
        alignItems: 'center',
        position: 'relative',
    },
    coin: {
        width: 50,
        height: 10,
        borderRadius: 5,
        position: 'absolute',
    },
    label: {
        marginTop: 40,
        fontSize: 14,
        fontWeight: '500',
    },
});

export default Frequency;
