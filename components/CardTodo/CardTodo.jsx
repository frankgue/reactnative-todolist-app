import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import checkImage from "../../assets/check.png";
import { cardTodoStyles } from "./CardTodo.style";

const CardTodo = ({ todo, updateTodo, onLongPress }) => {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      style={cardTodoStyles.card}
      onPress={() => updateTodo(todo)}
    >
      <Text
        style={[
          cardTodoStyles.text,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={cardTodoStyles.img} source={checkImage} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CardTodo;
