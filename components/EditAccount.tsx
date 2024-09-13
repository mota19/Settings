import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import Logo from "../assets/icons/logo.png";
import mail from "../assets/icons/mail.png";
import edit from "../assets/icons/edit.png";
import lock from "../assets/icons/lock.png";
import businessName from "../assets/icons/business-center.png";
import phone from "../assets/icons/local-phone.png";
import place from "../assets/icons/place.png";
import arrowBack from "../assets/icons/arrow-back.png";

import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  AccountEdit: undefined;
};

type DescriptionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AccountEdit"
>;

type Props = {
  navigation: DescriptionScreenNavigationProp;
};

const EditAccount: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "ffffff" }}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ height: 40, justifyContent: "center" }}
          >
            <Image source={arrowBack} width={24} height={24}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.EditContainer}>
          <Image source={Logo}></Image>
          <Text style={styles.nameText}>Richard Greggain</Text>
          <View style={styles.mailContainer}>
            <Image source={mail}></Image>
            <Text style={styles.mailText}>richardgreggain@email.com</Text>
          </View>

          <TouchableOpacity
            style={styles.editOppacity}
            onPress={() => navigation.navigate("AccountEdit")}
          >
            <Image source={edit}></Image>
            <Text style={styles.editText}>Edit account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.securityText}>security</Text>
          <TouchableOpacity style={styles.ResetPassword}>
            <Image source={lock}></Image>
            <Text style={styles.ResetPasswordText}>Reset password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.businessDetailContainer}>
          <Text style={styles.businessDetailsText}>Business Details</Text>
          <TouchableOpacity style={styles.businessDetailOpacity}>
            <Image source={businessName}></Image>
            <View>
              <Text style={styles.OpacityTextTitle}>Business name</Text>
              <Text style={styles.OpacityTextName}>
                British Fire & Security
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.businessDetailOpacity}>
            <Image source={phone}></Image>
            <View>
              <Text style={styles.OpacityTextTitle}>Contact details</Text>
              <Text style={styles.OpacityTextName}>+44 20 7123 4567</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.businessDetailOpacity}>
            <Image source={place}></Image>
            <View>
              <Text style={styles.OpacityTextTitle}>Business address</Text>
              <Text style={styles.OpacityTextName}>
                97-99 Vicar Ln, Leeds, West Yorkshire LS1 6PJ, UK
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  EditContainer: {
    alignItems: "center",
  },
  nameText: {
    fontFamily: "Poppins-700",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
  },
  mailContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  mailText: {
    fontFamily: "Poppins-500",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 8,
  },
  editOppacity: {
    marginTop: 24,
    borderRadius: 40,
    backgroundColor: "#EE7325",
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    height: 40,
    alignItems: "center",
  },
  editText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-700",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 19.6,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#D9D9D9",
    marginVertical: 32,
  },
  securityText: {
    fontFamily: "Poppins-500",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    color: "#4F4F4F",
    textTransform: "uppercase",
  },
  ResetPassword: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginTop: 8,
  },
  ResetPasswordText: {
    fontFamily: "Poppins-600",
    fontWeight: 600,
    lineHeight: 16,
    fontSize: 12,
    color: "#E43939",
    marginLeft: 16,
  },
  businessDetailContainer: {
    marginTop: 36,
  },
  businessDetailsText: {
    fontFamily: "Poppins-500",
    fontWeight: 500,
    lineHeight: 16,
    fontSize: 12,
    color: "#4F4F4F",
    textTransform: "uppercase",
  },
  businessDetailOpacity: {
    height: 52,
    marginTop: 16,
    flexDirection: "row",
    paddingVertical: 8,
    gap: 16,
  },
  OpacityTextTitle: {
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: 16,
    fontSize: 12,
    color: "#4F4F4F",
  },
  OpacityTextName: {
    fontFamily: "Poppins-600",
    fontWeight: 600,
    lineHeight: 16,
    fontSize: 12,
    color: "#4F4F4F",
  },
});
