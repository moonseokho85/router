import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Chip } from "react-native-paper";

export default class RequestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      money: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 5, width: Dimensions.get("window").width - 10 }}>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ title: text })}
            placeholder="제목"
          />
        </View>
        <View style={{ margin: 5, width: Dimensions.get("window").width - 10 }}>
          <TextInput
            style={{ height: 200, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ description: text })}
            multiline={true}
            placeholder="내용"
          />
        </View>
        {/* <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "space-evenly" }}
        >
          <Chip onPress={() => this.setState({ money: this.state.money + 10 })}>
            + 10
          </Chip>
          <Chip
            onPress={() => this.setState({ money: this.state.money + 100 })}
          >
            + 100
          </Chip>
          <Chip
            onPress={() => this.setState({ money: this.state.money + 1000 })}
          >
            + 1000
          </Chip>
          <Chip
            onPress={() => this.setState({ money: this.state.money + 10000 })}
          >
            + 10000
          </Chip>
        </ScrollView> */}
        <View style={{ margin: 5, width: Dimensions.get("window").width - 10 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              alignItems: "flex-end"
            }}
            onChangeText={text => this.setState({ money: text })}
            keyboardType="numeric"
            placeholder="계약금"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <View
            style={{
              backgroundColor: "orange",
              borderWidth: 1,
              borderColor: "orange",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              height: 40,
              width: Dimensions.get("window").width - 10
            }}
          >
            <Text>요청하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
