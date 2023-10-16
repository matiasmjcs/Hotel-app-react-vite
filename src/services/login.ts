import axios from "axios";
import { ILogin } from "../interfaces/user";


export const loginService = async (user: ILogin) => {
    try {
        const response = await axios.post('https://hotel-app-express-mongodb.onrender.com/api/v1/user/login', user)
        if (response.status === 200) {
            return response.data
        }
        throw new Error(response.statusText)
    } catch (error) {
        return error
    }
}