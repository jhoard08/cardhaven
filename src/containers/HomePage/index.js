import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SearchBar } from '../../components/searchbar';


const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const AppContainerContent = styled.div`
  ${tw`
    container
    flex
    flex-row
  `};
`;

const AppContainerLeft = styled.div`
  width: 25%;
  ${tw`
    font-mono
    text-rose
    bg-midnight
  `};
`;

const AppContainerRight = styled.div`
  width: 75%;
  ${tw`
    bg-metal
  `};
`;

export function HomePage() {
  return (
    <PageContainer>
      <SearchBar />
      <AppContainerContent>
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
      </AppContainerContent>
    </PageContainer>
  );
}