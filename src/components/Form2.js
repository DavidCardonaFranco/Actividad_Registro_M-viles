import React, {useState} from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const Form2 = ({modalRegistro, setModalRegistro}) => {
  const [id, setId] = useState([
    { userName: 'Juan', userEmail: 'juan@gmail.com' },
    { userName: 'María', userEmail: 'maria@gmail.com'},
    { userName: 'Pedro', userEmail: 'pedro@gmail.com' },
  ]);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState(new Date());

  const handlerNewUser = () => {
    console.log('Adding new user');
    /* Validamos si los campos del formulario estan sin diligenciar, vacíos */
    if ([userName, birthday, userEmail].includes('')) {
      Alert.alert('Error', 'Campos sin diligenciar', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    
    const newUser = {userName, birthday, userEmail};
    const existingUser = id.find(user => user.userEmail === userEmail);
    
    if (existingUser) {
      Alert.alert('Usuario Existente', '¿Desea actualizar el nombre de usuario?', [
        {text: 'Sí', onPress: () => {
          existingUser.userName = userName;
          setId([...id]);
          setModalRegistro(false);
          setUserName('');
          setUserEmail('');
          setBirthday(new Date());
        }},
        {text: 'No', onPress: () => {}},
      ]);
    } else {
      setId([...id, newUser]);
      setModalRegistro(false);
      setUserName('');
      setUserEmail('');
      setBirthday(new Date());
    }
  };
  return (
    <Modal animationType="slide" visible={modalRegistro}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Titulo y subtitulo */}
          <Text style={styles.title}>
            Sign Up {''}
            <Text style={styles.subtitle}>User UAM</Text>
          </Text>

          {/* Botón para cerrar ventana modal */}
          <Pressable
            style={styles.exit_window}
            onPress={() => setModalRegistro(!modalRegistro)}>
            <Text style={styles.text_close_window}>X</Text>
          </Pressable>
          {/* Inicio del formulario */}
          <TextInput onChangeText={setUserName} value={userName} placeholder="Nombre"></TextInput>
          <TextInput onChangeText={setUserEmail} value={userEmail} placeholder="Correo"></TextInput>
          <DatePicker
            style={styles.content_date}
            date={birthday}
            locale="es"
            mode="date"
            format="YYYY-MM-DD"
            minDate="1950-01-01"
            maxDate="2016-06-01"
            onDateChange={date => setBirthday(date)}></DatePicker>
          {/* Botón para aceptar envio de datos del formulario */}
          <Pressable style={styles.btn_user_add} onPress={handlerNewUser}>
            <Text style={styles.text_btn_user_add}>Acept</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content_date: {
    height: 216,
    width: 310,
  },
  btn_user_add: {
    marginVertical: 30,
    backgroundColor: '#1B5FDF',
    borderRadius: 10,
    padding: 15,
  },
  text_btn_user_add: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  exit_window: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: '#E2E3E5',
    borderRadius: 10,
    padding: 15,
  },
  text_close_window: {
    color: '#010101',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});