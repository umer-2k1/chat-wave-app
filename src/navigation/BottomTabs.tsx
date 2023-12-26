import { View, StyleSheet, Text } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Setting, Chats, Home } from "../screens";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../theme/themeContext";
const BottomTabs = () => {
  const { theme, isDark } = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused }) => tabIcons(route, focused, theme),
        tabBarStyle: {
          position: "absolute",
          shadowColor: "#fff",
          shadowOpacity: 0.05,
          shadowOffset: {
            width: 10,
            height: 10,
          },

          backgroundColor: theme.secondary,
          borderRadius: 0,
          marginBottom: 0,
          height: 75,
          marginHorizontal: 0,
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="setting" component={Setting} />
    </Tab.Navigator>
  );
};

const tabIcons = (route: { name: string }, focused: boolean, theme: any) => {
  let icon;
  if (route.name === "chats") {
    return (icon = (
      <Ionicons
        name="chatbubble-ellipses-outline"
        style={{
          fontSize: 25,
          color: focused ? "red" : theme.textColor,
        }}
      />
    ));
  }
  if (route.name === "setting") {
    return (icon = (
      <Ionicons
        name="settings-outline"
        style={{ fontSize: 25, color: focused ? "red" : theme.textColor }}
      />
    ));
  }
  if (route.name === "home") {
    return (icon = (
      <Ionicons
        name="home-outline"
        style={{ fontSize: 25, color: focused ? "red" : theme.textColor }}
      />
    ));
  }
};

export default BottomTabs;
