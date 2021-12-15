import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { SearchBar } from './components/searchbar';

const AppContainer = styled.body`
  ${tw`
  container
  px-4
  flex
  `};
`;

const AppContainerLeft = styled.div`
  ${tw`
    flex-1 
    w-1/4
    px-4
  `};
`;  

const AppContainerRight = styled.div`
  ${tw`
    flex-1 
    w-3/4
  `};
`;

function App() {
  return (
    <AppContainer>

      <AppContainerLeft>
        <ul>
          <li>Baseball</li>
          <li>Football</li>
          <li>Basketball</li>
        </ul>
      </AppContainerLeft>
      <AppContainerRight>
        CardHaven
      </AppContainerRight>
    </AppContainer>
  );
}

export default App;
