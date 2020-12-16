import styled from 'vue-styled-components';

const Container = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
`;

const Title = styled.div`
    font-size: 1.4em;
    font-weight: 800;
    color: #595a65;
`;

const Items = styled.ul`
    padding: inherit;
    line-height: 40px;
`;

const Item = styled.li`
    list-style-type: none;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    text-align: left;
    color: #909090;
    margin: 0;
    text-decoration: none;
`;

export { Container, Title, Items, Item };