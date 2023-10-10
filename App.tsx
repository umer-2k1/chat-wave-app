import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "./theme/themeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeWrapper } from "./src/components/ThemeWrapper";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
// import ==> screens
import {
  Otp,
  Welcome,
  Verification,
  Login,
  SignUp,
  Setting,
  Contacts,
  Chats,
  PersonalChat,
} from "./src/screens";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <Provider store={store}>
        <ThemeProvider>
          <ThemeWrapper>
            <GluestackUIProvider config={config}>
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
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="setting"
                    component={Setting}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="contacts"
                    component={Contacts}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="chats"
                    component={Chats}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="personal-chat"
                    component={PersonalChat}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </GluestackUIProvider>
          </ThemeWrapper>
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
}
