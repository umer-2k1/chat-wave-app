import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "./theme/themeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeWrapper } from "./src/components/ThemeWrapper";

// import ==> screens
import { Otp, Welcome, Verification, Login, SignUp } from "./src/screens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <ThemeProvider>
        <ThemeWrapper>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="welcome"
                component={Welcome}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="verification"
                component={Verification}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="otp"
                component={Otp}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="login"
                component={Login}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="signup"
                component={SignUp}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeWrapper>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaView>
  );
}
