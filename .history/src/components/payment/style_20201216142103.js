import styled from 'vue-styled-components';

const Container = styled.div`
    background-color: #fff;
`;

const ContainerContent = styled.div`
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export { Container, ContainerContent };