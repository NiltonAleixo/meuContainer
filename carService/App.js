import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import AdminScreen from './src/screens/AdminScreen';
import UserScreen from './src/screens/UserScreen';
import NewAutoScreen from './src/screens/NewAutoScreen';
import GerenciarAutoScreen from './src/screens/GerenciarAutoScreen';
import GerenciarUsuarioScreen from './src/screens/GerenciarUsuarioScreen'

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // aqui você pode adicionar a lógica para verificar se o usuário já está autenticado
  // ou se precisa fazer login

  // após verificar, atualize o estado de isLoading
  setTimeout(() => setIsLoading(false), 3000);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {isLoading ? (
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminScreen"
              component={AdminScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewAutoScreen"
              component={NewAutoScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GerenciarAutoScreen"
              component={GerenciarAutoScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="GerenciarUsuarioScreen"
              component={GerenciarUsuarioScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
