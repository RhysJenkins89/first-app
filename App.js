import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button,  FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      {key: Math.random().toString(), value: goalTitle}
    ]);
    // setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}])  
    setIsAddMode(false);
  }; 

  const removeGoalHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return (
        currentGoals.filter((goal) => goal.key !== goalID)  
      )
    })
  }

  const cancelGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.mainContainer}> 
      <Button title="add new goal." onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoal}/>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => {
          return (
            <GoalItem onDelete={removeGoalHandler} id={itemData.item.key} title={itemData.item.value}/>    
          )
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50
  }
});