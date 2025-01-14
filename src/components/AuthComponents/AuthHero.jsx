import sideImage from "@assets/images/sign-up-side-image.png";
import Logo from "@assets/images/coinprop-logo.png";
const AuthHero = ({ type }) => {
  return (
    <section
      className={` ${
        type === "register"
          ? "px-0"
          : "flex items-center justify-center w-full h-full text-white px-8"
      }`}
    >
      {type === "register" ? (
        <div className="flex flex-col max-w-lg w-full">
          {/* Logo Row */}
          <div className="mb-4 w-full">
            <img src={Logo} className="h-[45px] w-auto sm:h-[55px] lg:h-[65px] xl:h-[70px] object-contain transition-all duration-300" alt="coin-prop" width="180" />
          </div>

          {/* Title Row */}
          <div className="w-full mb-4">
            <h1 className="text-4xl">Become a Funded Crypto Trader.</h1>
          </div>

          {/* Subtitle Row */}
          <div className="mb-3 w-full">
            <p className="text-sm text-gray-300">
              Everything you need to become a Risk Master funded trader
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center max-w-lg text-left w-full">
          {/* Logo Row */}
          <div className="flex mb-3 w-full justify-center">
            <img src={Logo} className="h-[45px] w-auto sm:h-[55px] lg:h-[65px] xl:h-[70px] object-contain transition-all duration-300" alt="coin-prop" width="180" />
          </div>

          {/* Title Row */}
          <div className="w-full mb-4">
            <h1 className="text-4xl text-center">Welcome back </h1>
          </div>

          {/* Subtitle Row */}
          <div className="flex mb-3 w-full justify-center">
            <p className="text-sm text-gray-300">
              Everything you need to become a Risk Master funded trader
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuthHero;
