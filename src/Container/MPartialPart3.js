import React from "react";
import Download from "../images/download.svg";
import { TbTrademark } from "react-icons/tb";
import { InputNumber } from 'antd';
import "../Styles/MPartialPart3.css";

const onChange = (value) => {
    console.log('changed', value);
  };

function MPartialPart3() {
  return (
    <div id='AMintConvert' className="MPartialPart3__wrapper">
      <div className="MPartialPart3__container">
        <div className="MPartialPart3__Header">
          AMintConvert Fee Structure
        </div>
        <div className="MPartialPart3__Xcatimate">
          <div className="MPartialPart3__Text_1">XACTIMATE</div>
          <div className="MPartialPart3__Text_2">
            <img src={Download} alt='' />
          </div>
          <div className="MPartialPart3__Text_3">
            MATTERPORT
            <TbTrademark color="rgb(138, 138, 138)" />
          </div>
        </div>
        <div className="MPartialPart3__Text_4">
        The AMintegrity fee structure is based on a percentage of the total RCV of the estimate (pre Overhead and Profit).
Drag the slider around based on what you think it will cost to repair the property.
Move forward based on the estimated fee structure below.
            </div>
<div className="MPartialPart3__Input">
    <div className="MPartialPart3__Input_1">
<InputNumber
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    </div>
    <div className="MPartialPart3__Input_1">

    </div>

</div>
      </div>
    </div>
  );
}

export default MPartialPart3;
