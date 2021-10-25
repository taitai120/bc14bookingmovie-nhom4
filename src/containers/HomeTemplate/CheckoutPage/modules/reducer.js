import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  list_chair_select: [],
};

const listTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_TICKET_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;

      return { ...state };
    }

    case ActionType.LIST_TICKET_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case ActionType.LIST_TICKET_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;

      return { ...state };
    }

    case ActionType.SET_CHAIR: {
      let list_chair_select = [...state.list_chair_select];

      const index = list_chair_select.findIndex((chair) => {
        return chair === action.payload;
      });

      // Nếu ghế đó đang được chọn thì hủy chọn
      if (index !== -1) {
        list_chair_select.splice(index, 1);
      }
      // Ngược lại thì thêm vào danh sách ghế đang chọn
      else {
        list_chair_select.push(action.payload);
      }

      state.list_chair_select = list_chair_select;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default listTicketReducer;
