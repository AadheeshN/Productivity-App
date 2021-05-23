import * as React from 'react';
import { Text, View, Stylesheet } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class Donation extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <View>
      <MyHeader title="Support Me!" navigation={this.props.navigation} />
        <Text style = {{alignSelf: 'Center', fontStyle: 'bold'}}>Screen Coming Soon!</Text>
      </View>
    )
  }
}