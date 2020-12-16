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

const MethodsContainer = styled.div`
    padding-top: 2.6em;
    color: #676767;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    align-content: space-around;
`;

const MethodsContent = styled.div`
    display: flex;
    font-size: 18px;
    height: 50px;
    align-items: center;
`;

export { Container, ContainerContent, MethodsContainer, MethodsContent };