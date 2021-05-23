import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
import db from '../config';

export default class Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: [],
      emailId: firebase.auth().currentUser.email,

    }
    this.requestRef = null;
  }

  getTips = () => {
    this.requestRef = db
      .collection("tips")
      .onSnapshot((snapshot) => {
        var tip = snapshot.docs.map((doc) => doc.data());
        this.setState({
          tip: tip,
        });
      });
  };

    
  componentDidMount() {
    this.getTips();
  }

    componentWillUnmount() {
  this.requestRef();
  }

   keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log("hi");
    return(
      <ListItem
        key={i}
        title={item.tip}
        titleStyle={{ color: "orange", fontWeight: "bold" }}
        bottomDivider
      />
    )
  }

  render() {
    return (
      <SafeAreaProvider style={styles.view}>
        <MyHeader title="Home" navigation={this.props.navigation} />
      <ScrollView>
            <View
              style={{
                flex: 0.66,
                padding: RFValue(10),
              }}
            >
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.tip}
              renderItem={this.renderItem}
            />
            </View>
          </ScrollView>    
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
});