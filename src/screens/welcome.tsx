import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../theme";
const Welcome: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="flex h-screen mx-4">
        <Image source={require("../assets/Illustration.png")} />
        <Text>Connect easily with your family and friends over countries</Text>
        <Text>Terms & Privacy Policy</Text>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgPrimary }}
          className={`flex justify-center items-center rounded-full p-4 `}
        >
          <Text className="text-center text-white">Start Messaging</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
