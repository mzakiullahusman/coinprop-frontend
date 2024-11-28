import { LoginComponent } from "../../components/AuthComponents";
import AuthHero from "@components/AuthComponents/AuthHero";
import background from "@assets/images/background.png";

const Login = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full max-w-6xl px-6 md:px-12 lg:px-24 xl:px-40 text-center mb-3">
        <AuthHero type="login"/>
      </div>

      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/6 px-6">
        <LoginComponent />
      </div>

      {/* Footer Links */}
      <div className="mt-2 flex items-center text-white text-xs space-x-4">
        <a href="#" className="hover:text-gray-300">
          Terms
        </a>
        <a href="#" className="hover:text-gray-300">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-300">
          Docs
        </a>
        <a href="#" className="hover:text-gray-300">
          Helps
        </a>
      </div>
    </section>
  );
};

export default Login;
