import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../../theme/themeContext";
import CustomButton from "../../components/CustomButton";
import {
  Avatar,
  Button,
  ButtonText,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  HStack,
  Heading,
} from "@gluestack-ui/themed";

const Contacts = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8 px-4"
    >
      <View className="flex flex-row items-center justify-between mt-4 ">
        <Text
          style={{ color: theme.textColor }}
          className="text-xl font-semibold "
        >
          Contacts
        </Text>
        <AntDesign
          name="plus"
          style={{ fontSize: 25, color: theme.textColor }}
          onPress={() => navigation.goBack()}
        />
      </View>
      {/* search bar */}
      <View
        style={{ paddingHorizontal: 25, backgroundColor: theme.secondary }}
        className="items-center flex-row justify-center focus:border-gray-400
        px-[10px] py-[2px] rounded-lg mb-6 text-gray-500 "
      >
        <AntDesign name="search1" style={{ fontSize: 25, color: "#ADB5BD" }} />
        <TextInput
          style={{
            backgroundColor: theme.secondary,
            // color: "#ADB5BD",
            marginVertical: 10,
          }}
          className="text-base text-gray-500 flex-1 h-full px-4 focus:outline-none bg-gray-200 "
          placeholder="Search"
          placeholderTextColor={"#ADB5BD"}
        />
      </View>
      {/*  */}
      <View className="">
        <VStack space="4xl">
          <HStack space="lg">
            <Avatar bgColor="$indigo600">
              <AvatarFallbackText>Ronald Richards</AvatarFallbackText>

              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Ronald Richards</Heading>
              <Text>Last seen yesterday</Text>
            </VStack>
          </HStack>
          <HStack space="lg">
            <Avatar size="lg" bgColor="$indigo600">
              <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
              <AvatarBadge
                sx={{
                  _dark: {
                    borderColor: "$black",
                    w: "$32",
                    h: "$32",
                  },
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Arlene McCoy</Heading>
              <Text>Last seen yesterday</Text>
            </VStack>
          </HStack>
          <HStack space="lg">
            <Avatar bgColor="$indigo600">
              <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
            </Avatar>
            <VStack>
              <Heading size="sm">Arlene McCoy</Heading>
              <Text>Last seen yesterday</Text>
            </VStack>
          </HStack>
        </VStack>
      </View>
    </View>
  );
};

export default Contacts;
