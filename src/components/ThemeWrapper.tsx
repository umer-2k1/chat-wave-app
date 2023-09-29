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
import { useTheme } from "../../theme/themeContext";
export const ThemeWrapper = ({ children }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      {children}
    </View>
  );
};
