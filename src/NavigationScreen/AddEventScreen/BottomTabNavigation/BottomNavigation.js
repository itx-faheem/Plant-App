import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, Vibration, View, Text } from 'react-native';
import Budgeting from '../BudgetingScreen/Budgeting';
import Home from '../HomeEventScreen/Home';
import Tasks from '../TaksScreen/Tasks';
import Messages from '../MessagesScreen/Messages';
import Profile from '../ProFileScreen/Profile';
import { COLORS, icons } from '../../../../constants';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {

    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabsBottomContainer,
        tabBarHideOnKeyboard: true,
    };

    const createTabOptions = (icon, lablel, colorIcon,) => ({ focused }) => (
        <View style={{ alignItems: "center", gap: 3, justifyContent: "space-between", }} >
            <Image style={{ width: 21, height: 21, resizeMode: "contain" }} source={focused ? colorIcon : icon} />
            <Text style={{ color: focused ? COLORS.primary : COLORS.gray, fontSize: 11 }} >{lablel}</Text>
            {lablel === "Messages" ?
                (<View style={styles.tabBarMess} >
                    <Text style={{ color: COLORS.white, textAlign: "center", fontSize: 10 }} >1</Text>
                </View>) : null
            }
        </View>
    )

    const Screens = [
        { name: "Home", component: Home, icon: icons.compass, lablel: "Events", colorIcon: icons.Event },
        { name: "Tasks", component: Tasks, icon: icons.Tasks, lablel: "Tasks", colorIcon: icons.TaskColor },
        { name: "Budgeting", component: Budgeting, icon: icons.Budgeting, lablel: "Budgeting", colorIcon: icons.BudgetingColorIcon },
        { name: "Messages", component: Messages, icon: icons.Messages, lablel: "Messages", colorIcon: icons.MessageColor },
        { name: "Profile", component: Profile, icon: icons.ProfileIcon, lablel: "Profile", colorIcon: icons.profileColor }
    ]
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {Screens.map(({ name, component, icon, lablel, colorIcon }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{ tabBarIcon: createTabOptions(icon, lablel, colorIcon) }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    tabsBottomContainer: {
        height: '6.6%',
        paddingVertical: 5,
    },
    tabBarMess: {
        position: "absolute",
        right: "10%",
        bottom: "70%",
        backgroundColor: COLORS.soft,
        width: 15, height: 15,
        borderRadius: 7,
        borderColor: COLORS.tertiary,
        borderWidthL: 1,
    }
});
