import React,{ Component } from 'react';
import { 
  Container, 
  BtnContainer, 
  JogoContainer, 
  Button, 
  Title, 
  Text 
} from './styles';

class Cadastro extends Component {
  static navigationOptions = {
    title: 'TELA LEITURA',
  };
  render() {
    return (
      <Container>
        <JogoContainer>
          <Text>1475</Text>
          <Text>213</Text>
          <Text>415</Text>
        </JogoContainer>
        <BtnContainer>
          <Button onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Title>CADASTRAR OUTRA</Title>
          </Button>
        </BtnContainer>
      </Container>
    );
  }
}

export default Cadastro;