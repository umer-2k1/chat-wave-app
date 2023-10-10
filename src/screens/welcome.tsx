import React from "react";
import { Text, View, Image } from "react-native";
import { useTheme } from "../../theme/themeContext";
import CustomButton from "../components/CustomButton";
const Welcome: React.FC = ({ navigation }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex-1"
    >
      <View className="flex mx-4 justify-center mt-2 h-[95vh]">
        <View className="flex items-center justify-center  my-8">
          <Image
            source={require("../assets/Illustration.png")}
            className="object-cover"
          />
        </View>
        <Text
          className="my-4 text-center text-2xl font-semibold"
          style={{ color: theme.textColor }}
        >
          Connect easily with your family and friends over countries
        </Text>
        <Text
          className="mt-16 text-center text-base font-semibold"
          style={{ color: theme.textColor }}
        >
          Terms & Privacy Policy
        </Text>
        <View className="justify-end mt-2 ">
          <CustomButton
            label={"Start Messaging"}
            onPress={() => navigation.navigate("contacts")}
            // onPress={() => navigation.navigate("verification")}
          />
        </View>
      </View>

      <View className="">
        <CustomButton
          label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onPress={() => changeTheme()}
        />
      </View>
    </View>
  );
};

export default Welcome;
