import React,{ Component } from 'react';
import { 
  Container, 
  BtnContainer, 
  JogoContainer, 
  Button, 
  Title, 
  Text,
  FlatList,  
} from './styles';

import api from '../../services/api';

class Cadastro extends Component {
  state = {
    loading: true,
    number: [],
  };

  static navigationOptions = {
    title: 'TELA LEITURA',
  };

  async getNumber() {
    const response = await api.get('/jogos');
    alert(JSON.stringify(response));
  }

   componentDidMount(){
    this.getNumber(); 
  }

  render() {
    return (
      <Container>
        <JogoContainer>
        <FlatList
          data= {this.state.number}
          renderItem= {({item}) => <Jogos data={item} />}
          keyExtractor= {number=> String(number)}
        />
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

class Jogos extends Component {
  render() {
    return (
      <Title> ... </Title>
    );
  }
}

export default Cadastro;