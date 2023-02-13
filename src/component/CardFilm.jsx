import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardFilm extends Component {
  state = {
    movieObj: "",
  };

  getData = async () => {
    try {
      const res = await fetch(
        "https://www.omdbapi.com/?apikey=3ac4f183&s=" + this.props.film
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({ movieObj: data.Search[0] });
        console.log(data.Search[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.film !== this.props.film) {
      this.getData();
    }
  };

  render() {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={this.state.movieObj.Poster} />
          <Card.Body>
            <Card.Title>{this.state.movieObj.Title}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">{this.state.movieObj.imdbID}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardFilm;
