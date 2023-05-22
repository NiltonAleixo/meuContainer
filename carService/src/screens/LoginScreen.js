import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (email === 'usuario@exemplo.com' && password === 'senhausuario') {
    // redirecionar para a tela de usuário
    navigation.navigate('UserScreen');
    } else if (email === 'admin@exemplo.com' && password === 'senhaadmin') {
    // redirecionar para a tela de administrador
    navigation.navigate('AdminScreen');
    } else {
    // exibir mensagem de erro de autenticação
    Alert.alert('Erro de autenticação', 'Credenciais inválidas. Tente novamente.');
    }
    // Aqui você pode adicionar a lógica de autenticação do usuário
    // Se o usuário for autenticado com sucesso, você pode navegar para a tela principal
    
    navigation.navigate('Main');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTransparent}
        onPress={handleForgotPasswordPress}
      >
        <Text style={styles.buttonTransparentText}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTransparent}
        onPress={handleRegisterPress}
      >
        <Text style={styles.buttonTransparentText}>Não tenho cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#0066CC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTransparent: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTransparentText: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
