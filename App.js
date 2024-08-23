import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appStyles } from "./App.style";
import Header from "./components/Header/Header";
import CardTodo from "./components/CardTodo/CardTodo";
import { useState } from "react";
import TabBottomMenu from "./components/TabBottomMenu/TabBottomMenu";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";

const TODO_LIST = [
  { id: 1, title: "Todo", isCompleted: true },
  { id: 2, title: "Todo az", isCompleted: false },
  { id: 3, title: "Todo ze", isCompleted: true },
  { id: 4, title: "Todo", isCompleted: true },
  { id: 5, title: "Todo acz", isCompleted: false },
  { id: 6, title: "Todo ze", isCompleted: true },
  { id: 7, title: "Todocc", isCompleted: true },
  { id: 8, title: "Todo aszz", isCompleted: false },
  { id: 9, title: "Todo zqsqse", isCompleted: true },
  { id: 10, title: "Todo sqsqqd", isCompleted: true },
];

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const deleteTodo = (todoToDelete) => {
    Alert.alert("Suppression", "Supprimer cette tache ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
        },
      },
      { text: "Annuler", style: "cancel" },
    ]);
  };

  const getFilteredTodoList = () => {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  };

  const renderTodoItemList = () => {
    return getFilteredTodoList().map((todo) => (
      <View key={todo.id} style={appStyles.cardItem}>
        <CardTodo
          todo={todo}
          updateTodo={updateTodo}
          onLongPress={deleteTodo}
        />
      </View>
    ));
  };

  function updateTodo(todo) {
    const updateedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updateedTodo.id
    );

    const updateTodoList = [...todoList];
    updateTodoList[indexToUpdate] = updateedTodo;

    setTodoList(updateTodoList);
  }
  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const addTodo = () => {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
    setIsDialogVisible(false);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={appStyles.app}>
          <View style={appStyles.header}>
            <Header />
          </View>
          <View style={appStyles.body}>
            <ScrollView>{renderTodoItemList()}</ScrollView>
          </View>
        </SafeAreaView>
        <ButtonAdd onPress={showDialog} />
      </SafeAreaProvider>

      <TabBottomMenu
        todoList={todoList}
        selectedTabName={selectedTabName}
        setSelectedTabName={setSelectedTabName}
      />
      <Dialog.Container
        visible={isDialogVisible}
        onBackdropPress={() => setIsDialogVisible(false)}
      >
        <Dialog.Title>Créer une tache</Dialog.Title>
        <Dialog.Description>
          Choisi un nom pour la nouvelle tâche
        </Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label="Créer"
          onPress={addTodo}
        />
      </Dialog.Container>
    </>
  );
}
