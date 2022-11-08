import { userActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.set_Current_User,
    paylaod: user
}); 