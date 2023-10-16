import { LinkAuthentication } from "../components/authentication/LinkAuthentication"
import { SignUpComponent } from "../components/authentication/SignUp"
import { TitleAuthentication } from "../components/authentication/TitleAuthentication"

export const SignUp = () => {
  return (
    <main className="p-4 grid min-h-[600px] justify-items-center">
      <TitleAuthentication title="Sign Up"/>
      <SignUpComponent/>
      <LinkAuthentication href="login" text="Already have an account? Log in here"/>
    </main>

  )
}
