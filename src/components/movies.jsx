import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = (movieId) => {
    // deleteMovie(movieId);
    // this.setState({ movies: getMovies() });

    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies });
  };

  render() {
    let { length: count } = this.state.movies;
    return count === 0 ? (
      <p>There are no movies in the database.</p>
    ) : (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderMovie()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  renderMovie() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => {
              this.handleDelete(movie._id);
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}

export default Movies;
