import React from "react";
import { Box } from "../../common/Box";

interface CustomTabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const CustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: CustomTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, pt: 2 }} padding={0}>
          {children}
        </Box>
      )}
    </div>
  );
};

export { CustomTabPanel };
