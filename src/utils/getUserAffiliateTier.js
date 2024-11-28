import { useAuth } from "../context/AuthContext";
import AffTierOne from "../assets/images/aff-badge-tier-1.png";
import AffTierTwo from "../assets/images/aff-badge-tier-2.png";
import AffTierThree from "../assets/images/aff-badge-tier-3.png";
import AffTierFour from "../assets/images/aff-badge-tier-4.png";
import AffTierFive from "../assets/images/aff-badge-tier-5.png";

const getAffiliateTier = () => {
  const { user } = useAuth();
  const referredUsersCount = user?.referredUsersCount ?? 0;

  if (referredUsersCount >= 1000) {
    return { image: AffTierFive, tierName: "Supernova" };
  } else if (referredUsersCount >= 501) {
    return { image: AffTierFour, tierName: "Stellar" };
  } else if (referredUsersCount >= 101) {
    return { image: AffTierThree, tierName: "Lunar" };
  } else if (referredUsersCount >= 11) {
    return { image: AffTierTwo, tierName: "Orbital" };
  } else {
    return { image: AffTierOne, tierName: "Ignition" };
  }
};

export default getAffiliateTier;
