import React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '@/components/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (

    <View style={styles.container}>

    <Header />

      {/* Header */}
      <ScrollView contentContainerStyle={styles.scrollContent}/>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Explore your feelings;</Text>
        <Text style={styles.subtitle}>we're here to hear</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.profileWrapper}>
          <Image
            source={require('@/assets/images/pencil.png')} // 실제 이미지 경로로 변경
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.pencilText}>Draw the feelings</Text>
        <Text style={styles.pencilText2}>you ever know!</Text>
        <Text style={styles.pencilText3}>We make a emotional tags</Text>
        <Text style={styles.pencilText4}>from your texts,</Text>
        <Text style={styles.pencilText4}>such as joy, sadness, etc</Text>
        <View style={styles.profileWrapper}>
          <Image
            source={require('@/assets/images/computer.png')}
            style={styles.computer}/>
        </View>
        <Text style={styles.computerText}>Analyze your</Text>
        <Text style={styles.computerText}>feelings deeply</Text>

        <Text style={styles.computerText2}>Find your emotions visually</Text>
        <Text style={styles.computerText2}>and statistically;</Text>
        <Text style={styles.computerText2}>You'll understand yourself</Text>
        <Text style={styles.computerText2}>better than ever</Text>

      </View>

      {/* Children Content */}
      <View style={styles.childrenContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#000', // 대체 배경
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 25,
    marginTop: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileWrapper: {
    marginTop: 40,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  childrenContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  pencilText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pencilText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pencilText3: {
    fontSize: 10,
    color: '#fff',
    marginTop: 10,
  },
  pencilText4: {
    fontSize: 10,
    color: '#fff',
  },
  computer: {
    width: '100%',
    height: '100%',
  },
  computerText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  computerText2: {
    fontSize: 10,
    color: '#fff',
  }
});

export default Layout;


