import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [image, setImage] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      title: 'Selecionar Foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !street || !city || !zipCode || !image) {
      Alert.alert('Preencha todos os campos!');
    } else if (password !== confirmPassword) {
      Alert.alert('As senhas não coincidem!');
    } else if (!moment().subtract(18, 'years').isAfter(moment(dob, 'DD-MM-YYYY'))) {
      Alert.alert('Você deve ter mais de 18 anos!');
    } else if (!/^\d{4}-\d{3}$/.test(zipCode)) {
      Alert.alert('O código postal deve estar no formato 0000-000!');
    } else {
      // enviar os dados para o servidor
      console.log(firstName, lastName, email, password, dob, street, city, zipCode, image.uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
          {image ? <Image source={image} style={styles.photo} /> : <Text style={styles.photoText}>Selecione uma foto de perfil</Text>}
        </TouchableOpacity>
        <TextInput placeholder="Primeiro nome" style={styles.input} value={firstName} onChangeText={setFirstName} />
        <TextInput placeholder="Último nome" style={styles.input} value={lastName} onChangeText={setLastName} />
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
        <TextInput placeholder="Confirmar senha" secureTextEntry style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} />
        <TextInput placeholder="Data de nascimento (DD-MM-AAAA)" style={styles.input} value={dob} onChangeText={setDob}/>
        <TextInput placeholder="Rua" style={styles.input} value={street} onChangeText={setStreet} />
        <TextInput placeholder="Cidade" style={styles.input} value={city} onChangeText={setCity} />
        <TextInput placeholder="Código postal (0000-000)" style={styles.input} value={zipCode} onChangeText={setZipCode} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  photoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  photoText: {
    color: '#666',
    fontSize: 16,
  },
});

export default RegisterScreen;
