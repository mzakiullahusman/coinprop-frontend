import NoButtonHeroCard from "../components/PageHeroCards/NoButtonHeroCard";
import intelligenceBg from "../assets/images/intelligenceBg.png";

import dummyArticleImage from "../assets/images/dummyArticleImage.png";
import NewsCard from "../components/Cards/NewsCard";
import PageHeader from "../components/Layout/PageHeader";

const accountOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Interviews = () => {
  const handleAccountSelect = (accountOptions) => {
    console.log("Selected option:", accountOptions);
  };

  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <NoButtonHeroCard
          title="Interviews"
          description="Here at Nova Funding we love transparency, that’s why we want you to see who trades for us already, their success, and how you can be the next one!"
          bgImage={intelligenceBg}
        />
        <PageHeader
          title="Interviews"
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

export default Interviews;
