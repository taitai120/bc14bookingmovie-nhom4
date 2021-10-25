import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import authReducer from "../../containers/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../containers/AdminTemplate/AddUser/modules/reducer";
import bannerMovieReducer from "../../containers/HomeTemplate/HomePage/HeroMovieComponent/modules/reducer";
import loginReducer from "../../containers/HomeTemplate/LoginPage/modules/reducer";
import showtimesReducer from "../../containers/HomeTemplate/DetailMoviePage/TabsComponent/modules/reducer";
import listTicketReducer from "../../containers/HomeTemplate/CheckoutPage/modules/reducer";
import orderTicketReducer from "../../containers/HomeTemplate/CheckoutPage/OrderTicketModules/reducer";
import registerUserReducer from "../../containers/HomeTemplate/RegisterPage/modules/reducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
  bannerMovieReducer,
  loginReducer,
  showtimesReducer,
  listTicketReducer,
  orderTicketReducer,
  registerUserReducer,
  QuanLyPhimReducer,
});

export default rootReducer;
