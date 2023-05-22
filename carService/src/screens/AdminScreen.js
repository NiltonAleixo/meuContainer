import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdminScreen = ({ navigation }) => {
  const handleEditUser = () => {
    // lógica para editar usuário
  };

  const handleDeleteUser = () => {
    // lógica para excluir usuário
  };

  const handleCarBrandReport = () => {
    // lógica para gerar relatório de marcas de carros
  };

  const handleCarModelReport = () => {
    // lógica para gerar relatório de modelos de carros
  };

  const handleAddCarComponent = () => {
    // lógica para adicionar componentes de um carro
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Editar Usuário" onPress={handleEditUser} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Excluir Usuário" onPress={handleDeleteUser} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Relatório de Marcas" onPress={handleCarBrandReport} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Relatório de Modelos" onPress={handleCarModelReport} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar Componentes" onPress={handleAddCarComponent} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Voltar para Login" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default AdminScreen;
