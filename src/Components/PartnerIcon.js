import React from "react";
import unodc from "../Assets/unodc.svg";
import min from "../Assets/fin.svg";
import usaid from "../Assets/us_aid.svg";
import fin from "../Assets/fin.svg";
import bahria_town from "../Assets/bahria_town.svg";
import paf from "../Assets/paf.svg";
import pcb from "../Assets/pcb.svg";
import pof from "../Assets/pof.svg";
import care from "../Assets/care.svg";
import park_view from "../Assets/park_view.svg";
import skypark from "../Assets/skypark.svg";
import ptcl from "../Assets/ptcl.svg";

const PartnerIcon = () => {
  const className = "h-9 w-9 md:h-11 md:w-11 lg:h-14 lg:w-14 mr-4 mb-4";
  return (
    <div className="flex flex-wrap mt-4">
      <img className={className} src={unodc} alt="partner-logo" />
      <img className={className} src={min} alt="partner-logo" />
      <img className={className} src={usaid} alt="partner-logo" />
      <img className={className} src={fin} alt="partner-logo" />
      <img className={className} src={bahria_town} alt="partner-logo" />
      <img className={className} src={paf} alt="partner-logo" />
      <img className={className} src={pcb} alt="partner-logo" />
      <img className={className} src={pof} alt="partner-logo" />
      <img className={className} src={care} alt="partner-logo" />
      <img className={className} src={park_view} alt="partner-logo" />
      <img className={className} src={skypark} alt="partner-logo" />
      <img className={className} src={ptcl} alt="partner-logo" />
    </div>
  );
};

export default PartnerIcon;
