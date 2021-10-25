import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { actGetListMovie } from "../../ListMoviePage/modules/actions";
import ShowcaseItem from "./ShowcaseItem";

export default function ShowcaseMovie() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer.data);

  useEffect(() => dispatch(actGetListMovie()), []);

  const renderShowcaseItem = () => {
    return data?.map((movie) => {
      return <ShowcaseItem key={movie.maPhim} movie={movie} />;
    });
  };

  const optionsCarousel = {
    items: 6,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 15,
    responsive: {
      320: {
        items: 1,
      },
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  };

  return (
    <section className="showcase-section">
      <h2 className="title">SHOWCASE MOVIES</h2>
      <OwlCarousel className="owl-theme" key={data} {...optionsCarousel}>
        {renderShowcaseItem()}
      </OwlCarousel>
    </section>
  );
}
