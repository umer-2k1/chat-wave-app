import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../theme";
import PhoneInput from "react-native-phone-number-input";
const Verification: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <View className="flex h-screen mx-4">
        <Text>Enter Your Phone Number</Text>
        <Text>
          Please confirm your country code and enter your phone number
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgPrimary }}
          className={`flex justify-center items-center rounded-full p-4 `}
        >
          <Text className="text-center text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
