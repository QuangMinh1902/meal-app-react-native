import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#e2894d",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: "All Categories",
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
