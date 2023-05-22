import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewAutoScreen = ({ navigation }) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [matricula, setMatricula] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');
  const [condutor, setCondutor] = useState('');
  const [kmAtual, setKmAtual] = useState('');

  const handleRegister = () => {
    // Lógica para cadastrar novo auto
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registo Auto</Text>

      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />

      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Matrícula"
        value={dataMatricula}
        onChangeText={setDataMatricula}
      />

      <TextInput
        style={styles.input}
        placeholder="Condutor"
        value={condutor}
        onChangeText={setCondutor}
      />

      <TextInput
        style={styles.input}
        placeholder="KM Atual"
        value={kmAtual}
        onChangeText={setKmAtual}
      />

      <TouchableOpacity style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Adicionar foto do KM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Adicionar foto do Auto</Text>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
          <Text style={{ color: 'white' }}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.confirmButton}>
          <Text style={{ color: 'white' }}>Confirmar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  imageButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default NewAutoScreen;
