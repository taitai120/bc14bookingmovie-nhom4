import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./css/style.css";
import { connect } from "react-redux";
import HeroSlideItem from "./HeroSlideItem";
import { actGetBannerMovie } from "./modules/actions";

class HeroMovie extends Component {
  componentDidMount() {
    this.props.getBannerMovieData();
  }

  renderHeroSlideItem = () => {
    const { data } = this.props;

    return data?.map((item, index) => {
      return <HeroSlideItem key={index} data={item} />;
    });
  };

  render() {
    const optionsCarousel = {
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      autoplayHoverPause: true,
    };

    return (
      <section className="hero-section">
        <div className="carousel-nav-center">
          <OwlCarousel
            key={this.props.data}
            className="owl-theme"
            {...optionsCarousel}
          >
            {this.renderHeroSlideItem()}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.bannerMovieReducer.data,
    loading: state.bannerMovieReducer.loading,
    error: state.bannerMovieReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerMovieData: () => {
      dispatch(actGetBannerMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroMovie);
