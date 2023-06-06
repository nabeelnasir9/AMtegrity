import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Typography} from '@mui/material';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import '../Styles/Faq.css';
// import '../sass/_layout.scss';

const SingleQuestion = (props) => {
  const [ansOpen, setAnsOpen] = useState(false);
  const rotateStyle = {
    transform: 'rotate(-45deg)',
    transition: 'all .3s'
  };

  const handleOpen = () => {
    setAnsOpen(!ansOpen);
  };

  return (
    <>
      <Accordion style={{ boxShadow: 'none', margin: '0 0' }}>
        <div className="questions__ques" onClick={handleOpen}>
          <AccordionSummary style={{ width: '100%', display:'flex' }}>
            <Typography style={{width:'100%'}}> 
              <div className="questions__ques_bold">
                {props.question}
                <span
                  className="questions__ques--plus"
                  style={ansOpen ? rotateStyle : { transition: 'all .3s' }}
                >
                  <BiPlus />
                </span>
              </div>
            </Typography>
          </AccordionSummary>
        </div>
        <div className="questions__border-down"></div>
        <AccordionDetails>
          <Typography>
            <div className="questions__ques--ans">{props.answer}</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default SingleQuestion;