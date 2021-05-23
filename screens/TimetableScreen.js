import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: firebase.auth().currentUser.email,
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
    };
  }

  getTimetableValues = () => {
    var email = this.state.email;
    console.log(email);
    db.collection('timings')
      .where('email_id', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          console.log(data);
          this.setState({
            AM6: data.AM_6,
            AM7: data.AM_7,
            AM8: data.AM_8,
            AM9: data.AM_9,
            AM10: data.AM_10,
            AM11: data.AM_11,
            PM12: data.PM_12,
            PM1: data.PM_1,
            PM2: data.PM_2,
            PM3: data.PM_3,
            PM4: data.PM_4,
            PM5: data.PM_5,
            PM6: data.PM_6,
            PM7: data.PM_7,
            PM8: data.PM_8,
            PM9: data.PM_9,
            PM10: data.PM_10,
            PM11: data.PM_11,
            AM12: data.AM_12,
            docId: doc.id,
          });
        });
      });
  };

  saveChanges = (email) => {
    db.collection('timings').doc(this.state.docId).update({
      AM_6:this.state.AM6, 
      AM_7:this.state.AM7,
      AM_8:this.state.AM8,
      AM_9:this.state.AM9,
      AM_10:this.state.AM10, 
      AM_11:this.state.AM11,
      PM_12:this.state.PM12,
      PM_1:this.state.PM1,
      PM_2:this.state.PM2, 
      PM_3:this.state.PM3,
      PM_4:this.state.PM4,
      PM_5:this.state.PM5,
      PM_6:this.state.PM6, 
      PM_7:this.state.PM7,
      PM_8:this.state.PM8,
      PM_9:this.state.PM9,
      PM_10:this.state.PM10,
      PM_11:this.state.PM11,
      AM_12:this.state.AM12,
      });
      console.log('Timetable Updated Successfully');
      Alert.alert("Timetable Updated Successfully");
  }

  componentDidMount() {
    this.getTimetableValues();
  }

  render() {
    return (
      <SafeAreaProvider style={styles.view}>
        <MyHeader title="Timetable" navigation={this.props.navigation} />
        <ScrollView>
          <Text style={styles.topText}>
            Be sure to save your changes at the bottom once you are done editing
            your Timetable!
          </Text>
          <Text style={styles.timeText}>6 AM</Text>
          <TextInput 
          placeholder={'Type Here'} 
          style={styles.textInputs} 
          value = {this.state.AM6} 
          onChangeText = {(text) => this.setState({AM6: text})}
          />
          <Text style={styles.timeText}>7 AM</Text>
          <TextInput 
          placeholder={'Wake Up'} 
          style={styles.textInputs} 
          value = {this.state.AM7} 
          onChangeText = {(text) => this.setState({AM7: text})}
          />
          <Text style={styles.timeText}>8 AM</Text>
          <TextInput
            placeholder={'Leave for School'}
            style={styles.textInputs}
            value = {this.state.AM8} 
            onChangeText = {(text) => this.setState({AM8: text})}
            />
          <Text style={styles.timeText}>9 AM</Text>
          <TextInput 
          placeholder={'School'} 
          style={styles.textInputs} 
          value = {this.state.AM9} 
          onChangeText = {(text) => this.setState({AM9: text})}
          />
          <Text style={styles.timeText}>10 AM</Text>
            <TextInput
            placeholder={'School'}
            style={styles.textInputs}
            value = {this.state.AM10} 
            onChangeText = {(text) => this.setState({AM10: text})}
            />
          <Text style={styles.timeText}>11 AM</Text>
            <TextInput
            placeholder={'School'}
            style={styles.textInputs}
            value = {this.state.AM11} 
            onChangeText = {(text) => this.setState({AM11: text})}
            />
          <Text style={styles.timeText}>12 PM</Text>
          <TextInput
            placeholder={'School'}
            style={styles.textInputs}
            value = {this.state.PM12} 
            onChangeText = {(text) => this.setState({PM12: text})}
            />
          <Text style={styles.timeText}>1 PM</Text>
            <TextInput
            placeholder={'School'}
            style={styles.textInputs}
            value = {this.state.PM1} 
            onChangeText = {(text) => this.setState({PM1: text})}
            />
          <Text style={styles.timeText}>2 PM</Text>
          <TextInput
            placeholder={'Leave for School'}
            style={styles.textInputs}
            value = {this.state.PM2} 
            onChangeText = {(text) => this.setState({PM2: text})}
            />
          <Text style={styles.timeText}>3 PM</Text>
          <TextInput
            placeholder={'Leave from School'}
            style={styles.textInputs}
            value = {this.state.PM3} 
            onChangeText = {(text) => this.setState({PM3: text})}
            />
          <Text style={styles.timeText}>4 PM</Text>
          <TextInput
            placeholder={'Arrive Home'}
            style={styles.textInputs}
            value = {this.state.PM4} 
            onChangeText = {(text) => this.setState({PM4: text})}
            />
          <Text style={styles.timeText}>5 PM</Text>
          <TextInput
            placeholder={'Homework'}
            style={styles.textInputs}
            value = {this.state.PM5} 
            onChangeText = {(text) => this.setState({PM5: text})}
            />
          <Text style={styles.timeText}>6 PM</Text>
          <TextInput
            placeholder={'Homework'}
            style={styles.textInputs}
            value = {this.state.PM6} 
            onChangeText = {(text) => this.setState({PM6: text})}
            />
          <Text style={styles.timeText}>7 PM</Text>
          <TextInput
            placeholder={'Leisure'}
            style={styles.textInputs}
            value = {this.state.PM7} 
            onChangeText = {(text) => this.setState({PM7: text})}
            />
          <Text style={styles.timeText}>8 PM</Text>
          <TextInput
            placeholder={'Dinner'}
            style={styles.textInputs}
            value = {this.state.PM8} 
            onChangeText = {(text) => this.setState({PM8: text})}
            />
          <Text style={styles.timeText}>9 PM</Text>
          <TextInput
            placeholder={'Study'}
            style={styles.textInputs}
            value = {this.state.PM9} 
            onChangeText = {(text) => this.setState({PM9: text})}
            />
          <Text style={styles.timeText}>10 PM</Text>
          <TextInput
            placeholder={'Go to Bed'}
            style={styles.textInputs}
            value = {this.state.PM10} 
            onChangeText = {(text) => this.setState({PM10: text})}
            />
          <Text style={styles.timeText}>11 PM</Text>
          <TextInput
            placeholder={'N/A'}
            style={styles.textInputs}
            value = {this.state.PM11} 
            onChangeText = {(text) => this.setState({PM11: text})}
            />
          <Text style={styles.timeText}>12 AM</Text>
          <TextInput
            placeholder={'N/A'}
            style={styles.textInputs}
            value = {this.state.AM12} 
            onChangeText = {(text) => this.setState({AM12: text})}
            />
          <TouchableOpacity style={styles.button} onPress = {() => {this.saveChanges(this.state.email)}}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <Text style={styles.dupeText}>Remember to Always Save!</Text>
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
  topText: {
    marginTop: 20,
    fontStyle: 'Bold',
    alignSelf: 'center',
  },
  textInputs: {
    width: 300,
    height: 35,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
  },
  timeText: {
    fontSize: RFValue(18),
    color: 'orange',
    fontWeight: 'bold',
    padding: RFValue(10),
    alignSelf: 'center',
  },
  button: {
    width: '65%',
    height: RFValue(55),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: RFValue(50),
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(23),
    color: '#000',
  },
  dupeText: {
    marginTop: 50,
    alignSelf: 'center',
  },
});
