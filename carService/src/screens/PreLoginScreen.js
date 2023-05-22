import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

const PreLoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default PreLoginScreen;
