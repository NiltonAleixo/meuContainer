import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Modal, ScrollView } from 'react-native';

const GerenciarUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState('Fulano');
  const [primeiroNome, setPrimeiroNome] = useState('Fulano');
  const [ultimoNome, setUltimoNome] = useState('de Tal');
  const [email, setEmail] = useState('fulano@gmail.com');
  const [telefone, setTelefone] = useState('(00) 0000-0000');
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('01/01/2000');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(require('../../assets/profile-picture.png'));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSalvar = () => {
    // Implementar a lógica para salvar os dados do usuário
    // Nesse exemplo, apenas exibimos um alerta
    alert('Dados do usuário salvos com sucesso!');
  }

  const handleTrocarFoto = () => {
    // Implementar a lógica para trocar a foto de perfil do usuário
    // Nesse exemplo, apenas exibimos um alerta
    alert('Foto de perfil trocada com sucesso!');
  }

  const handleAlterarSenha = () => {
    setIsModalVisible(true);
  }

  const handleSalvarSenha = () => {
    // Implementar a lógica para salvar a nova senha do usuário
    setSenha(novaSenha);
    setIsModalVisible(false);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Usuário</Text>
      <View style={styles.userInfoContainer}>
        <Text style={styles.subtitle}>Dados do usuário:</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome completo:</Text>
          <TextInput style={styles.input} value={`${primeiroNome} ${ultimoNome}`} onChangeText={(value) => {
            const [first, last] = value.split(' ');
            setPrimeiroNome(first);
            setUltimoNome(last);
          }} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={

styles.input
} value={email} onChangeText={(value) => setEmail(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Telefone:</Text>
<TextInput style={styles.input} value={telefone} onChangeText={(value) => setTelefone(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Data de nascimento:</Text>
<TextInput style={styles.input} value={dataNascimento} onChangeText={(value) => setDataNascimento(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Rua:</Text>
<TextInput style={styles.input} value={rua} onChangeText={(value) => setRua(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Cidade:</Text>
<TextInput style={styles.input} value={cidade} onChangeText={(value) => setCidade(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Código postal:</Text>
<TextInput style={styles.input} value={codigoPostal} onChangeText={(value) => setCodigoPostal(value)} />
</View>
</View>
<View style={styles.userPhotoContainer}>
<Image source={fotoPerfil} style={styles.userPhoto} />
<TouchableOpacity onPress={handleTrocarFoto} style={styles.changePhotoButton}>
<Text style={styles.changePhotoButtonText}>Trocar foto</Text>
</TouchableOpacity>
</View>
<View style={styles.actionButtonsContainer}>
<TouchableOpacity onPress={handleAlterarSenha} style={styles.actionButton}>
<Text style={styles.actionButtonText}>Alterar senha</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('UserScreen')} style={styles.actionButton}>
<Text style={styles.actionButtonText}>Salvar alterações</Text>
</TouchableOpacity>
</View>
<Modal visible={isModalVisible} animationType='slide' transparent={true}>
<View style={styles.modalContainer}>
<View style={styles.modalContent}>
<Text style={styles.modalTitle}>Alterar senha</Text>
<View style={styles.formGroup}>
<Text style={styles.label}>Senha atual:</Text>
<TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={(value) => setSenha(value)} />
</View>
<View style={styles.formGroup}>
<Text style={styles.label}>Nova senha:</Text>
<TextInput style={styles.input} secureTextEntry={true} value={novaSenha} onChangeText={(value) => setNovaSenha(value)} />
</View>
<View style={styles.modalButtonsContainer}>
<TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.modalButton}>
<Text style={styles.modalButtonText}>Cancelar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleSalvarSenha} style={styles.modalButton}>
<Text style={styles.modalButtonText}>Salvar</Text>
</TouchableOpacity>
</View>
</View>
</View>
</Modal>
</View>
</ScrollView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  userPhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  changePhotoButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  changePhotoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default GerenciarUsuarioScreen;