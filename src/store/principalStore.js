import { atom } from "recoil";

export const principalState = atom({
    key: "principalState",
    default: {
        userId: 0,
        username: "",
        name: "",
        email: "",
        phone: ""
    }
})