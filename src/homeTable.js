import React, { Component } from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types'
import {Content, ListItem, Left, Body, Right, Text } from 'native-base';

export default class HomeTable extends Component {
    static propTypes ={
        deals: PropTypes.array.isRequired
    }
  render() {
    return (
        <Content style={{height: 300}}>
            <ListItem itemHeader first>
              <Text>TODAY'S EVENTS</Text>
            </ListItem>
            <FlatList
                data = {this.props.deals}

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
    );
  }
}