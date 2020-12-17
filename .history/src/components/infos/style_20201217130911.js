import styled from 'vue-styled-components';

const Container = styled.div`
    color: #909090;
    background-color: #fafafa;
    line-height: 2;
    font-size: 15px;
`;

const Content = styled.div`
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    padding: 16px;
`;

const Item = styled.div`
/*     float: left;*/
`;

const Description = styled.span`
`;

const History = styled.div`
    padding-top: 5px;
    text-align: left;
    padding: 16px;
`;

const Icon = styled.i`
    font-size: 30px;
`;

export { Container, Content, Item, Description, History, Items, Icon };