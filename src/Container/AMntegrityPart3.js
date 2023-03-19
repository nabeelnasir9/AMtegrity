import React from "react";
import Download from "../images/download.svg";
import { TbTrademark } from "react-icons/tb";
import { InputNumber } from 'antd';
import "../Styles/AMntegrityPart3.css";

const onChange = (value) => {
    console.log('changed', value);
  };

function AMntegrityPart3() {
  return (
    <div id='AMXactimate' className="AMntegrityPart3__wrapper">
      <div className="AMntegrityPart3__container">
        <div className="AMntegrityPart3__Header">
          AMXactimate Fee Structure
        </div>
        <div className="AMntegrityPart3__Xcatimate">
          <div className="AMntegrityPart3__Text_1">XACTIMATE</div>
          <div className="AMntegrityPart3__Text_2">
            <img src={Download} alt='' />
          </div>
          <div className="AMntegrityPart3__Text_3">
            MATTERPORT
            <TbTrademark color="rgb(138, 138, 138)" />
          </div>
        </div>
        <div className="AMntegrityPart3__Text_4">
        The AMntegrity fee structure is based on a percentage of the total RCV of the estimate (pre Overhead and Profit).
Drag the slider around based on what you think it will cost to repair the property.
Move forward based on the estimated fee structure below.
            </div>

      </div>
    </div>
  );
}

export default AMntegrityPart3;
