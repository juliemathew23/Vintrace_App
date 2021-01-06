import React from 'react'

const Details = ({ details }) => {
let urlVal;
    if(details.breakDownType==='YEAR') urlVal = "Year";
    if(details.breakDownType==='VARIETY') urlVal = "Variety";
    if(details.breakDownType==='REGION') urlVal = "Region";
    if(details.breakDownType==='YEAR-VARIETY') urlVal = "Year-variety";


      return (
       <div class = "details1">
        <table class="wine-details" width="80%">
                                      <tr>
                                      <td>{urlVal}</td>
                                      <td>Percentage</td>
                                      </tr>
         {details.breakDown.map(( breakDown, index ) => {
                  return (
                    <tr key={index}>
                      <td>{breakDown.key}</td>
                     <td>{breakDown.percentage}</td>
                    </tr>
                  );
                })}

                                       </table>
                               </div>
                                )
                              };

export default Details