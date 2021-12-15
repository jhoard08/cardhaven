import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SearchContainer = styled.input`
    ${tw`

    `};
`;

export function SearchBar() {
    return (
        <SearchContainer type="text" placeholder="Search.."> Search </SearchContainer>
    );
}