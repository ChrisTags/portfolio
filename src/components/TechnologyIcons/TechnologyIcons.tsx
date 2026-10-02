type TechnologyIconsProps = {
  topics: string[];
  excludedTopic: string;
};

export default function TechnologyIcons({
  topics,
  excludedTopic,
}: TechnologyIconsProps) {
  return (
    <>
      {topics
        .filter((topic) => topic.toLowerCase() !== excludedTopic)
        .map((tech) => {
          const normalizedTech = tech.toLowerCase();
          return (
            <img
              key={normalizedTech}
              src={`${import.meta.env.BASE_URL}languages-icons/${normalizedTech}.svg`}
              alt={normalizedTech}
              width={200}
              height="auto"
              loading="lazy"
            />
          );
        })}
    </>
  );
}
