import React, { useState, useRef, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CustomButtonProps } from "../../types";
import { useTheme } from "../../theme/themeContext";

const CustomButton = ({
  //   isDisabled,
  label,
  onPress,
  containerStyle,
  textStyle,
  icons,
}: CustomButtonProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.primary,
        marginTop: 16,
        // borderRadius: 8,
        // padding: 16,
        // alignItems: "center",
      }}
      className={`flex justify-center items-center rounded-full p-4 ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`text-[#F7F7FC] text-center text-[16px] ${textStyle}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
