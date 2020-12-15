import styled from 'vue-styled-components';

const Infos = styled.div``;

const Container = styled.div`
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    padding: 16px;
    color: #909090;
    background-color: #fafafa;
    line-height: 2;
    font-size: 15px;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
`;

const Item = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
`;

const Logo = styled.div``;

const Description = styled.div`
    line-height: 1.4;
    padding-left: 15px;
`;


export { Infos, Container, Item, Logo, Description };