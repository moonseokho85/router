// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Button,
//   Animated,
//   TouchableOpacity
// } from "react-native";
// import {
//   Container,
//   Header,
//   Tab,
//   Tabs,
//   TabHeading,
//   Icon,
//   Body,
//   Title
// } from "native-base";

// import * as Font from "expo-font";
// import Apploading from "../components/Apploading";
// import ChAppTabNavigator from "../navigations/ChTabNavigator";
// import ChannelHomeScreen from "../screens/ChannelHomeScreen";

// import firebase from "firebase";

// import SubscriptionButton from "../components/SubscriptionButton";

// HEADER_MAX_HEIGHT = 200;
// HEADER_MIN_HEIGHT = 150;
// PROFILE_IMAGE_MAX_HEIGHT = 80;
// PROFILE_IMAGE_MIN_HEIGHT = 40;

// export default class ChannelScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//       scrollY: new Animated.Value(0),
//       email: "",
//       profile_image_url: null
//     };
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf")
//     });

//     await this.setState({ isReady: true });
//     await this.setState({
//       email: this.props.navigation.getParam("email"),
//       profile_image_url: this.props.navigation.getParam("profile_image_url")
//     });

//     console.log(this.state.email);
//     console.log("1");

//     if (this.state.email == undefined) {
//       var user = firebase.auth().currentUser;

//       await this.setState({
//         email: user.email,
//         profile_image_url: user.photoURL
//       });
//     }

//     await console.log(this.state.email);
//     await console.log("2");
//   }

//   render() {
//     const headerHeight = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 100],
//       outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT - 100],
//       extrapolate: "clamp"
//     });

//     const profileImageHeight = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 70],
//       outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
//       extrapolate: "clamp"
//     });

//     const headerZindex = this.state.scrollY.interpolate({
//       inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 100],
//       outputRange: [0, 1],
//       extrapolate: "clamp"
//     });

//     const headerTitleBottom = this.state.scrollY.interpolate({
//       inputRange: [
//         0,
//         HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 100,
//         HEADER_MAX_HEIGHT -
//           HEADER_MIN_HEIGHT +
//           5 +
//           PROFILE_IMAGE_MIN_HEIGHT +
//           100
//       ],
//       outputRange: [-20, 0, 0],
//       extrapolate: "clamp"
//     });

//     // const bodyHeight = this.state.scrollY.interpolate({
//     //   inputRange: [0, 100],
//     //   outputRange: [300, 400 ],
//     //   extrapolate: "clamp"
//     // });

//     if (!this.state.isReady) {
//       return <Apploading />;
//     } else {
//       var user = firebase.auth().currentUser;

//       if (this.state.email != user.email) {
//         return (
//           <Container>
//             <Animated.Image
//               source={{
//                 uri:
//                   "https://blog.hmgjournal.com/images_n/contents/171024_season01.png"
//               }}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 // backgroundColor : 'orange',
//                 height: headerHeight,
//                 zIndex: headerZindex,
//                 alignItems: "center"
//               }}
//             ></Animated.Image>

//             <Animated.View
//               style={{ position: "absolute", bottom: headerTitleBottom }}
//             >
//               <Text style={{ fontSize: 14, fontWeight: "bold" }}>
//                 {this.state.email}
//               </Text>
//             </Animated.View>

//             <ScrollView
//               style={{ flex: 1 }}
//               scrollEventThrottle={16}
//               onScroll={Animated.event([
//                 { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
//               ])}
//             >
//               <View style={{ flexDirection: "row" }}>
//                 <Animated.View
//                   style={{
//                     height: profileImageHeight,
//                     width: profileImageHeight,
//                     borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
//                     borderColor: "white",
//                     borderWidth: 3,
//                     overflow: "hidden",
//                     marginTop:
//                       HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT - 10,
//                     marginLeft: 10,
//                     marginBottom: 10
//                   }}
//                 >
//                   <Image
//                     source={{ uri: this.state.profile_image_url }}
//                     style={{ flex: 1, width: null, height: null }}
//                   />
//                 </Animated.View>

//                 <View>
//                   <Text
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: 26,
//                       color: "white",
//                       paddingLeft: 10,
//                       paddingTop: 125
//                     }}
//                   >
//                     {this.props.navigation.getParam("nickname")}
//                   </Text>
//                   <Text
//                     style={{
//                       fontWeight: "normal",
//                       fontSize: 13,
//                       color: "white",
//                       paddingLeft: 10,
//                       paddingTop: 5
//                     }}
//                   >
//                     {this.state.email}
//                   </Text>
//                 </View>

