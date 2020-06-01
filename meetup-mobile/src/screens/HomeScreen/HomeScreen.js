import React, { Component } from "react";
import { View, Text } from "react-native";
import { MeetupApi } from "../../../constants/api";
import { LoadingScreen } from "./../../common";
const meetupApi = new MeetupApi();
export default class HomeScreen extends Component {
  static defaultProps = { meetupApi };
  state = {
    loading: false,
    meetups: [],
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const meetups = await this.props.meetupApi.fetchGroupMeetups();
    this.setState({ loading: false, meetups });
  }
  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View>
        {this.state.meetups.map((meetup, i) => {
          return <Text key={i}>{meetup.title}</Text>;
        })}
      </View>
    );
  }
}
