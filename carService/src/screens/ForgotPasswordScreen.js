import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const handleResetPassword = () => {
    // TODO: implementar a lógica de redefinição de senha
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.subtitle}>Insira seu email para redefinir sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="send"
        onSubmitEditing={handleResetPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Redefinir senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backButtonText}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066CC',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#0066CC',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;