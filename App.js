import AppLoading from "expo-app-loading";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import { Icons, Themes } from "./assets/Themes";
import { Platform } from "react-native-web";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigationView}>
        <Image style={styles.navigationIcon} source={Icons.menu.light} />
        <Text style={styles.appName}>ensom</Text>
        <Image style={styles.navigationIcon} source={Icons.sun} />
      </View>
      <Text
        style={{
          fontFamily: "Sydney", // test to see if the font is loaded, feel free to remove this
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <Text
        style={{
          fontFamily: "Sydney-Bold", // test to see if the font is loaded, feel free to remove this
        }}
      >
        ~Good luck~
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  },
  navigationIcon: { width: 40, height: 40 },
  appName: { fontSize: 32, fontFamily: "Sydney-Bold" },
  navigationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.OS === "ios" ? 41 : 54,
    paddingHorizontal: 20,
  },
});
