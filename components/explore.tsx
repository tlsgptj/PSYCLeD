import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Platform } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';
import MovingGradientBackground from './MovingGradient'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExploreWeb = () => {
  const [navState, setNavState] = React.useState<WebViewNavigation | null>(null);

  if (Platform.OS !== 'web') {
    function handleNavStateChange(e: WebViewNavigation) {
      setNavState(e);
    }

    return (
      <SafeAreaView style={styles.container}>
        <MovingGradientBackground />
        <WebView
          style={styles.webview}
          source={{ uri: 'https://naver.com' }}
          onNavigationStateChange={handleNavStateChange}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ExploreWeb;

