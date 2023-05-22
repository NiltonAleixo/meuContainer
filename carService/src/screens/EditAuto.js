import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function EditAuto({ route, navigation }) {
  const [marca, setMarca] = useState(route.params.marca);
  const [modelo, setModelo] = useState(route.params.modelo);
  const [matricula, setMatricula] = useState(route.params.matricula);
  const [condutor, setCondutor] = useState(route.params.condutor);
  const [kmAtual, setKmAtual] = useState(route.params.kmAtual);
  const [fotos, setFotos] = useState(route.params.fotos);
function handleSalvar() {
    // atualizar dados do auto no banco de dados
    navigation.navigate('ListaAutos');
}

return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Editar Auto</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      onChangeText={text => setMarca(text)}
      value={marca}
      placeholder="Marca"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      onChangeText={text => setModelo(text)}
      value={modelo}
      placeholder="Modelo"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      onChangeText={text => setMatricula(text)}
      value={matricula}
      placeholder="Matricula"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      onChangeText={text => setCondutor(text)}
      value={condutor}
      placeholder="Condutor"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      onChangeText={text => setKmAtual(text)}
      value={kmAtual}
      placeholder="KM Atual"
    />
    <Button title="Adicionar fotos" onPress={() => {}} />
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <Button title="Cancelar" onPress={handleCancelar} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  </View>
);
}

export default EditAuto;
