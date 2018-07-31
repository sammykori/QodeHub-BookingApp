import React, { Component } from "react";
import {} from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Container, 
} from "native-base";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
            <List>
              <ListItem>
                  <Text>List</Text>
              </ListItem>
              <ListItem>
                <Text>Book</Text>
              </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
}

