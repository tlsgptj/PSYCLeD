import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// 반응형을 위해 화면 크기를 가져오기
const { width } = Dimensions.get('window');

const PsyLed: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>PSYCLeD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // 배경색 (필요시 수정)
  },
  box: {
    width: width * 0.8, // 화면 너비의 80%로 반응형 설정
    paddingVertical: 10, // 상하 패딩
    borderRadius: 30, // 라운드 처리
    backgroundColor: '#ffffff', // 흰색 배경
    alignItems: 'center',
    shadowColor: '#000', // 그림자 색상
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // 안드로이드 그림자
  },
  text: {
    fontSize: 18, // 텍스트 크기
    fontWeight: 'bold',
    color: '#000000', // 텍스트 색상
  },
});

export default PsyLed;
