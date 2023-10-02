import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../theme/themeContext";
import CustomButton from "../../components/CustomButton";

const Login: React.FC = ({ navigation }: any) => {
  const { theme, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-12"
    >
      {/* back icon */}
      <View className="flex flex-row items-center mt-8 mx-4">
        <Ionicons
          name="chevron-back"
          style={{ fontSize: 35, color: theme.textColor }}
          onPress={() => navigation.goBack()}
        />
        <Text className="ml-4 text-xl font-semibold ">Login</Text>
      </View>

      {/* inputs */}
      <View className="items-center mx-4">
        <TextInput
          style={{ backgroundColor: theme.secondary }}
          className="mt-1 p-3 w-full border rounded-md bg-gray-200 focus:outline-none focus:border-gray-400"
          placeholder="Your name"
        />
        <TextInput
          style={{ backgroundColor: theme.secondary }}
          className="mt-1 p-3 w-full border rounded-md bg-gray-200 focus:outline-none focus:border-gray-400"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View className="">
        <CustomButton
          label={"Start Messaging"}
          onPress={() => navigation.navigate("verification")}
        />
      </View>

      {/* <Text style={{ color: theme.textColor }}>Terms & Privacy Policy</Text> */}
      {/* <CustomButton
        label={"Switch to Dark Mode"}
        onPress={() => changeTheme()}
      /> */}
    </View>
  );
};

export default Login;
