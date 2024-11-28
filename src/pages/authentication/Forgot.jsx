import { ForgotComponent } from "../../components/AuthComponents";
import AuthHero from "@components/AuthComponents/AuthHero";
import background from "@assets/images/background.png";
import sideImage from "@assets/images/sign-up-side-image.png";
const Forgot = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center min-h-screen backdrop-blur-md"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 xl:gap-24 px-6 md:px-12 lg:px-24 xl:px-40 min-h-screen">
          {/* Left Side - Auth Hero */}
          <div className="hidden lg:flex w-full h-full lg:w-1/2 justify-center mb-8 lg:mb-0">
            <div className="p-1/2 flex min-h-screen">
              <img
                src={sideImage}
                alt="coin-prop"
                className="object-cover w-full h-[70%] translate-y-20 rounded-3xl border border-white/30"
              />
            </div>
          </div>
          <div className="w-[80%] md:w-[45%] md:flex md:justify-end lg:[40%]">
            <ForgotComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgot;
