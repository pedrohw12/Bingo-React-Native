import React,{ useState, useEffect } from 'react';
import { 
  Container, 
  BtnContainer, 
  JogoContainer, 
  Button, 
  Title, 
  Text,
  FlatList,  
} from './styles';

import uuid from 'uuid/v4';

import api from '../../services/api';

const Cadastro = ({navigation}) => {
  const [ numbers, setNumbers ] = useState('');

  async function teste() {
    const response = await api.get('/jogos');
    const data = response.data.jogos.map(
      item => item.number
    );
    // console.log('aqui '+data) 
    setNumbers(data)
    // console.log('aqui'+numbers);
  }

  useEffect(()=>{
    teste();
  },[]);

    return ( 
      <Container>
        <JogoContainer>
        <FlatList
          data= {numbers}
          renderItem= {({item}) => (<Text> -   {item} </Text>)}
          keyExtractor= {item=> uuid(item.id)}
        />
        </JogoContainer>
        <BtnContainer>
          <Button onPress={() => navigation.navigate('Cadastro')}>
            <Title>CADASTRAR OUTRA</Title>
          </Button>
        </BtnContainer>
      </Container>
  );
}

export default Cadastro;