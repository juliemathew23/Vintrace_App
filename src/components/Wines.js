 import React from 'react'

    const Wines = ({ wines }) => {
      return (
       <div class = "wine-details">
                 <center><h1>Wine Details</h1>
                 { wines.map((wine) => (
                   <div class="wine">
                     <div class="wine-body">
                       <h2>{wine.lotCode}</h2>
                       <h3>{wine.description}</h3>

                     <table class="wine-details" width="80%">
                       <tr>
                       <td >Volume</td>
                       <td>{wine.volume}</td>
                       </tr>
                       <tr>
                       <td>Tank Code</td>
                       <td>{wine.tank}</td>
                       </tr>
                       <tr>
                       <td>Product State</td>
                       <td>{wine.productState}</td>
                        </tr>
                        <tr>
                        <td>Owner</td>
                        <td>{wine.owner}</td>
                        </tr>
                       </table>
                     </div>
                   </div>
                 ))}
                 </center>
               </div>
      )
    };

    export default Wines
