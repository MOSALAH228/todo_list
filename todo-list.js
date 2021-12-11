import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { todoList, styles } from "./styles";

const TodoList = ({ todos, onTodoAdd }) => {
  const deleteTodo = (id) => {
    let myTodo = todos.filter((todo) => todo.myId !== id);
    onTodoAdd(myTodo);
  };

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => {
        return (
          <View style={todoList.item} id={item.myId}>
            <Text
              style={{
                fontSize: 22,
              }}
            >
              Title: {item.title}
            </Text>
            <Checkbox
              value={item.done}
              onValueChange={() => {
                deleteTodo(item.myId);
              }}
            />
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={todoList.seperator}></View>}
    />
  );
};

export default TodoList;
