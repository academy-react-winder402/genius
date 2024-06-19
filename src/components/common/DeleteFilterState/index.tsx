import { ClearAll } from "@mui/icons-material";

interface DeleteFilterStateProps {
  isValueChanged: boolean;
  handleDeleteValueChange: () => void;
}

const DeleteFilterState = ({
  isValueChanged,
  handleDeleteValueChange,
}: DeleteFilterStateProps) => {
  return (
    isValueChanged && (
      <div
        className="text-red pr-[19px] mb-3 cursor-pointer"
        onClick={handleDeleteValueChange}
      >
        <ClearAll />
        حذف فیلتر
      </div>
    )
  );
};

export { DeleteFilterState };
