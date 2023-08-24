import React, { useState } from 'react';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const Accordion = ({ title, content }) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    // <div className="accordion-item">
    //   <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    //     <div className='title w-6/12'>{title}</div>
    //     <div className='title-plus w-6/12'>{isActive ? '-' : '+'}</div>
    //   </div>
    //   {isActive && <div className="accordion-content">{content}</div>}
    // </div>
    <div className=''>
      {accordionData.map(({ title, content }) => (
                    <Accordion>
                        
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        >
                        <Typography
                            style={{
                            fontWeight: 10,
                            }}
                        >
                            <h3>{title}</h3>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>{content}</Typography>
                        </AccordionDetails>
                    
                    </Accordion>
      ))}
    </div>
  );
};

export default Accordion;