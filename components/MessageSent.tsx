import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import mail from "../assets/icons/others.png";

import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Settings: undefined;
};

type DescriptionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Settings"
>;

type Props = {
  navigation: DescriptionScreenNavigationProp;
};

const MessageSent: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <View style={style.messageContainer}>
          <Image source={mail}></Image>
          <Text style={style.MessageSentText}>Message sent!</Text>
          <Text style={style.text}>
            Thank you for contacting support. We will get back to you regarding
            the concerns you submitted.
          </Text>
        </View>
        <TouchableOpacity
          style={style.sendOpacity}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={style.sendText}>Go to dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MessageSent;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  messageContainer: {
    marginHorizontal: 24,
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  MessageSentText: {
    fontFamily: "Poppins-700",
    fontSize: 24,
    lineHeight: 32,
    marginTop: 32,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 24,
  },
  sendOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE7325",
    height: 48,
    borderRadius: 40,
    marginTop: 42,
    gap: 20,
    paddingHorizontal: 24,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  sendText: {
    fontFamily: "Poppins-700",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#FFFFFF",
  },
});
