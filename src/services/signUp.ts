import axios from "axios";
import { ISignUp } from "../interfaces/user";

export const signUpService = async (user: ISignUp) => {
    try {
        const response = await axios.post('https://hotel-app-express-mongodb.onrender.com/api/v1/user/signup', user)
        if (response.status === 200) {
            return response.data
        }
        throw new Error(response.statusText)
    } catch (error) {
        return error
    }
    
}