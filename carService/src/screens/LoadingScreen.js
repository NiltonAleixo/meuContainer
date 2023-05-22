import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      navigation.replace(userToken ? 'Home' : 'Login');
    };

    checkLoggedIn();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
