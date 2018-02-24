const initialState = {
    picture: 'https://robohash.org/me',
    firstName: '',
    lastName: '',
    gender: '',
    hairColor: '',
    eyeColor: '',
    hobby: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: ''
};

const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_HAIRCOLOR = "UPDATE_HAIRCOLOR";
const UPDATE_EYECOLOR = "UPDATE_EYECOLOR";
const UPDATE_HOBBY = "UPDATE_HOBBY";
const UPDATE_BIRTHDAYDAY = "UPDATE_BIRTHDAYDAY";
const UPDATE_BIRTHDAYMONTH = "UPDATE_BIRTHDAYMONTH";
const UPDATE_BIRTHDAYYEAR = "UPDATE_BIRTHDAYYEAR";

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_FIRSTNAME:
            return Object.assign({}, state, {firstName: action.payload});

        case UPDATE_LASTNAME:
            return Object.assign({}, state, {lastName: action.payload});

        case UPDATE_GENDER:
            return Object.assign({}, state, {gender: action.payload});

        case UPDATE_HAIRCOLOR:
            return Object.assign({}, state, {hairColor: action.payload});

        case UPDATE_EYECOLOR:
            return Object.assign({}, state, {eyeColor: action.payload});

        case UPDATE_HOBBY:
            return Object.assign({}, state, {hobby: action.payload});

        case UPDATE_BIRTHDAYDAY:
            return Object.assign({}, state, {birthdayDay: action.payload});

        case UPDATE_BIRTHDAYMONTH:
            return Object.assign({}, state, {birthdayMonth: action.payload});

        case UPDATE_BIRTHDAYYEAR:
            return Object.assign({}, state, {birthdayYear: action.payload});

        default: return state;    
    }
}

export function updateFirstName (firstName) {
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstName
    }
}

export function updateLastName (lastName) {
    return {
        type: UPDATE_LASTNAME,
        payload: lastName
    }
}
export function updateGender (gender) {
    return {
        type: UPDATE_GENDER,
        payload: gender
    }
}
export function updateHairColor (hairColor) {
    return {
        type: UPDATE_HAIRCOLOR,
        payload: hairColor
    }
}
export function updateEyeColor (eyeColor) {
    return {
        type: UPDATE_EYECOLOR,
        payload: eyeColor
    }
}
export function updateHobby (hobby) {
    return {
        type: UPDATE_HOBBY,
        payload: hobby
    }
}
export function updateBirthdayDay (birthdayDay) {
    return {
        type: UPDATE_BIRTHDAYDAY,
        payload: birthdayDay
    }
}
export function updateBirthdayMonth (birthdayMonth) {
    return {
        type: UPDATE_BIRTHDAYMONTH,
        payload: birthdayMonth
    }
}
export function updateBirthdayYear (birthdayYear) {
    return {
        type: UPDATE_BIRTHDAYYEAR,
        payload: birthdayYear
    }
}

export default reducer;