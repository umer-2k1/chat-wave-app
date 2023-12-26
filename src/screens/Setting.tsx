import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Switch } from "@rneui/themed";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../theme/themeContext";
import CustomButton from "../components/CustomButton";

const Setting: React.FC = ({ navigation }: any) => {
  const { theme, isDark, changeTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  const toggleTheme = () => {
    changeTheme();
    setChecked(!checked);
  };
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8 px-4"
    >
      {/* back icon */}
      <View className="flex flex-row items-center mt-4 ">
        <Text
          style={{ color: theme.textColor }}
          className="text-xl font-semibold "
        >
          More
        </Text>
      </View>
      {/* prfile */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View
            style={{ backgroundColor: theme.secondary }}
            className="w-16 items-center justify-center h-16 rounded-full"
          >
            <AntDesign
              name="user"
              style={{ fontSize: 30, color: theme.textColor }}
            />
          </View>
          <View className="mx-4 flex items-start">
            <Text
              style={{ color: theme.textColor }}
              className="text-lg ml-2 font-semibold"
            >
              Muhammad Umer
            </Text>
            <Text className="text-[#ADB5BD] text-lg ml-2 font-semibold">
              +92xxxxxxxxxx
            </Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="chevron-forward"
            className="font-extrabold"
            style={{ fontSize: 25, color: theme.textColor }}
            // onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <View className="flex space-y-8 py-4  border-b-2 border-[#EDEDED]">
        {/* account */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex-row items-center">
            <AntDesign
              name="user"
              style={{ fontSize: 30, color: theme.textColor }}
            />
            <Text
              style={{ color: theme.textColor }}
              className="text-lg ml-2 font-semibold"
            >
              Account
            </Text>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              className="font-extrabold"
              style={{ fontSize: 25, color: theme.textColor }}
              // onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        {/* Chats */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons
              name="chatbubble-outline"
              style={{ fontSize: 25, color: theme.textColor }}
            />
            <Text
              style={{ color: theme.textColor }}
              className="text-lg ml-2 font-semibold"
            >
              Chats
            </Text>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              className="font-extrabold"
              style={{ fontSize: 25, color: theme.textColor }}
              // onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <TouchableOpacity onPress={toggleTheme}>
          <View className="flex flex-row items-center justify-between ">
            <View className="flex-row items-center">
              <Feather
                name={isDark ? "moon" : "sun"}
                style={{ fontSize: 25, color: theme.textColor }}
              />
              <Text
                style={{ color: theme.textColor }}
                className="text-lg ml-2 font-semibold"
              >
                {isDark ? "Dark" : "Light"}
              </Text>
            </View>
            <View>
              {/* <Ionicons
                name="chevron-forward"
                className="font-extrabold"
                style={{ fontSize: 25, color: theme.textColor }}
                /> */}
              <Switch
                color={isDark ? theme.primary : theme.secondary}
                value={checked}
                onValueChange={(value) => {
                  changeTheme();
                  setChecked(value);
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons
              name="notifications-outline"
              style={{ fontSize: 25, color: theme.textColor }}
            />
            <Text
              style={{ color: theme.textColor }}
              className="text-lg ml-2 font-semibold"
            >
              Notifications
            </Text>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              className="font-extrabold"
              style={{ fontSize: 25, color: theme.textColor }}
              // onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="shield-alert-outline"
              style={{ fontSize: 25, color: theme.textColor }}
            />
            <Text
              style={{ color: theme.textColor }}
              className="text-lg ml-2 font-semibold"
            >
              Privacy
            </Text>
          </View>
          <View>
            <Ionicons
              name="chevron-forward"
              className="font-extrabold"
              style={{ fontSize: 25, color: theme.textColor }}
              // onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>

      {/* 2nd section */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons
            name="help-circle-outline"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <Text
            style={{ color: theme.textColor }}
            className="text-lg ml-2 font-semibold"
          >
            Help
          </Text>
        </View>
        <View>
          <Ionicons
            name="chevron-forward"
            className="font-extrabold"
            style={{ fontSize: 25, color: theme.textColor }}
            // onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* Invite friends */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Ionicons
            name="share-social-outline"
            style={{ fontSize: 25, color: theme.textColor }}
          />
          <Text
            style={{ color: theme.textColor }}
            className="text-lg ml-2 font-semibold"
          >
            Invite friends
          </Text>
        </View>
        <View>
          <Ionicons
            name="chevron-forward"
            className="font-extrabold"
            style={{ fontSize: 25, color: theme.textColor }}
            // onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;
