import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useNavigation } from "@react-navigation/native";
const FavoritesScreen = () => {
  const navigation = useNavigation();
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  const onPressHandler = () => {
    navigation.navigate("Categories");
  };

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
        <Button title="Pick a meal" onPress={onPressHandler} />
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
