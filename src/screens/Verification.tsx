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
// imports
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/themeContext";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../components/CustomButton";

const Verification: React.FC = ({ navigation }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const phoneInput = useRef<null>(null);

  const getPhoneNumber = () => {
    Alert.alert(formattedValue);
  };
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      <View className="">
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
          {/* <TouchableOpacity
            style={{ backgroundColor: theme.primary }}
            className={`flex justify-center items-center rounded-full p-4 `}
            // onPress={() => getPhoneNumber()}
            onPress={() => navigation.navigate("otp")}
          >
            <Text className="text-center text-white">Continue</Text>
          </TouchableOpacity> */}
          <CustomButton
            label="Continue"
            onPress={() => navigation.navigate("otp")}
          />
        </View>
      </View>
    </View>
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
