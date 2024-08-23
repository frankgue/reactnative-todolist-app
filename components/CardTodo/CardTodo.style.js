import { StyleSheet } from "react-native";

export const cardTodoStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    alignItems: "center",
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 25,
  },
  img: {
    width: 25,
    height: 25,
  },
});
