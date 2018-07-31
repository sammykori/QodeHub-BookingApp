import React, { Component } from 'react';
import {AsyncStorage, StyleSheet} from 'react-native'
import {Content, Form, Item, Label, Textarea, Input, Picker, Icon, Button, Text} from 'native-base';
import DatePicker from 'react-native-datepicker';

let currentId =0;
var key;


export default class FormFill extends Component {
    constructor(props) {
        super(props);
        this.state = {
          end: '',
          start: '',
          name: '',
          reason: '',
          date: '',
          isDateTimePickerVisible: false,
        };
      }
      async componentDidMount(){
        let cid = await AsyncStorage.getItem('current_id');
          cid = JSON.parse(cid);
          currentId = cid;
          var date = new Date().toDateString();
          this.setState({date});
      }
        
      getKey(){
          key = 'array'+currentId;
      }
      _storeData = async () => {
        this.getKey();   
        
        const {end, start, name, reason, date} = this.state;
        let myArray = {
            start: start,
            end: end,
            name: name,
            reason: reason,
            date: date,
        }
        AsyncStorage.setItem(key, JSON.stringify(myArray));
        currentId = currentId+ 1;
        AsyncStorage.setItem('current_id', JSON.stringify(currentId));

        alert('Success! Booked by: '+name+' from: '+start+ ' to: '+ end);
      }
    //   _showData = async() =>{
    //       let myArray = await AsyncStorage.getItem(key);
    //       let d = JSON.parse(myArray);
    //       alert(d);
    //       console.log(d);
    //   }
    //   _getData = async() =>{
    //       let myArray = await AsyncStorage.getAllKeys();
    //       alert(myArray); 
    //   }
     
  render() {
    return (
        <Content>
            <Form style={styles.forms}>
                <Item floatingLabel style={{marginBottom: 20}}>
                    <Label>Name</Label>
                    <Input 
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                    />
                </Item>
                <Textarea rowSpan={5} bordered placeholder="Reason" 
                onChangeText={reason => this.setState({reason})}
                value={this.state.reason}
                />
               
               <Text style={styles.instructions}>Start Time</Text>
                <DatePicker
                style={{width: 350}}
                date={this.state.start}
                mode="time"
                format="HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                minuteInterval={10}
                onDateChange={(start) => {this.setState({start: start});}}
                />
                 <Text style={styles.instructions}>End Time</Text>
                <DatePicker
                style={{width: 350}}
                date={this.state.end}
                mode="time"
                format="HH:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                minuteInterval={10}
                onDateChange={(end) => {this.setState({end: end});}}
                />

                <Button style={{marginVertical: 15}}info rounded large bordered block onPress={()=>{this._storeData()}} ><Text>BOOK</Text></Button>
                {/* <Button success rounded large bordered block onPress={()=>{this._showData()}} ><Text>show</Text></Button>
                <Button primary rounded large bordered block onPress={()=>{this._getData()}} ><Text>get all</Text></Button> */}
            </Form>
        </Content>
    );
  }
}
const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      },
    forms:{
        justifyContent: 'center',
        padding: 15,
    }
});