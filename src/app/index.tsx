import { View, Text, StyleSheet } from 'react-native';

const inicio = () => {
  return (
    <View style={estilo.contenedor}>
      <Text style={estilo.titulo}>App Sena</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  titulo: {
    color: '#ff0000',
    fontSize: 30,
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default inicio;