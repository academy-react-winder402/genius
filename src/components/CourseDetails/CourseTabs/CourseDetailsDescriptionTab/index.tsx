import { loadDescribe } from "../../../../core/utils/load-describe.utils";

import { BlockInterface } from "../../../../types/block";

import { CustomTabPanel } from "../../../common/CustomTabPanel";
interface CourseDetailsDescriptionTabProps {
  value: number;
  description: string;
}

const CourseDetailsDescriptionTab = ({
  value,
  description,
}: CourseDetailsDescriptionTabProps) => {
  let convertedDescribe: string | { blocks: BlockInterface[] };

  try {
    const convertDescribe = JSON.parse(description);

    convertedDescribe = convertDescribe;
  } catch (error) {
    convertedDescribe = description;
  }

  return (
    <CustomTabPanel value={value} index={0}>
      {loadDescribe(convertedDescribe)}
    </CustomTabPanel>
  );
};

export { CourseDetailsDescriptionTab };
