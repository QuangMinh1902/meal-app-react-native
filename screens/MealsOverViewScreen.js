import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverViewScreen({ route }) {
  const catId = route.params.categoryId;
  //   const displayedMeals = MEALS.filter((mealItem) => {
  //     const id = mealItem.categoryIds.filter((categoryId) => {
  //       if (categoryId === catId) {
  //         return categoryId;
  //       }
  //     });
  //     if (id.length > 0) {
  //       console.log(id);
  //       return id;
  //     }
  //   }
  // );

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem({ item }) {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
