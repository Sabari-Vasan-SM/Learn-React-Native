import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <WebView
        source={{ uri: 'https://portfolio.vasan.tech/' }}
        style={styles.webview}
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});