//                 <View
//                   style={{
//                     marginTop:
//                       HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT - 10,
//                     marginLeft: 50
//                   }}
//                 >
//                   <SubscriptionButton />
//                 </View>
//               </View>

//               <Animated.View style={{ height: 1000 }}>
//                 <ChAppTabNavigator
//                   screenProps={{
//                     email: this.state.email
//                   }}
//                 />
//               </Animated.View>
//             </ScrollView>
//           </Container>
//         );
//       } else {
//         return (
//           <Container>
//             <Animated.Image
//               source={{
//                 uri:
//                   "https://blog.hmgjournal.com/images_n/contents/171024_season01.png"
//               }}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 // backgroundColor : 'orange',
//                 height: headerHeight,
//                 zIndex: headerZindex,
//                 alignItems: "center"
//               }}
//             ></Animated.Image>

//             <Animated.View
//               style={{ position: "absolute", bottom: headerTitleBottom }}
//             >
//               <Text style={{ fontSize: 14, fontWeight: "bold" }}>
//                 {user.email}
//               </Text>
//             </Animated.View>
//             <ScrollView
//               style={{ flex: 1 }}
//               scrollEventThrottle={16}
//               onScroll={Animated.event([
//                 { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
//               ])}
//             >
//               <View style={{ flexDirection: "row" }}>
//                 <Animated.View
//                   style={{
//                     height: profileImageHeight,
//                     width: profileImageHeight,
//                     borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
//                     borderColor: "white",
//                     borderWidth: 3,
//                     overflow: "hidden",
//                     marginTop:
//                       HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT - 10,
//                     marginLeft: 10,
//                     marginBottom: 10
//                   }}
//                 >
//                   <Image
//                     source={{ uri: this.state.profile_image_url }}
//                     style={{ flex: 1, width: null, height: null }}
//                   />
//                 </Animated.View>

//                 <View style={{backgroundColor: 'green'}}>
//                   <Text
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: 26,
//                       marginLeft: 10,
//                       marginTop: 125
//                     }}
//                   >
//                     {user.displayName}
//                   </Text>
//                   <Text
//                     style={{
//                       fontWeight: "normal",
//                       fontSize: 13,
//                       paddingLeft: 10,
//                       paddingTop: 5
//                     }}
//                   >
//                     {user.email}
//                   </Text>
//                 </View>

//                 <View
//                   style={{
//                     marginTop:
//                       HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT - 10,
//                     marginLeft: 50,
//                     backgroundColor: 'red'
//                   }}
//                 >
//                   <TouchableOpacity>
//                     <Icon
//                       name="ios-add-circle"
//                       onPress={() => {
//                         this.props.navigation.navigate("Post");
//                       }}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <Animated.View style={{ height: 1000 }}>
//                 <ChAppTabNavigator
//                   screenProps={{
//                     email: this.state.email
//                   }}
//                 />
//               </Animated.View>
//             </ScrollView>
//           </Container>
//         );
//       }
//     }
//   }
// }
// -----------------------------------test--------------------------------------------------

import React from "react";
import { View, Image, Animated, Platform } from "react-native";
import { withCollapsibleForTab } from "react-navigation-collapsible";
import ChAppTabNavigator from "../navigations/ChTabNavigator";

const url_cat =
  "https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg";

// eslint-disable-next-line no-unused-vars
const GroupImageHeader = ({ navigation, collapsible }) => {
  // eslint-disable-next-line no-unused-vars
 const Data = JSON.stringify(navigation);
  const { translateY, translateOpacity, translateProgress } = collapsible;
  return (
    
    <View style={{ width: "100%", height: "100%", justifyContent: "center" }}>
      <Image
        source={{ uri: url_cat }}
        resizeMode="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.5
        }}
      />
      <Animated.Image
        source={{ uri: url_cat}}
        resizeMode="cover"
        style={{
          transform: [{ scale: translateOpacity }],
          alignSelf: "center",
          width: 100,
          height: 100,
          borderWidth: 4,
          borderColor: "white",
          borderRadius: 50
        }}
      />
    </View>
  );
};

const collapsibleParams = {
  collapsibleComponent: GroupImageHeader,
  collapsibleBackgroundStyle: {
    height: 200,
    backgroundColor: "#061"
  }
  
};

export default withCollapsibleForTab(ChAppTabNavigator, collapsibleParams);