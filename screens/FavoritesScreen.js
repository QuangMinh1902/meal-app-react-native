import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length < 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 18,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
});
