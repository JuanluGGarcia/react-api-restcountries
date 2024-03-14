import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: #2B3844;
    width: 100%;
    height: 5rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const StyledTitle = styled.p`
    font-size: .875rem;
    font-weight: bold;
`;

const StyledTitleMode = styled.p`
    font-size: .6875rem;
`;

const StyledInputSearch = styled.input`
    display: block;
    padding: 1rem 2rem;
    margin: 0px auto 1rem;
    border: none;
    border-radius: 10px;
    width: 90%;
    background-color: #2B3844;
    color: #fff;
    box-shadow: 0px 5px #000;

`;

export { StyledTitle, StyledTitleMode, StyledWrapper, StyledInputSearch };
