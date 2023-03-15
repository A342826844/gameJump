import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { WebView } from "react-native-webview";

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
console.log(width, height);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <WebView
        originWhitelist={["*"]} // 需要修改白名单
        allowingReadAccessToURL="*"
        source={{
          uri: "http://192.168.3.21:5500/Static.bundle/web/index.html",
          // uri: "https://24game.ofbt.xyz/index.html",
        }}
        style={{ width, height }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
