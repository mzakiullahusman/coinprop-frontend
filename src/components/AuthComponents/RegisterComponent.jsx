import { AuthRegister } from "../AuthForms";
import AuthHero from "./AuthHero";


const RegisterComponent = () => {
  return (
    <div>
      <AuthHero type="register" />
      <section className="blurry-effect w-full flex flex-col justify-center items-center p-7 gap-6 rounded-[20px] border border-white/10 shadow-[inset_0px_4px_25px_0px_rgba(31,217,173,0.3)] bg-gradient-to-br from-[#1FD9AD]/10 to-transparent">
        <div className="flex flex-col justify-start w-full items-start">
          <h2>Create new Account</h2>
        </div>
        <div>
          <AuthRegister />
        </div>
      </section>
    </div>
  );
};

export default RegisterComponent;
