import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const UserScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleNewCar = () => {
    // navegar para a tela de cadastro de novo carro
  };

  const handleManageCar = () => {
    // navegar para a tela de gerenciamento de carro
  };

  const handleManageData = () => {
    // navegar para a tela de gerenciamento de dados
  };

  const handleLogout = () => {
    // navegar de volta para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Bem Vindo</Text>
      <TextInput
        placeholder="Pesquisar auto cadastrado"
        value={searchText}
        onChangeText={setSearchText}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 20 }}
      />
      <View style={{ borderWidth: 1, borderColor: 'gray', padding: 10, flex: 1 }}>
        {/* caixa de texto com os resultados da busca */}
        <Text>Resultados da busca</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewAutoScreen')} style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Cadastrar novo auto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GerenciarAutoScreen')} style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Gerenciar auto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GerenciarUsuarioScreen')} style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Gerenciar dados</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={{ color: 'red' }}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Notificações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;
