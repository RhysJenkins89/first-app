import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);  
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelGoalHandler = () => {
    props.onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="cancel."
              color="red"
              onPress={cancelGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="add."
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10 
  },
  buttonContainer: {
    width: "50%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around"
  }, 
  button: {
    width: "40%"
  }
})

export default GoalInput;