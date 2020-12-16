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

const Copyright = styled.div `
    margin-top: 20px;
    text-align: center;
    padding: 10px;
    background-color: #fafafa;
    color: #909090;
`;

const LinkGrupoDimed = styled.a`
    display: inline-block;
    align-items: center;
    width: 114px;
    height: 20px;
    background-image: url(https://cdn1.staticpanvel.com.br/cdn_service/rodape/logodimed.png);
    background-repeat: no-repeat;
`;

const CopyrightText = styled.p`
    display: inline;
    padding-left: 50px;
    font-size: .8em;
`;



export { Container, Description, Copyright, LinkGrupoDimed, CopyrightText };