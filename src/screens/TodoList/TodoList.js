// screens/ToDoListScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styles from "../TodoList/styles";

const ToDoListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Buy groceries" },
    { id: "2", title: "Walk the dog" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.title}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddTask", { tasks, setTasks })}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoListScreen;
