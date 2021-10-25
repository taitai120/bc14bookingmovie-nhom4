import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actGetListTicket = (id) => {
  return (dispatch) => {
    dispatch(actListTicketRequest());

    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
      .then((result) => {
        dispatch(actListTicketSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actListTicketFailed(error));
      });
  };
};

const actListTicketRequest = () => {
  return {
    type: ActionType.LIST_TICKET_REQUEST,
  };
};

const actListTicketSuccess = (data) => {
  return {
    type: ActionType.LIST_TICKET_SUCCESS,
    payload: data,
  };
};

const actListTicketFailed = (error) => {
  return {
    type: ActionType.LIST_TICKET_FAILED,
    payload: error,
  };
};
