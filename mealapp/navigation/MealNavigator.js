import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoriesMealScreen
    },
    MealDetail: MealDetailScreen
    }, 
    { defaultNavigationOptions: {
    headerStyle : {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}});

export default createAppContainer(MealsNavigator);
