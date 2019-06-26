import axios from "axios";
import * as TYPES from "./types";

export const filmBookmark = movie => async dispatch => {
  axios.post("/api/bookmark", movie);
};

export const getBookMark = () => async dispatch => {
  const res = await axios.get("/api/getbookmarks");
  await dispatch({
    type: TYPES.FETCH_LOAD_BOOKMARKS,
    payload: res.data
  });
  dispatch({ type: TYPES.FETCH_MOVIE_FINISHED });
};