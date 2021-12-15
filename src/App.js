import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './containers/HomePage';

const AppContainer = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  bg-tahiti
  `};
`;

const App = function () {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};

export default App;
