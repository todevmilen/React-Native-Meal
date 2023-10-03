import { View, Text, StyleSheet } from "react-native";
const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
