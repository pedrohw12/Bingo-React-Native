import React, { Component } from 'react';
import { Container, Input, Button, BtnContainer, Title } from './styles';

class Cadastro extends Component {
  static navigationOptions = {
    title: 'TELA CADASTRO',
  };

  render() {
    return (
      <Container>
        <Input keyboardType="numeric" />
        <BtnContainer>
          <Button onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Title>CADASTRAR</Title>
          </Button>
        </BtnContainer>
      </Container>
    );
  }
}

export default Cadastro;