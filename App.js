import React, { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import AddTodo from "./add-todo";
import { styles } from "./styles";
import TodoList from "./todo-list";

const App = () => {
  const [list, setList] = useState();

  useEffect(() => {
    let total = todos.filter((todo) => todo.done === true);
    setList(total.length);
  });
  const [todos, setTodos] = useState([]);

  const handelAddTodo = (todo) => {
    console.log("parent", todo);
    // setTodos((todos) => {
    //   todos.push(todo);
    //   return [...todos];
    // });
    setTodos([todo, ...todos]);
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar hidden />
      <Text style={styles.header}>TodoList: Total{todos.length}</Text>
      <AddTodo onTodoAdd={handelAddTodo} />
      <TodoList todos={todos} onTodoAdd={setTodos} />
    </View>
  );
};

export default App;
