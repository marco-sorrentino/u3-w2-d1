import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import CardFilm from "./component/CardFilm";

class App extends Component {
  state = {
    film: "Harry Potter",
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4}>
              <Form.Label>Scegli un film</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={this.state.film}
                onChange={(e) => this.setState({ film: e.target.value })}
              >
                <option>Harry Potter</option>
                <option>Hunger Games</option>
                <option>Scary Movie</option>
                <option>Twilight</option>
                <option>Divergent</option>
                <option>Insurgent</option>
                <option>Love</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col md={4}>
              <CardFilm film={this.state.film} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
