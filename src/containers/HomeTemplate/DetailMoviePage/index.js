import React, { Component } from "react";
import { actGetDetailMovie } from "./modules/actions";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./css/style.css";

import "../../../../node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import VerticalTabs from "./TabsComponent";

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // Get movie info through id
    this.props.getDetailMovieData(id);
  }

  render() {
    const { data, loading } = this.props;

    if (loading) {
      return <Loader />;
    }

    const date = new Date(data?.ngayKhoiChieu);
    const trailer = data?.trailer?.split("/");
    const videoId = trailer ? trailer[trailer.length - 1] : "QZblQLhKcZQ";

    return (
      <div
        className="detail-movie"
        style={{
          backgroundImage: `url(${data?.hinhAnh})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CustomCard
          effectColor="#fff"
          color="#fff"
          blur={20}
          borderRadius={0}
          style={{ minHeight: "80vh" }}
        >
          <div className="container">
            <h2 className="title">Detail Movie</h2>
            <div className="row mb-5">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="detail-img">
                  <img src={data?.hinhAnh} alt={data?.hinhAnh} />
                </div>
              </div>

              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="detail-content">
                  <h2 className="text-center">Thông Tin Chi Tiết Phim</h2>

                  <div className="detail-code">
                    <span>Mã Phim: </span>
                    {data?.maPhim}
                  </div>

                  <div className="detail-title">
                    <span>Tên Phim: </span>
                    {data?.tenPhim}
                  </div>

                  <div className="detail-desc">
                    <span>Mô Tả:</span> {data?.moTa}
                  </div>

                  <div className="detail-date">
                    <span>Ngày khởi chiếu: </span>
                    {date.toLocaleDateString()}
                  </div>

                  <div className="detail-time">
                    <span>Giờ khởi chiếu: </span>
                    {date.toLocaleTimeString()}
                  </div>

                  <div className="detail-score">
                    <span>Đánh giá: </span>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                  </div>

                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-time" />
                      <span>120 mins</span>
                    </div>

                    <div className="movie-info">
                      <i className="bx bxs-camera-movie"></i>
                      <span>HD</span>
                    </div>

                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>

                  <div className="btn-watch">
                    <ModalVideo
                      channel="youtube"
                      autoplay
                      isOpen={this.state.isOpen}
                      videoId={videoId}
                      onClose={() =>
                        this.setState({
                          isOpen: false,
                        })
                      }
                    />

                    <button
                      className="btn"
                      onClick={() =>
                        this.setState({
                          isOpen: true,
                        })
                      }
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <VerticalTabs maPhim={data?.maPhim} />
          </div>
        </CustomCard>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovieData: (id) => {
      dispatch(actGetDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
