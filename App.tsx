import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import ContactSupport from "./components/ContactSupport";
import EditAccount from "./components/EditAccount";
import MessageSent from "./components/MessageSent";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Settings from "./components/Settings";
import TermsOfUse from "./components/TermsOfUse";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountEdit from "./components/AccountEdit";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-500": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-600": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-700": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={handleOnLayout}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="EditAccount"
            component={EditAccount}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="MessageSent"
            component={MessageSent}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="AccountEdit"
            component={AccountEdit}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ContactSupport"
            component={ContactSupport}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen name="TermsOfUse" component={TermsOfUse}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create({
  Settings: {
    fontSize: 24,
  },
});
