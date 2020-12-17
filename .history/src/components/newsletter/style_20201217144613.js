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

const Container = styled.div`
    margin: 0 auto;
    width: 50%;
    text-align: left;
    display: flex;
`;

const InputEmail = styled.input`
    width: 80%;
    text-align: left;
    padding: 10px;
    font-size: .8em;
    border-radius: 4px 0 0 4px;
    height: 30px;
    border: none;
    color: #909090;
    text-transform: uppercase;
`;

const ButtonEmail = styled.button`
    cursor: pointer;
    width: 20%;
    padding-top: 8px;
    padding-bottom: 9px;
    border-radius: 0 4px 4px 0;
    background-color: #00bfdf;
    text-align: center;
    font-weight: 700;
    font-size: .938em;
    height: 50px;
    color: #fff;
    border: none;
`;

export { Background, Title, Description, InputEmail, Container, ButtonEmail };