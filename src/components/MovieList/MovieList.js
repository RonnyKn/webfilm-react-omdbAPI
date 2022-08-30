import './MovieList.css'
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const MovieList = ({ SearchKey, movies, onChangeMovie, searchMovie }) => {
  return (
    <div div className="movie-list" >
      <Container>
        <h1 className="text-white">Search Movies</h1>
        <div className='movie-nav'>
          <input type="text" placeholder='movie title' onChange={onChangeMovie} value={SearchKey} />
          <button onClick={searchMovie}>Search</button>
        </div>
        <Row>
          {/* if else */}
          {movies.map((movie, index) => {
            return (
              <Col md={3}>
                <div className="frameImg">
                  <Card className="bg-dark text-white">
                    <Image src={movie.Poster} alt="img" />
                    <div className="m-2 p-1">
                      <Card.Title className="text-center">{movie.Title}</Card.Title>
                      <Card.Text className="descText">
                        {movie.Type}
                      </Card.Text>
                      <Card.Text className="text-right">{movie.Year}
                      </Card.Text>
                      <button>Show Details</button>
                    </div>
                  </Card>
                </div>
              </Col>
            )
          })}


        </Row>
      </Container>
    </div >
  )
}
export default MovieList;