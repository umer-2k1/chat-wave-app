import React, { useState, useRef, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
// @ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../../theme/themeContext";
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
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";

interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}
const ChatWindow = ({ navigation, route }: any) => {
  const { username } = route.params;
  const { theme, isDark } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProfilePic, setProfilePic] = useState<Boolean>(false);

  const styles = StyleSheet.create({
    content: { backgroundColor: theme.bgColor, flex: 1 },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      width: "80%",
      borderWidth: 1,
      borderColor: "blue",
      marginHorizontal: 10,
    },
    textInput: {
      flex: 1,
      alignItems: "center",
      color: theme.textColor,
      // paddingHorizontal: 10,
      justifyContent: "center",
      // marginHorizontal: 10,
      borderWidth: 1,
      borderColor: "pink",
      marginBottom: 6,
    },
  });
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: any = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  console.log("theme:", theme);
  console.log("isDarkss:", isDark);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: theme.primary,
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 15,
            marginVertical: 6,
            // borderColor: theme.primary,
            // borderWidth: 2,
          },
          left: {
            paddingVertical: 2,
            paddingHorizontal: 6,
            marginVertical: 6,
            backgroundColor: theme.bgColor,
            borderColor: "silver",
            borderWidth: 2,
            borderRadius: 15,
          },
        }}
        textStyle={{
          left: {
            color: theme.textColor,
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props}>
        <View>
          <Ionicons
            name="send"
            style={{
              fontSize: 25,
              color: theme.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome
        name="angle-double-down"
        style={{
          fontSize: 25,
          // color: theme.primary,
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      />
    );
  };

  const renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          // Customize the container style for the input toolbar
          backgroundColor: theme.secondary,
          borderTopWidth: 0,
          borderTopColor: "none",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 4,
          paddingHorizontal: 4,
          // borderWidth: 4,
          // borderColor: "red",
          // borderStyle: "solid",
        }}
      />
    );
  };

  const renderComposer = (props: any) => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Placeholder Text"
          placeholderTextColor={theme.textColor}
          {...props}
        />
      </View>
    );
  };

  return (
    <View
      style={{ backgroundColor: theme.bgColor }}
      className="w-screen h-screen flex space-y-8 px-4"
    >
      <View className="flex flex-row items-center justify-between mt-8 ">
        <View className="flex flex-row items-center space-x-4">
          <Ionicons
            name="chevron-back"
            style={{ fontSize: 35, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />

          {/* <Text
            style={{ color: theme.textColor }}
            className="text-xl font-semibold "
          >
            {username}
          </Text> */}
          <HStack
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            space="lg"
            className="border-2 border-fuchsia-600"
          >
            <Avatar bgColor="$indigo600">
              {isProfilePic && (
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  }}
                />
              )}

              {!isProfilePic && (
                <AvatarFallbackText>Muhammad Umer</AvatarFallbackText>
              )}
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
                {"Muhammad"} {"Umer"}
              </Heading>
              <Text className="text-[#ADB5BD]">{"Active now"}</Text>
            </VStack>
          </HStack>
        </View>
        <View className="flex flex-row items-center space-x-4">
          <AntDesign
            name="search1"
            style={{ fontSize: 25, color: "#ADB5BD" }}
          />
          <FontAwesome
            name="bars"
            style={{ fontSize: 25, color: theme.textColor }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <View style={styles.content}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
          messagesContainerStyle={{
            backgroundColor: isDark ? theme.secondary : theme.textColor,
            // backgroundColor: "pink",
            marginTop: -6,
            // borderWidth: 4,
            // borderColor: "pink",
            // borderStyle: "solid",
          }}
          infiniteScroll
          renderInputToolbar={renderInputToolbar}
          // renderComposer={renderComposer}
        />
      </View>
    </View>
  );
};

export default ChatWindow;
