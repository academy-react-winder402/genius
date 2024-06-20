import { BlockInterface } from "../../types/block";

export const loadDescribe = (
  convertedDescribe: string | { blocks: BlockInterface[] }
) => {
  if (typeof convertedDescribe === "string") {
    return <p className="courseDetailsParagraph">{convertedDescribe}</p>;
  } else {
    return convertedDescribe?.blocks?.map((block, ind) => {
      switch (block.type) {
        case "header":
          return (
            <h1 key={ind} className="courseDetailsTitle">
              {block.data.text}
            </h1>
          );

        case "paragraph":
          return (
            <p key={ind} className="courseDetailsParagraph">
              {block.data.text}
            </p>
          );

        default:
          return null;
      }
    });
  }
};
