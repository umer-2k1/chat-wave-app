import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../../theme/themeContext";
import CustomButton from "../../components/CustomButton";
const SignUp = ({ navigation }: any) => {
  const { theme, changeTheme, isDark } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8"
    >
      {/* back icon */}
      <View className="flex flex-row items-center mt-8 mx-4">
        <Ionicons
          name="chevron-back"
          style={{ fontSize: 35, color: theme.textColor }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{ color: theme.textColor }}
          className="ml-4 text-xl font-semibold "
        >
          Sign Up
        </Text>
      </View>
      <View>
        <Text
          className="text-center text-2xl font-bold"
          style={{ color: theme.textColor }}
        >
          Sign Up to create an account
        </Text>
      </View>

      <View className="relative">
        <View
          style={{ backgroundColor: theme.secondary }}
          className="  mx-auto w-32 items-center justify-center h-32 rounded-full"
        >
          <AntDesign
            name="user"
            style={{ fontSize: 65, color: theme.textColor }}
          />
        </View>
        <AntDesign
          name="pluscircle"
          className=""
          style={{
            fontSize: 35,
            color: theme.textColor,
            position: "absolute",
            top: "40%",
            right: "50%",
            transform: [{ translateX: 50 }, { translateY: 50 }],
          }}
        />
        {/* <View
          style={{
            backgroundColor: isDark ? "white" : "black",
            marginBottom: -52,
          }}
          className=" p-2 rounded-full ml-20"
        >
          <AntDesign
            name="plus"
            style={{ fontSize: 35, color: theme.textColor }}
            />
        </View> */}
      </View>

      {/* inputs */}
      <View className="items-center mx-4">
        <View
          style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
          className="items-center flex-row justify-center focus:border-gray-400
      h-[65px] rounded-lg mb-6"
        >
          <AntDesign
            name="user"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <TextInput
            style={{
              backgroundColor: theme.secondary,
              marginVertical: 10,
              color: theme.textColor,
            }}
            className="flex-1 h-full px-4 focus:outline-none bg-gray-200"
            placeholder="Your name"
            placeholderTextColor={theme.textColor}
          />
        </View>
        <View
          style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
          className="items-center flex-row justify-center focus:border-gray-400
      h-[65px] rounded-lg mb-6"
        >
          <MaterialCommunityIcons
            name="email-outline"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <TextInput
            style={{
              backgroundColor: theme.secondary,
              marginVertical: 10,
              color: theme.textColor,
            }}
            className="flex-1 h-full px-4 focus:outline-none bg-gray-200"
            placeholderTextColor={theme.textColor}
            placeholder="Email"
          />
        </View>
        <View
          style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
          className="items-center flex-row justify-center focus:border-gray-400
      h-[65px] rounded-lg mb-6"
        >
          <Feather
            name="lock"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <TextInput
            style={{
              backgroundColor: theme.secondary,
              marginVertical: 10,
              color: theme.textColor,
            }}
            className="flex-1 h-full px-4 focus:outline-none bg-gray-200"
            placeholderTextColor={theme.textColor}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View className="flex mx-4">
        <CustomButton
          label={"Sign Up"}
          // onPress={() => navigation.navigate("verification")}
          onPress={() => Alert.alert("Sin up")}
        />
      </View>
    </View>
  );
};

export default SignUp;
