import { Link } from "expo-router";
 import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> hello, world!</Text>
      <Link href="/about" style={styles.button}>
      Go to About Us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11c1c1",
  },

  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
