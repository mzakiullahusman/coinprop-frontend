import { useLocation } from "react-router-dom";
import { AuthLogin } from "../AuthForms";

const LoginComponent = () => {
  const location = useLocation();
  const fromRegistration = location.state?.fromRegistration;

  return (
    <section className="blurry-effect w-full flex flex-col justify-center items-center p-7 gap-6 rounded-[20px] border border-white/10 shadow-[inset_0px_4px_25px_0px_rgba(31,217,173,0.3)] bg-gradient-to-br from-[#1FD9AD]/10 to-transparent">
      <div className="flex flex-col justify-start w-full items-start">
        <h2>
          {fromRegistration
            ? "Registration Successful!"
            : "You can login securely below"}
        </h2>
      </div>

      <div className="w-full">
        <AuthLogin />
      </div>
    </section>
  );
};

export default LoginComponent;
