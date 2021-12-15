import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SearchContainer = styled.div`
    ${tw`
        container
        flex-1
        w-full
        bg-rose
    `};
`;

const Input = styled.input`
    min-height: 40px;
    ${tw`
        w-full
        rounded-md
    `};
`;

export var SearchBar = function () {
    return (
        <SearchContainer>
            <Input type='text' placeholder='Search...' />
        </SearchContainer>

    );
};
