import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "./src/screens/Welcome";
import Verification from "./src/screens/Verification";
import { ThemeProvider } from "./theme/themeContext";
import { ThemeWrapper } from "./src/components/ThemeWrapper";
export default function App() {
  // const { theme } = useTheme();
  return (
    <SafeAreaView>
      <ThemeProvider>
        {/* <Welcome /> */}
        {/* <View
          style={{ backgroundColor: theme.bgColor }}
          className="w-screen h-screen"
        > */}
        <ThemeWrapper>
          <Verification />
        </ThemeWrapper>
        {/* </View> */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaView>
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
