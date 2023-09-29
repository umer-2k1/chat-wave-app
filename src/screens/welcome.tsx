import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/themeContext";
const Welcome: React.FC = ({ navigation }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      <SafeAreaView>
        <View className="flex h-screen mx-4">
          <Image source={require("../assets/Illustration.png")} />
          <Text>
            Connect easily with your family and friends over countries
          </Text>
          <Text>Terms & Privacy Policy</Text>
          <TouchableOpacity
            style={{ backgroundColor: theme.primary }}
            className={`flex justify-center items-center rounded-full p-4 `}
            onPress={() => navigation.navigate("verification")}
          >
            <Text className="text-center text-white">Start Messaging</Text>
          </TouchableOpacity>
        </View>

        {/* tests */}
        <TouchableOpacity
          style={{
            backgroundColor: theme.primary,
            borderRadius: 8,
            padding: 16,
            alignItems: "center",
            marginTop: 16,
          }}
          onPress={() => changeTheme()}
        >
          <Text style={{ color: theme.text, fontSize: 16 }}>
            {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
