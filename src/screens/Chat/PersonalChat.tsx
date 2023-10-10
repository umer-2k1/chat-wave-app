import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../../theme/themeContext";
import {
  Avatar,
  Button,
  ButtonText,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  HStack,
  Heading,
} from "@gluestack-ui/themed";

const PersonalChat = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8 px-4"
    >
      <View className="flex flex-row items-center justify-between mt-8 ">
        <View className="flex flex-row items-center space-x-4">
          <Ionicons
            name="chevron-back"
            style={{ fontSize: 35, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />

          <Text
            style={{ color: theme.textColor }}
            className="text-xl font-semibold "
          >
            Alex Carey
          </Text>
        </View>
        <View className="flex flex-row items-center space-x-4">
          <AntDesign
            name="search1"
            style={{ fontSize: 25, color: "#ADB5BD" }}
          />
          <FontAwesome
            name="bars"
            style={{ fontSize: 25, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      {/* Messsages */}
      <View
        style={{ backgroundColor: theme.bgColor }}
        className="h-[80vh] flex border-2"
      >
        <View className="flex p-[12px] flex-col items-start gap-[4px]">
          <Text
            style={{ color: "black", backgroundColor: "gray" }}
            className=""
          >
            Personal Chat Bubble
          </Text>
        </View>
        <View className="flex p-[12px] flex-col items-end gap-[4px]">
          <Text
            style={{ color: "white", backgroundColor: theme.primary }}
            className=""
          >
            Personal Chat Bubble
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalChat;
