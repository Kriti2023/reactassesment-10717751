export function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST",
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
}
export function fetchPostsError() {
  return {
    type: "FETCH_ERROR",
  };
}

export function fetchBlogsRequest() {
  return {
    type: "FETCH_REQUEST_BLOG",
  };
}

export function fetchBlogsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS_BLOG",
    payload,
  };
}
export function fetchBlogsError() {
  return {
    type: "FETCH_ERROR_BLOG",
  };
}
