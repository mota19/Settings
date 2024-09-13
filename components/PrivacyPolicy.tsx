import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import arrowBack from "../assets/icons/arrow-back.png";

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

const PrivacyPolicy: React.FC<Props> = ({ navigation }) => {
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
        <ScrollView style={{ marginTop: 24 }}>
          <View>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Ornare sed urna arcu eu
              tincidunt. Amet in lorem sem sed. Arcu pretium quam ultricies
              arcu. Dui faucibus leo egestas habitant tincidunt. Molestie et
              nunc elit porttitor tincidunt mollis.{"\n"}
              {"\n"}
              Elementum ut ultricies malesuada suspendisse nec a amet sed.
              Tellus sed ultrices vehicula morbi ut fusce. Nulla eget vitae
              vivamus in et ut hendrerit. Eu congue arcu pharetra senectus eget
              lectus posuere. Eget tincidunt risus pharetra quis massa aliquam
              commodo. Magna eros auctor iaculis at cras.{"\n"}
              {"\n"}
              Aliquet viverra aenean ipsum ac libero. Venenatis sodales aliquam
              arcu tincidunt integer lacus nibh in eget. Mauris dolor tellus id
              metus duis ipsum vitae. Fermentum ullamcorper arcu nibh viverra
              diam pulvinar donec ut. Enim dignissim at nulla gravida mattis
              amet nisi.
            </Text>
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.subTitle}>Sample sub-heading</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Lectus urna ipsum nibh
              lorem pharetra facilisis ullamcorper. Pharetra ut dignissim semper
              maecenas nibh malesuada purus augue sed. Libero facilisi placerat
              porttitor sapien feugiat posuere feugiat.{"\n"}
              {"\n"}Amet elit dolor vulputate suspendisse urna cursus. Ac congue
              massa consectetur ultricies. Tortor mauris etiam malesuada amet
              ipsum. Aliquet imperdiet et risus enim massa. Nunc aliquet et
              integer sem posuere adipiscing egestas mauris. Sed et viverra
              netus scelerisque ultrices quam. Id volutpat ac pulvinar lobortis
              lorem eget congue pulvinar. Id eu neque in feugiat sapien sapien
              lectus.{"\n"}
              {"\n"}Feugiat euismod vel ut neque sodales. Volutpat et adipiscing
              amet nunc consectetur tortor ullamcorper. Magna massa in aenean
              nunc in. Ut at leo amet mattis odio pharetra aliquam congue.
              Blandit dolor tempor amet risus quis. Pulvinar nulla nunc pretium
              elit etiam semper nunc mollis. Mauris nibh velit nunc convallis
              neque nullam. Arcu risus amet libero volutpat ut. Placerat
              faucibus viverra arcu neque venenatis blandit imperdiet. Tristique
              platea in volutpat faucibus sodales sed. Ac habitant morbi sit in
              eu rutrum iaculis. Amet commodo a justo pharetra ut tellus
              facilisis varius arcu. Scelerisque amet porttitor in a gravida ut
              eget in tellus. Imperdiet enim a nibh sit ut. Nullam dolor gravida
              euismod feugiat ornare rutrum ipsum. Odio phasellus consectetur
              interdum amet. Congue vitae id turpis ultrices tincidunt aliquam.
              Nibh eget purus donec in varius est tempus vulputate tristique. Id
              lectus adipiscing.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: "Poppins-700",
    lineHeight: 32,
    fontSize: 24,
  },
  text: {
    marginTop: 16,
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
  },
  subTitle: {
    fontFamily: "Poppins-600",
    fontSize: 15,
    lineHeight: 16,
  },
});
