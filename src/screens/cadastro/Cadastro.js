import React, { useState } from 'react';
import { Container, Input, Button, BtnContainer, Title } from './styles';

import api from '../../services/api';

function Cadastro() {
  function handleSubmit() {
    alert('ola')
  }

    return (
      <Container>
        {/* <Input onChangeText={(e)=> setValue(e)} keyboardType="numeric" /> */}
        <BtnContainer>
          <Button onPress={() => handleSubmit()}>
            <Title>CADASTRAR</Title>
          </Button>
        </BtnContainer>
      </Container>
    );
  }

export default Cadastro;