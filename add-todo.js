import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
} from "react-native";
import { addTodoStyles, styles } from "./styles";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const AddTodo = ({ onTodoAdd }) => {
  const [todoTitle, setTodoTitle] = useState();
  const [focusToggle, setFocusToggle] = useState(false);
  const [id, setId] = useState(0);

  const handelTodoAddButton = () => {
    setId(id + 1);
    const todo = {
      myId: id,
      title: todoTitle,
      done: false,
    };
    onTodoAdd(todo);
    console.log("child", todo);
    setTodoTitle("");
  };

  return (
    <View style={addTodoStyles.container}>
      <TextInput
        value={todoTitle}
        onChangeText={(text) => setTodoTitle(text)}
        onFocus={() => {
          LayoutAnimation.easeInEaseOut();
          setFocusToggle(true);
        }}
        onBlur={() => {
          LayoutAnimation.easeInEaseOut();
          setFocusToggle(false);
        }}
        placeholder="enter your Todo"
        style={{
          ...addTodoStyles.todoInput,
          ...(focusToggle ? addTodoStyles.todoInputFocused : {}),
        }}
      />
      <TouchableOpacity
        style={addTodoStyles.todoAddBtn}
        onPress={handelTodoAddButton}
      >
        <Text style={addTodoStyles.todoAddBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
