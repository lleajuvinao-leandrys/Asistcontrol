import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06f562",
  },

  Text: {
    color: "#fff",
    fontsize: 24,
    fontWeight: "bould",
  },
});
