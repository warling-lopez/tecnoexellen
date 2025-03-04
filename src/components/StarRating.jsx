import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ totalStars = 5 }) => {
  const rating = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <Star
            key={index}
            size={24}
            className={`${
              currentRating <= rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
