<script>
import styled from 'vue-styled-components';

export default {
    Infos, Container, Item    
}
</script>

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
    grid-template-columns: 20%;
`;

const Item = styled.div``;

export default { Infos, Container, Item };