import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const { id, title, imageUrl, complexity, duration, affordability } =
      itemData.item;
    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        complexity={complexity}
        duration={duration}
        affordability={affordability}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
