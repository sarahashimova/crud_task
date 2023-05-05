import './App.css';
import Formpart from './components/Formpart';
import List from './components/List';
import {Container, Row,Col} from "reactstrap";



function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Formpart></Formpart>
          </Col>
          <Col xs={6}>
            <List></List>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
