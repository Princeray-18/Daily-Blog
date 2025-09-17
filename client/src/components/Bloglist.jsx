import React from "react";
import { blogCategories } from "../assets/assets";

const Bloglist = () => {
  return (
    <div className="px-6 sm:px-12">
      {/* Categories */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item, index) => (
          <div key={index} className="relative">
            <button className="px-4 py-2 border rounded-lg hover:bg-primary/10 transition">
              {item}
            </button>
          </div>
        ))}
      </div>

      {/* Blog cards */}
      <div>
        {/* ---blog cards will go here--- */}
      </div>
    </div>
  );
};

export default Bloglist;
