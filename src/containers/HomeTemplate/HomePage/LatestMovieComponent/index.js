import React from "react";
import "./css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actGetListMovie } from "../../ListMoviePage/modules/actions";
import LatestItem from "./LatestItem";

export default function LatestMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer.data);

  useEffect(() => {
    dispatch(actGetListMovie());
  }, []);

  const renderLatestMovie = () => {
    const listMovie = data?.filter((movie, index) => {
      return index > 0 && index < 10;
    });

    return listMovie?.map((movie) => {
      return <LatestItem key={movie.maPhim} movie={movie} />;
    });
  };

  return (
    <section className="latest-section">
      <h2 className="title">LATEST MOVIES</h2>
      <div className="container">
        <div className="row">{renderLatestMovie()}</div>
      </div>
    </section>
  );
}
