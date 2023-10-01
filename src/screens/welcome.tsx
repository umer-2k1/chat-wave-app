import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "../../theme/themeContext";
import CustomButton from "../components/CustomButton";

const Welcome: React.FC = ({ navigation }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      <View className="flex mx-4">
        <Image source={require("../assets/Illustration.png")} />
        <Text style={{ color: theme.textColor }}>
          Connect easily with your family and friends over countries
        </Text>
        <Text style={{ color: theme.textColor }}>Terms & Privacy Policy</Text>
        <CustomButton
          label={"Start Messaging"}
          onPress={() => navigation.navigate("verification")}
        />
      </View>

      <CustomButton
        label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onPress={() => changeTheme()}
      />

      <Text style={{ color: theme.textColor }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        cumque excepturi molestias eum reiciendis omnis! Eos, exercitationem
        hic? Illo eos consequuntur facere!
      </Text>
    </View>
  );
};

export default Welcome;
