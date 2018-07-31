import React, { Component } from 'react';
import {Text, Image} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon} from 'native-base';
import FormFill from './formFill'
export default class Create extends Component {
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{this.props.navigation.navigate('Main')}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Booking App</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Image source={{uri: 'https://www.amansw.com.au/wp-content/uploads/2016/11/web-icons-careers-service_3.png'}} style={{height: 100, width: null}}/>

          <FormFill />
        </Content>
      </Container>
    );
  }
}