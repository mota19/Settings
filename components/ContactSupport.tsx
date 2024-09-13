import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";

import send from "../assets/icons/send.png";
import mic from "../assets/icons/mic.png";
import arrowBack from "../assets/icons/arrow-back.png";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
  MessageSent: undefined;
};

type DescriptionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MessageSent"
>;

type Props = {
  navigation: DescriptionScreenNavigationProp;
};

const ContactSupport: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0E0E0" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#EE7325" />
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ height: 40, justifyContent: "center" }}
            >
              <Image source={arrowBack} width={24} height={24}></Image>
            </TouchableOpacity>
            <Text style={styles.headerText}>Contact support</Text>
          </View>
          <View style={styles.mainDiv}>
            <View>
              <Text style={styles.TextSupport}>
                Our email support is open 24/7.{"\n"}
                {"\n"}
                If you have any issues with our app, please let us know here or
                if you have any recommendations to improve our app, we’d love to
                hear from you.
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.InputText}
                placeholder="Type your concerns here"
                multiline
              />
              <TouchableOpacity style={styles.mic}>
                <Image source={mic} style={styles.micImage} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.sendOpacity}
              onPress={() => navigation.navigate("MessageSent")}
            >
              <Image source={send} />
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ContactSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  header: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: "Poppins-700",
    fontSize: 24,
    lineHeight: 32,
    height: 40,
  },
  mainDiv: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  TextSupport: {
    marginTop: 16,
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 18,
  },
  InputText: {
    position: "relative",
    height: 437,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    marginTop: 22,
    backgroundColor: "#fff",
    textAlignVertical: "top",
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
  },
  sendText: {
    fontFamily: "Poppins-700",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#FFFFFF",
  },
  mic: {
    position: "absolute",
    top: 38,
    right: 16,
    width: 32,
    height: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  micImage: {
    height: 16,
    width: 16,
  },
});
