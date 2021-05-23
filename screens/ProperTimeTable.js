import * as React from 'react';
import { Text, View, StyleSheet, Alert, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class ProperTimetable extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: firebase.auth().currentUser.email,
      AM6: '',
      AM7: '',
      AM8: '',
      AM9: '',
      AM10: '',
      AM11: '',
      PM12: '',
      PM1: '',
      PM2: '',
      PM3: '',
      PM4: '',
      PM5: '',
      PM6: '',
      PM7: '',
      PM8: '',
      PM9: '',
      PM10: '',
      PM11: '',
      AM12: '',
      suggestTimes: [],
      customTimes: [],
      custom: false,
    }
  }

    navigateTable() {

    }

    getTimes = () => {
      db.collection("timings").where("email_id", "==", this.state.emailId).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data())
          this.setState({
            customTimes : doc.data(),
            custom: true,
          });
        });
      });
    
    this.requestRef = db
      .collection("maintable")
      .onSnapshot((snapshot) => {
        var suggestTimes = snapshot.docs.map((doc) => doc.data());
        this.setState({
          suggestTimes: suggestTimes,
        });
      });
  };

    

  componentDidMount() {
    this.getTimes();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return(
      <ListItem
        key={i}
        title={item.PM_8}
        //subtitle = {item.timing}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        bottomDivider
      />
    )
  }

    renderItem1 = ({ item, i }) => {
    return(
      <ListItem
        key={i}
        title={item.schedule}
        subtitle = {item.timing}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        bottomDivider
      />
    )
  }

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Default TimeTable" navigation={this.props.navigation} />
        <View>
        <TouchableOpacity style = {styles.button} onPress = {() => {
          this.props.navigation.navigate('Timetable')}
          }>
          <Text>
          Customize Timetable
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.custom === true ? (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.customTimes}
              renderItem={this.renderItem}
            />
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.suggestTimes}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
});
