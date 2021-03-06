import React from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../screens/MapScreen";
import ContentDetailScreen from '../screens/ContentDetailScreen'

const MapStack = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Router.",
        headerRight: (
          <Icon
            style={{ paddingRight: 20 }}
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30}
          />
        ),
        headerTitleStyle: {
          color: "orange"
        }
      };
    }
  },
  Detail: {
    screen: ContentDetailScreen
  }
});

export default MapStack;
