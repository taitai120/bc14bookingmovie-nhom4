import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actOrderTicket = (thongTinDatVe) => {
  return (dispatch) => {
    dispatch(actOrderTicketRequest());

    api
      .post("QuanLyDatVe/DatVe", thongTinDatVe)
      .then((result) => {
        actOrderTicketSuccess(result.data.content);
      })
      .catch((error) => {
        actOrderTicketFailed(error);
      });
  };
};

const actOrderTicketRequest = () => {
  return {
    type: ActionType.ORDER_TICKET_REQUEST,
  };
};

const actOrderTicketSuccess = (data) => {
  return {
    type: ActionType.ORDER_TICKET_SUCCESS,
    payload: data,
  };
};

const actOrderTicketFailed = (error) => {
  return {
    type: ActionType.ORDER_TICKET_FAILED,
    payload: error,
  };
};
