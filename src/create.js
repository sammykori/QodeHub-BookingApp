import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { Container, Header, Title, View, Content, Button, Left, Right, Body, Icon, Text} from 'native-base';
import FormFill from './formFill'
export default class Create extends Component {
  
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
            <Title>MAKE A BOOKING</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Image source={require('../assets/logo.png')} style={{height: 50, width: 50, marginHorizontal:20}}/>
                <Text style={styles.title}>ROOM BOOKING</Text>
            </View>

          <FormFill />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
        letterSpacing: 3,
        marginVertical: 5,
        textDecorationLine: 'underline'
    }
})