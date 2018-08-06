import React, { Component } from 'react';
import {FlatList, AsyncStorage} from 'react-native';
import {Content, ListItem, Left, Body, Right, Text, Header, Container, Button, Icon, Title } from 'native-base';
export default class HomeTable extends Component {
    state= {
        datas: [],
    }
    async componentDidMount(){
        let myArray = await AsyncStorage.getAllKeys();
          console.log(myArray)
          var list = [];

        for(var i = myArray.length-1; i >= 0 ; i--){
            let obj = await AsyncStorage.multiGet(myArray);
            let d = JSON.parse(obj[i][1]);
            this.state.datas.push(d);
            list.push(d);
            
        }
        this.setState({datas: list});
    }
  render() { 
    return (
        <Container>
            <Header style = {{backgroundColor: "black"}}>
                <Left>
                    <Button transparent onPress={()=>{this.props.navigation.navigate('Main')}}>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>ALL BOOKINGS</Title>
                </Body>
                <Right />
            </Header>
        <Content>

            <FlatList
                data = {this.state.datas}
                
                renderItem = {({item}) =>(
                    <ListItem avatar>
                    <Left>
                        <Text>{item.end}</Text>
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.reason}</Text>
                    </Body>
                    <Right>
                        <Text note>{item.start}</Text>
                    </Right>
                    </ListItem>
                )}
            />
        </Content>
        </Container>
    );
  }
}