import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    return (
        <View style={styles.screen}>
            <Text>The Categorie Meal Screen!</Text>
            <Button title="Go to Detailpage!" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="go back" onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;