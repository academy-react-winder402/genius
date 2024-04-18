import PropTypes from "prop-types";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion } from "../../common/Accordion";
import { AccordionSummary } from "../../common/Accordion/AccordionSummary";
import { AccordionDetails } from "../../common/Accordion/AccordionDetails";

const FilterAccordion = ({ title, children, isOpen }) => {
  return (
    <Accordion
      classes={{
        root: "before:hidden border-solid border-b-[1px] last:border-b-[0px] border-filterAccordionBorder",
      }}
      defaultExpanded={isOpen}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        className="font-[500] text-text1"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

FilterAccordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  isOpen: PropTypes.any,
};

export { FilterAccordion };
