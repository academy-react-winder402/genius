import React from "react";

const CategoryItem = ({ categoryItem } : CategoryItemProps) => {
  return (
    <div className="categoryItem">
      <div
        className="w-[104px] h-[104px] rounded-[24px] flex flex-col justify-center items-center"
        style={{ background: categoryItem.imageBackground }}
      >
        <img src={categoryItem.image} className="w-[64px] h-[64px]" />
      </div>
      <h4 className="font-[900] text-[24px] text-text1 mt-4">
        {categoryItem.title}
      </h4>
      <p className="px-9 text-center mt-2">{categoryItem.description}</p>
    </div>
  );
};

export { CategoryItem };
