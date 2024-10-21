// screens/AddTaskScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import styles from "../AddTask/styles";

const AddTask = ({ navigation, route }) => {
  const { tasks, setTasks } = route.params;
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Math.random().toString(), title: task }]);
      navigation.goBack(); // Go back to the to-do list screen
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default AddTask;
