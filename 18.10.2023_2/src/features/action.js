export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";


// здесь создаем action creator для всех оснавных случаев, начало запроса, успешный и неудачны запрос
export const  fetchUsers =  () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
};

export const fetchUsersSucces = (payload) =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    }
};

export const fetchUsersFail = () =>{
    return {
        type: FETCH_USERS_ERROR,
    }
}


// здесь создаем action creator для всех оснавных случаев, начало запроса, успешный и неудачны запрос
export const fetchPosts = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
};

export const fetchPostsSucces = (payload) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
};

export const fetchPostsFail = () => {
    return {
        type: FETCH_POSTS_ERROR,
    }
}