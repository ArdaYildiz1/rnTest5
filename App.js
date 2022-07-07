import {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
      setCourseGoals( (currentCourseGoals) => {
          return currentCourseGoals.filter((goal) => goal.id !== id);
      })
  }
  function goalInputHandler(e) {
    setEnteredGoalText(e);
  }

  function addGoalHandler() {
    // You can see the input in run terminal
    // console.log(enteredGoalText);
    setCourseGoals([...courseGoals, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
                   placeholder={"Your course goal!"}
                    onChangeText={goalInputHandler}/>
        <Button
            title={"Add goal"}
            onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
          <ScrollView>
              <Pressable onPress={deleteGoalHandler} android_ripple={{color: "dddddd"}}>
                  {courseGoals.map( (goal) => <Text style={styles.goalItem}
                                                    key={Math.random().toString()}>{goal}</Text>)}
              </Pressable>
          </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },

    goalsContainer: {
        flex: 4
    },

    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white"
    }
});

