import React, { useState } from 'react';
import { Container, Input, Button, BtnContainer, Title, Text } from './styles';

import api from '../../services/api';

function Cadastro() {
  const [ value, setValue ] = useState();

  function handleSubmit() {
    api.post('/registro', {
      number: value,
    });
}

    return (
      <Container>
        <Text> {value} </Text>
        <Input onChangeText={(e)=> setValue(e)} keyboardType="numeric" />
        <BtnContainer>
          <Button onPress={() => handleSubmit()}>
            <Title>CADASTRAR</Title>
          </Button>
        </BtnContainer>
      </Container>
    );
  }

export default Cadastro;