import React from "react";

interface PopularTopicsProps {
  topics: string[];
}

const PopularTopics = ({ topics }: PopularTopicsProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
        Popular Topics
      </h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            className="px-4 py-2 bg-[#0D9488]/10 dark:bg-[#0D9488]/20  text-[#0D9488] dark:text-[#0D9488] hover:bg-cyan-200 dark:hover:bg-teal-800  rounded-full text-sm  transition-colors duration-300"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;