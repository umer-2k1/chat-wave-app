import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useTheme } from "../../theme/themeContext";

const Otp: React.FC = () => {
  const { theme } = useTheme();
  const [otp, setOtp] = useState<{ [key: number]: string }>({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const firstInput = useRef<TextInput>(null);
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fouthInput = useRef<TextInput>(null);
  const fifthInput = useRef<TextInput>(null);
  const sixInput = useRef<TextInput>(null);

  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      <View className="">
        <Text>OTP verification</Text>
        <Text>
          Please confirm your country code and enter your phone number
        </Text>
      </View>
      {/* otp */}
      <View className="flex flex-row mt-4 items-center justify-center">
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={firstInput}
          maxLength={1}
          value={otp[1]}
          onChange={(text) => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current?.focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={firstInput}
          maxLength={1}
          onChange={(text) => {
            text && thirdInput.current?.focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={firstInput}
          maxLength={1}
          onChange={(text) => {
            text && fouthInput.current?.focus();
          }}
        />
        <TextInput
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={firstInput}
          maxLength={1}
          onChange={(text) => {
            text && fifthInput.current?.focus();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 16,
  },
});

export default Otp;
