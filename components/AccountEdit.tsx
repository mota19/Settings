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

import img from "../assets/icons/img.png";
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

const AccountEdit: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0E0E0" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#EE7325" />
          <View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ height: 40, justifyContent: "center" }}
            >
              <Image source={arrowBack} width={24} height={24}></Image>
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit account</Text>
          </View>
          <View style={styles.main}>
            <Text>Company logo</Text>
            <Image source={img} style={styles.logo}></Image>
            <View style={styles.info}></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AccountEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  headerText: {
    fontFamily: "Poppins-700",
    fontSize: 24,
    lineHeight: 32,
    height: 40,
  },
  main: {
    flex: 1,
    marginTop: 43,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 16,
    color: "#4F4F4F",
  },
  logo: {
    marginTop: 16,
    alignSelf: "center",
  },
  info: {
    marginTop: 40,
  },
});
