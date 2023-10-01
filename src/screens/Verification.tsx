import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInputProps,
} from "react-native";
// imports
import { useTheme } from "../../theme/themeContext";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../components/CustomButton";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
const Verification: React.FC = ({ navigation }: any) => {
  const { theme, isDark } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const phoneInput = useRef<null>(null);

  const getPhoneNumber = () => {
    Alert.alert(formattedValue);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.secondary,
      color: theme.textColor,
    },

    phoneInputContainer: {
      backgroundColor: theme.secondary,
      color: theme.textColor,
    },
    phoneInputText: {
      color: theme.textColor,
    },
    flagStyle: {
      backgroundColor: theme.secondary,
    },
    countryPickerButtonStyle: {
      color: "#fff",
      backgroundColor: "#fff",
    },
    phoneNumberText: {
      color: "#fff",
    },
  });
  const commonTextInputProps: TextInputProps = {
    placeholder: "Enter Phone Number",
    placeholderTextColor: theme.textColor,
  };
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-12 "
    >
      {/* back icon */}
      <View className="mt-8 mx-4">
        <Ionicons
          name="chevron-back"
          style={{ fontSize: 35, color: theme.textColor }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="flex space-y-4 space-x-2 justify-center items-center">
        <Text className="text-2xl font-bold" style={{ color: theme.textColor }}>
          Enter Your Phone Number
        </Text>
        <Text
          className="text-base text-center"
          style={{ color: theme.textColor }}
        >
          Please confirm your country code and enter your phone number
        </Text>
      </View>
      {/* phone Number */}
      <View
        style={
          {
            // marginHorizontal: 16,
          }
        }
        className="items-center"
      >
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="PK"
          layout="first"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          textInputProps={commonTextInputProps}
          containerStyle={styles.container}
          textContainerStyle={styles.phoneInputContainer}
          textInputStyle={styles.phoneInputText}
          codeTextStyle={styles.phoneInputText}
          withDarkTheme={isDark ? true : false}
          withShadow={true}
          autoFocus
        />
      </View>
      {/* <View className="w-[90%] mx-auto space-x-2"> */}
      <View className="flex mx-4">
        <CustomButton
          label="Continue"
          onPress={() => navigation.navigate("otp")}
        />
      </View>
    </View>
  );
};

export default Verification;
