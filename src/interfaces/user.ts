export interface ISignUp {
    email: string;
    password: string;
    username: string;
}

export interface ILogin extends Omit<ISignUp, "username"> {}