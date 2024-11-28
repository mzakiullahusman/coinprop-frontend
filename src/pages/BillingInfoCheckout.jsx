import { useState } from "react";

import PageHeader from "../components/Layout/PageHeader";
import PageCardMain from "../components/PageCards/PageCardMain";

import pageSeparator from "../assets/icons/pageSeparator.svg";
import OrderSummaryCard from "../components/Cards/OrderSummaryCard";
import UserInputField from "../components/UserInputs/UserInputField";
import UserSelector from "../components/UserInputs/UserSelector";
import UserRichTextInput from "../components/UserInputs/UserRichTextInput";

import checked from "../assets/icons/checkFilled.svg";
import unChecked from "../assets/icons/checkUnfilled.svg";
import TextInfoBox from "../components/TextInfoBox/TextInfoBox";

const stateOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const termsText =
  "Lorem ipsum dolor sit amet consectetur. Orci scelerisque libero egestas hendrerit diam sodales viverra turpis. A nunc tellus varius massa id id at gravida ac. Viverra lobortis in tincidunt neque venenatis sapien magnis lectus ultrices. Posuere morbi diam mauris nec congue. Id vel quisque elementum lorem phasellus dui hac varius. Et integer ac tincidunt massa posuere. Hendrerit pretium commodo porta sem enim donec ut. Integer consectetur dignissim ut urna nec pharetra. Sed netus morbi enim nibh et consequat commodo sed. Lobortis volutpat auctor odio in. Odio sem auctor neque vestibulum egestas mauris massa egestas varius. Ultricies dignissim sed hendrerit orci sed. Nibh cursus ac suspendisse feugiat augue id aenean facilisi suspendisse. A pretium nulla eleifend amet sodales accumsan eget massa id. Gravida a nam sit duis pellentesque at tincidunt. Ornare sollicitudin ut mauris vehicula gravida. Quisque consequat leo gravida ornare augue erat diam egestas. Non pellentesque ut id dictum ornare tincidunt sit proin. Aliquam lorem porttitor tempus volutpat neque iaculis lectus id. Fermentum gravida ullamcorper euismod libero ac morbi diam maecenas dignissim. Risus nisl nunc augue quis interdum. Non fames et convallis turpis a erat morbi porta. Nulla iaculis nullam ac id libero convallis scelerisque bibendum. Ultrices euismod turpis pellentesque aliquet. Diam sagittis rutrum sed a adipiscing in pretium ut eu. Lobortis eget nullam phasellus facilisi. Purus aliquet non malesuada condimentum. Faucibus diam imperdiet sed pulvinar diam aenean ut lacinia dictumst. Tincidunt tincidunt nullam id risus cras tortor adipiscing eu condimentum. Id lectus ultrices sagittis vitae et mauris. Quis scelerisque mi orci eget adipiscing bibendum diam. Volutpat molestie nisl lectus laoreet habitasse egestas. Egestas in leo quisque sed sollicitudin eleifend. Id consectetur dolor odio adipiscing risus vel. Aenean eget blandit ullamcorper malesuada. Luctus ac eu lectus sit velit. Id nulla morbi sed ut vitae dolor tempor semper. Dictumst convallis convallis pellentesque faucibus scelerisque sem. Enim arcu eros pharetra eros justo augue ipsum. Aenean aliquam tempus quis nibh amet velit imperdiet fusce. Vitae leo habitasse blandit maecenas sit hac at. Felis volutpat aliquam faucibus vestibulum. Euismod donec sit quam a felis egestas metus vestibulum bibendum. Eros et sed bibendum adipiscing ut interdum tellus quam imperdiet. Neque mauris praesent mi convallis mauris pellentesque lectus in. Urna cursus senectus vulputate sagittis vestibulum condimentum. Faucibus porttitor ornare dolor enim diam nibh. Nascetur eget feugiat lectus egestas amet elit arcu. Lorem tellus id a mi lectus quis. Quis at nulla vitae ac.";

