import styled from 'vue-styled-components';

const Container = styled.div`
    color: #c1c1c1;
    font-size: .7em;
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
`;

const Description = styled.p`
    padding-left: 1rem;
`;


export { Container, Description };