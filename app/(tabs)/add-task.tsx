// import { useState } from "react";
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

// type Todo = {
//   id: string;
//   input: string;
//   completed: boolean;
// }

// type ItemProps = {
//   todo: Todo;
//   toggleTodo: (id: string) => void;
//   removeTodo: (id: string) => void;
// }

// const Item = ({ todo, toggleTodo, removeTodo}: ItemProps) => (
//   <View style={styles.todoRow}>

//     <Button 
//         title={todo.completed? "undo" : "done"}
//         onPress={() => toggleTodo(todo.id)}
//     />

//     <Text
//         style={[
//           styles.todo,
//           todo.completed && { textDecorationLine: "line-through", color: "darkgrey" },
//         ]}
//     >
//       {todo.input}
//     </Text>

//     <Button
//         title="Remove"
//         onPress={() => removeTodo(todo.id)}
//     />
//   </View>
// )

// export default function TodoApp() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     const newTodo: Todo = {
//       id: Date.now().toString(),
//       input: input,
//       completed: false
//     }
//     setTodos([...todos, newTodo]);
//     setInput("");
//   };

//   const toggleTodo = (id: string) => {
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const removeTodo = (id: string) => {
//     setTodos(todos.filter((todo) => todo.id !== id))
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>To-Do List</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="add a task"
//         placeholderTextColor="lightgrey"
//         value={input}
//         onChangeText={setInput}
//       />
//       <Button
//         title="Add"
//         onPress={addTodo}
//       />

//     <FlatList
//       data={todos}
//       renderItem={({item}) => (
//          <Item 
//             todo={item}
//             toggleTodo={toggleTodo}
//             removeTodo={removeTodo}
//           />
//       )}
//       keyExtractor={item => item.id}
//     />

//     </View>

//   )

// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, marginTop: 50 },
//   title: { fontSize: 24, marginBottom: 10, color: "lightgrey" },
//   input: {
//     borderWidth: 1,
//     borderColor: "lightgrey",
//     marginBottom: 10,
//     padding: 8,
//     color: "lightgrey",
//   },
//   todoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 4,
//   },
//   todo: { fontSize: 18, color: "lightgrey", flex: 1 },
// });