import styled from 'vue-styled-components';

const Background = styled.div`
    background-image: url(https://cdn1.staticpanvel.com.br/site/rodape/news-pc.jpg);
    background-repeat: no-repeat;
    background-color: #01abbf;
    text-align: center;
    height: 200px;
    color: white;
    font-family: foco,Open Sans,sans-serif;
`;

const Title = styled.div`
    padding-top: 15px;
    font-size: 2em;
`;

const Description = styled.div`
    margin-bottom: 25px;
    margin-top: 2px;
    font-weight: 300;
    font-size: 1em;
`;

export { Background, Title, Description };