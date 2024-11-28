import NoButtonHeroCard from "../components/PageHeroCards/NoButtonHeroCard";
import mindBg from "../assets/images/mindBg.png";
import NewsCard from "../components/Cards/NewsCard";
import PageHeader from "../components/Layout/PageHeader";

import dummyArticleImage from "../assets/images/dummyArticleImage.png";

const accountOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const TradersMind = () => {
  const handleAccountSelect = (accountOptions) => {
    console.log("Selected option:", accountOptions);
  };

  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <NoButtonHeroCard
          title="A Traders Mind"
          description="Tap into the power of your mind with our exclusive course, 'A Trader's Mind'. Learn the psychological strategies and emotional control techniques used by top traders to achieve consistent success in the markets. Unlock the key to your trading success and take your skills to the next level with our Mastery Courses and 'A Trader's Mind'."
          bgImage={mindBg}
        />
        <PageHeader
          title="Courses"
          selectPlaceholder="Filter"
          selectOptions={accountOptions}
          selectHandler={handleAccountSelect}
        />
        <div className="flex flex-col gap-4 flex-wrap lg:flex-nowrap w-full">
          <div className="flex gap-4 justify-center lg:justify-between flex-wrap lg:flex-nowrap w-full">
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
          </div>
          <div className="flex gap-4 justify-center lg:justify-between flex-wrap lg:flex-nowrap w-full">
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
            <NewsCard
              imageSrc={dummyArticleImage}
              title="Lorem ipsum dolor sit amet consectetur."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TradersMind;
