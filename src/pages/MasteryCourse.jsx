import NoButtonHeroCard from "../components/PageHeroCards/NoButtonHeroCard";
import masteryBg from "../assets/images/masteryBg.png";
import NewsCard from "../components/Cards/NewsCard";
import PageHeader from "../components/Layout/PageHeader";
import dummyArticleImage from "../assets/images/dummyArticleImage.png";

const accountOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const MasteryCourse = () => {
  const handleAccountSelect = (accountOptions) => {
    console.log("Selected option:", accountOptions);
  };

  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <NoButtonHeroCard
          title="Mastery Course"
          description="Unlock the secrets to successful trading with our Mastery Course, offering a deep dive into the world of trading. Explore every aspect of trading, from pre-trade analysis to post-trade review, and gain a comprehensive understanding of the mechanics behind each decision."
          bgImage={masteryBg}
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

export default MasteryCourse;
