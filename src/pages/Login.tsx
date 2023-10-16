import { LoginComponent } from '../components/authentication/Login'
import { TitleAuthentication } from "../components/authentication/TitleAuthentication";
import { LinkAuthentication } from "../components/authentication/LinkAuthentication";

export const Login = () => {

  return (
    <main className="p-4 min-h-[600px] text-black grid justify-items-center">
      <TitleAuthentication title="Login"/>
      <LoginComponent/>
      <LinkAuthentication href="signup" text="Don't have an account? Sign up here"/>
    </main>

  )
}