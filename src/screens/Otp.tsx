import React, { useState, useRef, useEffect } from "react";
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
    5: "",
    6: "",
  });
  const firstInput = useRef<TextInput>(null);
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fouthInput = useRef<TextInput>(null);
  const fifthInput = useRef<TextInput>(null);
  const sixthInput = useRef<TextInput>(null);
  const [showElement, setShowElement] = useState<boolean>(false);
  const [showResetBtn, setShowResetBtn] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);
  const showDigits = () => {
    // const enteredOtp: string = Object.values(otp).join("");
    // if (enteredOtp.length >= 6) {
    //   Alert.alert("Entered OTP ", enteredOtp);
    //   // setShowElement(true);
    // } else {
    //   return;
    // }
  };
  const resetHandler = () => {
    setShowResetBtn(false);
    setTimer(10);
  };
  useEffect(() => {
    const enteredOtp: string = Object.values(otp).join("");
    if (enteredOtp.length >= 6) {
      Alert.alert("Entered OTP ", enteredOtp);
      setShowElement(true);
    } else if (enteredOtp.length < 6) {
      setShowElement(false);
    }
  }, [otp]);

  useEffect(() => {
    let interval: number;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowResetBtn(true);
      // setTimer(60);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex"
    >
      <View className="">
        <Text>Enter OTP Code here</Text>
        <Text>
          We have sent you an SMS with the code to +62 1309 - 1710 - 1920
        </Text>
      </View>
      {/* otp */}
      <View className="flex flex-row mt-4 items-center justify-center  drop-shadow-lg">
        <TextInput
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={firstInput}
          maxLength={1}
          autoFocus
          onChangeText={(text) => {
            text && secondInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 1: text }));
          }}
        />
        <TextInput
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          style={styles.otpBox}
          keyboardType="number-pad"
          ref={secondInput}
          maxLength={1}
          onChangeText={(text) => {
            text.length === 1
              ? thirdInput.current?.focus()
              : firstInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 2: text }));
          }}
        />
        <TextInput
          style={styles.otpBox}
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          keyboardType="number-pad"
          ref={thirdInput}
          maxLength={1}
          onChangeText={(text) => {
            text.length == 1
              ? fouthInput.current?.focus()
              : secondInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 3: text }));
          }}
        />
        <TextInput
          style={styles.otpBox}
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          keyboardType="number-pad"
          ref={fouthInput}
          maxLength={1}
          onChangeText={(text) => {
            text.length == 1
              ? fifthInput.current?.focus()
              : thirdInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 4: text }));
          }}
        />
        <TextInput
          style={styles.otpBox}
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          keyboardType="number-pad"
          ref={fifthInput}
          maxLength={1}
          onChangeText={(text) => {
            text.length == 1
              ? sixthInput.current?.focus()
              : fouthInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 5: text }));
          }}
        />
        <TextInput
          style={styles.otpBox}
          className="transition ease-in-out delay-350 focus:border-2 focus:border-blue-600  "
          keyboardType="number-pad"
          ref={sixthInput}
          maxLength={1}
          onChangeText={(text) => {
            text.length == 1
              ? sixthInput.current?.focus()
              : fifthInput.current?.focus();
            setOtp((prevOtp) => ({ ...prevOtp, 6: text }));
          }}
        />
      </View>
      <View>
        {timer > 0 && (
          <Text>
            If you don't get OTP, you can try in{" "}
            <Text className="font-bold ">{timer} seconds</Text>
          </Text>
        )}
      </View>
      {showElement && (
        <TouchableOpacity
          onPress={showDigits}
          style={{
            backgroundColor: theme.primary,
            borderRadius: 8,
            padding: 16,
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text>Verify</Text>
        </TouchableOpacity>
      )}

      {/* show reset button */}
      {showResetBtn && (
        <View>
          <TouchableOpacity
            onPress={resetHandler}
            style={{
              backgroundColor: theme.primary,
              borderRadius: 8,
              padding: 16,
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  otpBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    color: "rgb(107 114 128)",
    backgroundColor: "#F7F7FC",
    borderColor: "#EDEDED",
    marginLeft: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 5,
  },
});

export default Otp;
