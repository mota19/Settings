import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import accLogo from "../assets/icons/businessLogo.png";
import arrow from "../assets/icons/keyboard-arrow-right.png";
import contactSupport from "../assets/icons/contactSupport.png";
import TermsOfUse from "../assets/icons/TermsOfUse.png";
import PrivacyPolicy from "../assets/icons/PrivacyPolicy.png";
import LogOut from "../assets/icons/LogOut.png";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
  EditAccount: undefined;
  TermsOfUse: undefined;
  ContactSupport: undefined;
  PrivacyPolicy: undefined;
};

type DescriptionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EditAccount"
>;

type Props = {
  navigation: DescriptionScreenNavigationProp;
};

const Settings: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "ffffff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View>
          <Text style={styles.account}>Account</Text>
        </View>
        <TouchableOpacity
          style={styles.accountOppacity}
          onPress={() => navigation.navigate("EditAccount")}
        >
          <View style={styles.accountOppacityLogo}>
            <Image source={accLogo}></Image>
            <Text style={styles.accountOppacityName}>Richard Greggain</Text>
          </View>
          <Image source={arrow}></Image>
        </TouchableOpacity>
        <View>
          <Text style={styles.account}>System</Text>
          <TouchableOpacity
            style={styles.systemOppacity}
            onPress={() => navigation.navigate("ContactSupport")}
          >
            <Image source={contactSupport}></Image>
            <Text style={styles.systemOpacityText}>Contact support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.systemOppacity}
            onPress={() => navigation.navigate("TermsOfUse")}
          >
            <Image source={TermsOfUse}></Image>
            <Text style={styles.systemOpacityText}>Terms of use</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.systemOppacity}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <Image source={PrivacyPolicy}></Image>
            <Text style={styles.systemOpacityText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.systemOppacity}>
            <Image source={LogOut}></Image>
            <Text style={styles.systemOpacityText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    height: 48,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins-700",
    fontSize: 24,
    lineHeight: 32,
  },
  account: {
    marginTop: 22,
    color: "#4F4F4F",
    fontFamily: "Poppins-500",
    lineHeight: 24,
    fontSize: 12,
    textTransform: "uppercase",
  },
  accountOppacity: {
    padding: 16,
    marginTop: 8,
    backgroundColor: "#FCF4ED",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 72,
    borderRadius: 12,
  },
  accountOppacityLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountOppacityName: {
    fontWeight: 600,
    fontFamily: "Poppins-600",
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
  },
  systemOppacity: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 8,
  },
  systemOpacityText: {
    fontFamily: "Poppins-500",
    fontWeight: 500,
    lineHeight: 20,
    fontSize: 14,
    marginLeft: 12,
  },
});
