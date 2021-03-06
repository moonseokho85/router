import { createStackNavigator } from "react-navigation-stack";
import ReplyScreen from "../screens/ReplyScreen";
import MyChannelHomeScreen from "../screens/MyChannelHomeScreen";

import { withCollapsibleForTabChild } from "react-navigation-collapsible";

const ChannelHomeStack = createStackNavigator({
  홈: {
    screen: MyChannelHomeScreen,

    navigationOptions: {
      header: null
    }
  },
  Reply: {
    screen: ReplyScreen,

    navigationOptions: {
      title: "댓글"
    }
  }
});

export default withCollapsibleForTabChild(ChannelHomeStack);
