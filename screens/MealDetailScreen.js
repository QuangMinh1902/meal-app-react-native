import { Text, View, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";

export function MealDetailScreen({ route }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
}
