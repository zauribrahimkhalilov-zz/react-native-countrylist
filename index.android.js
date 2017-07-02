import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Header, Title, Container, Content, List, ListItem, Left, Text } from 'native-base';
import axios from 'axios';

export default class CountrylistApp extends Component {

  constructor(){

    super();

    this.state = {
      countries: [],
      name: "",
      code: "",
    };

  }

  componentDidMount(){

    let th = this;
    this.serverRequest = axios.get("https://raw.githubusercontent.com/zauribrahimkhalilov/json-files/master/countries.json").then(function(result){

    th.setState({
      countries: result.data.countries,
    });

    });

  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>Country List App with React Native</Title>
          </Left>
        </Header>
        <Content>
          <List>
          {
              
            this.state.countries.map(function(country) {

              return (
                <ListItem key={country.code}>
                  <Text>{ country.name }</Text>
                  <Text> - </Text>
                  <Text note>{ country.code }</Text>
                </ListItem>
              );

            })
          }
          </List>
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('CountrylistApp', () => CountrylistApp);
