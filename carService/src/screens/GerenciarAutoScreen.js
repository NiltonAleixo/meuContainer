import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const GerenciarAutoScreen = ({ navigation }) => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [carPreview, setCarPreview] = useState('');

  const handleCarSelection = (carId) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter(id => id !== carId));
    } else {
      setSelectedCars([...selectedCars, carId]);
    }
  }

  const handleEditCar = () => {
    // Implementar a lógica de edição de auto
  }

  const handleNewMaintenance = () => {
    // Implementar a lógica de adição de nova manutenção
  }

  const handleRemoveCar = () => {
    // Implementar a lógica de remoção de auto
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Auto</Text>
      <View style={styles.carListContainer}>
        <Text style={styles.subtitle}>Lista de autos cadastrados:</Text>
        <TouchableOpacity onPress={() => handleCarSelection('car1')} style={selectedCars.includes('car1') ? styles.selectedCarButton : styles.carButton}>
          <Text style={styles.carButtonText}>Carro 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCarSelection('car2')} style={selectedCars.includes('car2') ? styles.selectedCarButton : styles.carButton}>
          <Text style={styles.carButtonText}>Carro 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCarSelection('car3')} style={selectedCars.includes('car3') ? styles.selectedCarButton : styles.carButton}>
          <Text style={styles.carButtonText}>Carro 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carPreviewContainer}>
        <Text style={styles.subtitle}>Informações do auto:</Text>
        <TextInput style={styles.carPreviewInput} value={carPreview} onChangeText={setCarPreview} multiline />
      </View>
      <View style={styles.carPhotosContainer}>
        <Text style={styles.subtitle}>Fotos do auto:</Text>
        {/* Implementar o componente de visualização de fotos */}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleEditCar} style={styles.button}>
          <Text style={styles.buttonText}>Editar Auto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNewMaintenance} style={styles.button}>
          <Text style={styles.buttonText}>Nova Manutenção</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveCar} style={styles.button}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('UserScreen')} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  carListContainer:
{
marginBottom: 20,
},
carButton: {
backgroundColor: '#f2f2f2',
padding: 10,
marginTop: 10,
borderRadius: 5,
borderWidth: 1,
borderColor: '#ccc',
},
selectedCarButton: {
backgroundColor: '#007bff',
padding: 10,
marginTop: 10,
borderRadius: 5,
},
carButtonText: {
color: '#333',
textAlign: 'center',
fontWeight: 'bold',
},
carPreviewContainer: {
marginBottom: 20,
},
carPreviewInput: {
height: 100,
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
borderRadius: 5,
textAlignVertical: 'top',
},
carPhotosContainer: {
marginBottom: 20,
},
buttonsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
button: {
backgroundColor: '#007bff',
padding: 10,
borderRadius: 5,
flex: 1,
marginHorizontal: 5,
},
buttonText: {
color: '#fff',
textAlign: 'center',
fontWeight: 'bold',
},
backButton: {
backgroundColor: '#dc3545',
padding: 10,
borderRadius: 5,
marginTop: 'auto',
},
backButtonText: {
color: '#fff',
textAlign: 'center',
fontWeight: 'bold',
},
});

export default GerenciarAutoScreen;