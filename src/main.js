import React, { Component } from 'react';
import {Image, StyleSheet, AsyncStorage} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, View, Fab} from 'native-base';
import HomeTable from './homeTable';


var pdate = new Date().toDateString();
export default class Main extends Component {
    state = {
        ctime: '',
        cdate: '',
        datas: [],
        active: 'true'
    };
    async componentDidMount() {
        

        setInterval( () => {
          this.setState({
            ctime : new Date().toLocaleTimeString(),
            cdate : pdate.toLocaleUpperCase(),
          })
        },1000);

        let myArray = await AsyncStorage.getAllKeys();
        var list = [];

        for(var i = myArray.length-1; i >= 0 ; i--){
          let obj = await AsyncStorage.multiGet(myArray);
          let d = JSON.parse(obj[i][1]);
          if(d.date === pdate){
          this.state.datas.push(d);
          list.push(d);
          }
      }
      this.setState({datas: list});

    }
    // async componentDidUpdate(prevState){
    //     if (this.state.datas!== prevState.datas) {
          
    //         console.log("component has updated");
    //         let myArray = await AsyncStorage.getAllKeys();
    //         var list = [];

            
    //         let obj = await AsyncStorage.multiGet(myArray);
    //         let d = JSON.parse(obj[myArray.length-1][1]);
    //         if(d.date === pdate){
    //         this.state.datas.push(d);
    //         list.push(d);
            
    //         }
    //         console.log(this.state.datas);
    //     } 
    // }
    fabPress(){
        this.setState({active:!this.state.active});
        this.props.navigation.navigate('Create');
    }
  render() {
    return (
      <Container>
        <Header style = {{backgroundColor: "black"}}>
          <Left>
            <Button transparent onPress={()=>{this.props.navigation.navigate('AllList')}}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>ROOM BOOKING</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Image source={require('../assets/logo.png')} style={{height: 50, width: 50, marginHorizontal:20}}/>
                <Text style={styles.title}>ROOM BOOKING</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.time}>{this.state.ctime}</Text>
            </View>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />
            <View style={{alignItems: 'center'}}>
                <Text style={styles.date}>{this.state.cdate}</Text>
            </View>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
            />
          <HomeTable deals={this.state.datas} />
          <Fab
            active={this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: 'black'}}
            position="bottomRight"
            onPress={() => {this.fabPress()}}>
            <Icon name="add" />
          </Fab>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    time: {
        fontSize: 90,
        color: 'gray',

    },
    date: {
        fontSize: 30,

    },
    title:{
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
        letterSpacing: 3,
        marginVertical: 5,
        textDecorationLine: 'underline'
    }
})