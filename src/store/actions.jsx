export const actionTypes = {
    UPDATE_CASES: "UPDATE_CASES",
    SET_SLUG: "SET_SLUG",
    SET_LOGIN: "SET_LOGIN",
    "SET_USER_INFO": "SET_USER_INFO"
}

export const updateCases = data => ({
    type: actionTypes.UPDATE_CASES,
    data
});

export const setSlug = data => ({
    type: actionTypes.SET_SLUG,
    data
});

export const setLogin = data => ({
    type: actionTypes.SET_LOGIN,
    data
});

export const setUserInfo = data => ({
    type: actionTypes.SET_USER_INFO,
    data
});