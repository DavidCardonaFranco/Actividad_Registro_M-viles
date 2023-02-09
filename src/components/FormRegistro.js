import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CheckBox, Button } from "react-native-elements";
import DatePicker from "react-native-modern-datepicker";

export const FormRegistro = ({ formRegistro }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(firstName, lastName, gender, birthday, email);
  };
  return (
    <Modal animationType="slide" visible={formRegistro}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Registro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre(s)"
            value={firstName}
            onChangeText={setFirstName}
          />

          <TextInput
            style={styles.input}
            placeholder="Apellido(s)"
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.genderTitle}>Género</Text>
          <CheckBox
            checked={gender === "Masculino"}
            onPress={() => setGender("Masculino")}
            title="Masculino"
            checkedColor="#3366CC"
          />
          <CheckBox
            checked={gender === "Femenino"}
            onPress={() => setGender("Femenino")}
            title="Femenino"
            checkedColor="#3366CC"
          />

          <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* <Pressable style={styles.btnStyle}>
            <Text style={styles.btnStyle}>Enviar</Text>
          </Pressable>
          <Pressable style={styles.btnStyle}>
            <Text style={styles.btnStyle}>Cancelar</Text>
          </Pressable> */}
          <Button
            title="Enviar"
            buttonStyle={styles.btnEnviar}
            onPress={handleSubmit}
          />
          <Button
            title="Cancelar"
            buttonStyle={styles.btnCancelar}
            onPress={() => console.log("Cancelar")}
          />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: 200,
    height: 25,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  picker: {
    height: 40,
    width: "100%",
    marginVertical: 10,
  },
  genderTitle: {
    fontSize: 18,
    marginRight: 20,
  },
  btnStyle: {
    textAlign: "center",
    backgroundColor: "#60c910",
    fontSize: 20,
    textTransform: "capitalize",
  },
  btnEnviar: {
    backgroundColor: "#60c910",
    marginTop: 20,
    height: 25,
    width: "100%",
  },
  btnCancelar: {
    backgroundColor: "red",
    marginTop: 20,
    height: 25,
    width: "100%",
  },
});
