import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    fontWeight: "bold",
  },
  textInput: {
    width: "60%",
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },

  container: {
    display: "flex",
    alignItems: "center",
  },

  btn: {
    width: "20%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const addTodoStyles = {
  container: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoInput: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    padding: 0,
    paddingLeft: 2,
    fontSize: 15,
  },
  todoInputFocused: {
    flexGrow: 1,
    backgroundColor: "lightgrey",
  },
  todoAddBtn: {
    backgroundColor: "black",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  todoAddBtnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
};

export const todoList = {
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
  },
  seperator: {
    borderWidth: 1,
    margin: 5,
    borderColor: "black",
  },
};
