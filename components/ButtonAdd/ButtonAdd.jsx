import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonAddStyles } from "./Button.style";

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={buttonAddStyles.btn} onPress={onPress}>
      <Text style={buttonAddStyles.text}>+ New Todo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ButtonAdd;
