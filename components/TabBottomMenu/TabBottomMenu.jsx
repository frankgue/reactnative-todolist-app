import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TabBottomMenuStyles from "./TabBottomMenu.style";

const TabBottomMenu = ({ selectedTabName, setSelectedTabName, todoList }) => {
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todoList.length, inProgress: 0, done: 0 }
  );

  // console.log(countByStatus);

  const getTextStyle = (tabName) => {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  };

  return (
    <View style={TabBottomMenuStyles.container}>
      <TouchableOpacity onPress={() => setSelectedTabName("all")}>
        <Text style={getTextStyle("all")}>All ({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTabName("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In Progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTabName("done")}>
        <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TabBottomMenu;
