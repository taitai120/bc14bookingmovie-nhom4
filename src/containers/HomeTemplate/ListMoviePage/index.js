import React, { Component } from "react";
import Movie from "./Movie";
import Loader from "../../../components/Loader";
import { actGetListMovie } from "./modules/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  // chạy 1 lần sau khi render()
  componentDidMount() {
    this.props.getListMovieData();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;

    if (loading) {
      return <Loader />;
    }

    return data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    return (
      <div className="latest-section">
        <h2 className="title">List Movies</h2>
        <div className="latest-main row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading,
    error: state.listMovieReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovieData: () => {
      dispatch(actGetListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