const BillingInfoCheckout = () => {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);

  const handleStateSelect = () => {
    console.log("Selected option:");
  };

  const toggleTerms = () => {
    setCheckedTerms(!checkedTerms);
  };

  const togglePrivacy = () => {
    setCheckedPrivacy(!checkedPrivacy);
  };

  return (
    <>
      <div className="flex gap-4 w-full flex-wrap lg:flex-nowrap justify-between lg:pt-[76px]">
        <div className="w-full lg:w-[70%] xl:w-[77%]">
          <PageCardMain isBlur={true} gap="gap-[20px] lg:gap-[35px]">
            <div className="">
              <PageHeader title="Billing Info" />
              <h3 className="font-semibold text-[16px] mt-2 lg:mt-[14px]">
                Before you start trading for us, we need to know some basic
                information about you!
              </h3>
            </div>
            <div id="profile-info" className="flex flex-col w-full">
              <h3 className="font-semibold text-[16px]">Profile information</h3>
              <img className="my-4" src={pageSeparator} alt="separator" />
              <div className="flex flex-col gap-[27px] w-full">
                <div className="flex gap-[20px] w-full">
                  <UserInputField
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                  />
                  <UserInputField
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="flex gap-[20px] w-full">
                  <UserInputField
                    label="Company Name"
                    type="text"
                    placeholder="Company Name"
                  />
                  <UserInputField
                    label="Business number"
                    type="text"
                    placeholder="Business Number"
                  />
                </div>
                <div className="flex gap-[20px] w-full">
                  <UserInputField
                    label="Email"
                    type="text"
                    placeholder="Email"
                  />
                  <UserInputField
                    label="Phone number"
                    type="text"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="flex gap-[20px] w-full lg:w-[49%]">
                  <UserInputField
                    label="VAT number"
                    type="text"
                    placeholder="VAT number"
                  />
                </div>
              </div>
            </div>
            <div id="address-info" className="flex flex-col w-full">
              <h3 className="font-semibold text-[16px]">Address</h3>
              <img className="my-4" src={pageSeparator} alt="separator" />
              <div className="flex flex-col gap-[27px] w-full">
                <div className="flex gap-[20px] w-full">
                  <UserInputField
                    label="Country"
                    type="text"
                    placeholder="Country"
                  />
                  <UserInputField
                    label="Postal code"
                    type="text"
                    placeholder="Postal code"
                  />
                </div>
                <UserSelector
                  label="State"
                  options={stateOptions}
                  placeholder="Please Select"
                  onSelect={handleStateSelect}
                />
                <div className="flex gap-[20px] w-full">
                  <UserInputField label="City" type="text" placeholder="City" />
                  <UserInputField
                    label="Street"
                    type="text"
                    placeholder="Street"
                  />
                </div>
              </div>
            </div>

            <div id="note" className="flex flex-col w-full">
              <h3 className="font-semibold text-[16px]">Note</h3>
              <img className="my-4" src={pageSeparator} alt="separator" />
              <UserRichTextInput />
            </div>

            <div id="coupon-info" className="flex flex-col w-full">
              <h3 className="font-semibold text-[16px]">Coupon</h3>
              <img className="my-4" src={pageSeparator} alt="separator" />
              <div className="flex gap-[20px] w-full flex-wrap md:flex-nowrap">
                <UserInputField
                  label="Promo code"
                  type="text"
                  placeholder="Enter Promo Code"
                  buttonText="Apply"
                />
                <UserInputField
                  label="Affiliate Code"
                  type="text"
                  placeholder="Enter Affiliate Code"
                  buttonText="Apply"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[11px] w-full">
              <TextInfoBox text={termsText} />
              <div
                className="flex items-center cursor-pointer"
                onClick={togglePrivacy}
              >
                <img
                  src={checkedPrivacy ? checked : unChecked}
                  alt="checkedPrivacy"
                  className="mr-2"
                />
                <p className="text-[14px] font-medium ">
                  I declare that I have read and agree with Terms & Conditions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[11px] w-full">
              <TextInfoBox text={termsText} />
              <div
                className="flex items-center cursor-pointer"
                onClick={setCheckedTerms}
              >
                <img
                  src={toggleTerms ? checked : unChecked}
                  alt="toggleTerms"
                  className="mr-2"
                />
                <p className="text-[14px] font-medium ">
                  I declare that I have read and agree with Cancellation &
                  Refund Policy
                </p>
              </div>
            </div>
          </PageCardMain>
        </div>
        <div className="w-full lg:w-[25%] xl:w-[20%]">
          <OrderSummaryCard price="$155.00" discount="-$0" total="$155.00" />
        </div>
      </div>
    </>
  );
};

export default BillingInfoCheckout;
