import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "./src/screens/welcome";
export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Welcome />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
