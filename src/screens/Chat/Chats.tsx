import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../../theme/themeContext";
import { formattedTimefromNow } from "../../utils/formattedTimeStamp";
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
const users = [
  {
    firstName: "Ronald",
    lastName: "Richards",
    message: "hello! Good morning",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    online: true,
    lastMessageTimestamp: "2023-10-17T05:19:50.721+00:00",
    messageCount: 1,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    message: "Hi there!",
    online: false,
    lastMessageTimestamp: "2023-09-25T05:19:50.721+00:00",
    messageCount: 2,
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    message: "How are you doing?",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    online: true,
    lastMessageTimestamp: "2023-09-25T05:19:50.721+00:00",
    messageCount: 0,
  },
  {
    firstName: "Eva",
    lastName: "Davis",
    message: "Good evening!",
    online: false,
    lastMessageTimestamp: "2023-10-15T05:19:50.721+00:00",
    messageCount: 6,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    message: "Greetings!",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    online: true,
    lastMessageTimestamp: "2023-10-16T05:19:50.721+00:00",
    messageCount: 0,
  },
];

const Chats = ({ navigation }: any) => {
  const { theme } = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8 px-4"
    >
      <View className="flex flex-row items-center justify-between mt-8 ">
        <Text
          style={{ color: theme.textColor }}
          className="text-xl font-semibold "
        >
          Chats
        </Text>
        <View className="flex flex-row space-x-6">
          <MaterialCommunityIcons
            name="message-plus-outline"
            style={{ fontSize: 25, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />
          <MaterialCommunityIcons
            name="playlist-check"
            style={{ fontSize: 25, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />
        </View>
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
      <View className=" flex w-full border-2">
        <VStack space="4xl">
          <FlatList
            data={users}
            keyExtractor={(item) => item.lastMessageTimestamp}
            renderItem={({ item }) => (
              // const { firstName, lastName, message, image, online, lastMessageTimestamp } = item;

              <HStack
                sx={{
                  marginBottom: 20,
                  paddingVertical: 4,
                  // borderBottomWidth: 0.5,
                  // borderBottomColor: "#ADB5BD",
                  display: "flex",
                  alignItems: "center",
                  borderWidth: 2,
                }}
                space="lg"
                // className="border-2"
              >
                <Avatar bgColor="$indigo600">
                  {item?.image && (
                    <AvatarImage
                      source={{
                        uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                      }}
                    />
                  )}

                  <AvatarFallbackText>
                    {item?.firstName} {item?.lastName}
                  </AvatarFallbackText>
                  {/* {item?.online && (
                    <AvatarBadge
                      sx={{
                        _dark: {
                          borderColor: "$black",
                          w: "$32",
                          h: "$32",
                        },
                      }}
                    />
                  )} */}
                </Avatar>
                <VStack>
                  <Heading size="sm" sx={{ color: theme.textColor }}>
                    {item?.firstName} {item?.lastName}
                  </Heading>
                  <Text className="text-[#ADB5BD]">{item?.message}</Text>
                </VStack>

                <View className=" w-1/2 flex-1">
                  <VStack
                    sx={{
                      display: "flex",
                      // justifyContent: "flex-end",
                      gap: 4,
                      borderWidth: 2, // Border width
                      borderColor: "red", // Border color
                      borderStyle: "solid",
                    }}
                  >
                    <Text className="text-[#ADB5BD] text-right">
                      {" "}
                      {formattedTimefromNow(item?.lastMessageTimestamp)}
                    </Text>
                    <View
                      className="items-end justify-end flex"
                      style={{ flexDirection: "row" }}
                    >
                      {item.messageCount > 0 && (
                        <View
                          className="items-end justify-end flex"
                          style={{ flexDirection: "row" }}
                        >
                          <View className=" mx-auto w-6 h-6 items-center justify-center  rounded-full bg-[#D2D5F9]">
                            <Text className="text-[#001A83] text-right">
                              {item?.messageCount}
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                  </VStack>
                </View>
              </HStack>
            )}
          />

          {/* <HStack
            space="lg"
            sx={{
              paddingBottom: 12,
              borderBottomWidth: 0.5,
              borderBottomColor: "#ADB5BD",
            }}
          >
            <Avatar bgColor="$indigo600">
              <AvatarFallbackText>Muhammad Umer</AvatarFallbackText>
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
              <Heading size="sm" sx={{ color: theme.textColor }}>
                Muhammad Umer{" "}
              </Heading>
              <Text className="text-[#ADB5BD]">
                Good morning, did you sleep well?
              </Text>
            </VStack>
            <VStack
              sx={{
                display: "flex",
                gap: 4,
              }}
            >
              <Text className="text-[#ADB5BD] text-center"> Yesterday</Text>
              <View className=" mx-auto w-6 h-6 items-center justify-center  rounded-full bg-[#D2D5F9]">
                <Text className="text-[#001A83] text-center">1</Text>
              </View>
            </VStack>
          </HStack>
          <HStack
            space="lg"
            sx={{
              paddingBottom: 12,
              borderBottomWidth: 0.5,
              borderBottomColor: "#ADB5BD",
            }}
          >
            <Avatar bgColor="$indigo600">
              <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
            </Avatar>
            <VStack>
              <Heading size="sm" sx={{ color: theme.textColor }}>
                Arlene McCoy
              </Heading>
              <Text className="text-[#ADB5BD]">Alright!</Text>
            </VStack>
          </HStack> */}
        </VStack>
      </View>
    </View>
  );
};

export default Chats;
