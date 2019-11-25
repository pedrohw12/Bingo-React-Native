import styled from 'styled-components';

export const Container = styled.View`
  padding: 30px;
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Número do jogo'
})`
  border: 2px solid #eee;
  border-color: #333;
  border-radius: 25px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #333;
  padding: 10px;
  border-radius: 25px;
`;

export const BtnContainer = styled.View`
  
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Text = styled.Text``;