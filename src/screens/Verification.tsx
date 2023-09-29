import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/themeContext";

import PhoneInput from "react-native-phone-number-input";
const Verification: React.FC = () => {
  const { theme, isDark, changeTheme } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const phoneInput = useRef<null>(null);

  const getPhoneNumber = () => {
    Alert.alert(formattedValue);
  };
  return (
    // <SafeAreaView className="">
    <View
    // style={{ backgroundColor: theme.bgColor }}
    // className="w-screen h-screen flex"
    >
      <View>
        <Text>Enter Your Phone Number</Text>
        <Text>
          Please confirm your country code and enter your phone number
        </Text>
        {/* phone Number */}
        <View style={{ marginHorizontal: 16 }} className="flex">
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
            // containerStyle={styles.phoneInputContainer}
            // textInputStyle={styles.phoneInputText}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={{ backgroundColor: theme.primary }}
            className={`flex justify-center items-center rounded-full p-4 `}
            onPress={() => getPhoneNumber()}
          >
            <Text className="text-center text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: theme.primary,
          borderRadius: 8,
          padding: 16,
          alignItems: "center",
          marginTop: 16,
        }}
        onPress={() => changeTheme()}
      >
        <Text style={{ color: theme.text, fontSize: 16 }}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Text>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   phoneInputContainer: {
//     width: "80%",
//     marginBottom: 20,
//   },
//   phoneInputText: {
//     fontSize: 16,
//   },
//   phoneNumberText: {
//     marginTop: 20,
//     fontSize: 18,
//   },
// });
export default Verification;
