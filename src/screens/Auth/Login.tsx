import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../theme/themeContext";
import CustomButton from "../../components/CustomButton";

const Login: React.FC = ({ navigation }: any) => {
  const { theme, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      {/* back icon */}
      <Ionicons
        name="chevron-back"
        style={{ fontSize: 35, color: theme.textColor }}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ color: theme.textColor }}>Terms & Privacy Policy</Text>
      <CustomButton
        label={"Start Messaging"}
        onPress={() => navigation.navigate("verification")}
      />

      <CustomButton
        label={"Switch to Dark Mode"}
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

export default Login;
