import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "./src/screens/Welcome";
import Verification from "./src/screens/Verification";
export default function App() {
  return (
    <View>
      <SafeAreaView>
        {/* <Welcome /> */}
        <Verification />
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
