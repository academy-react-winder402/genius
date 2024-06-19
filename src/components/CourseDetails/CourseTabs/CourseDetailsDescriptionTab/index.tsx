import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
import { CustomTabPanel } from "../../../common/CustomTabPanel";
interface CourseDetailsDescriptionTabProps {
  value: number;
  description: string;
}

interface Block {
  type: string;
  data: {
    text:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
  };
}

const CourseDetailsDescriptionTab = ({
  value,
  description,
}: CourseDetailsDescriptionTabProps) => {
  let convertedDescribe: string | { blocks: Block[] };

  try {
    const convertDescribe = JSON.parse(description);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = description;
  }

  const loadContent = () => {
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

  return (
    <CustomTabPanel value={value} index={0}>
      {loadContent()}
    </CustomTabPanel>
  );
};

export { CourseDetailsDescriptionTab };
