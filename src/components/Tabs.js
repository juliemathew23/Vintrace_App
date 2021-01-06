import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Details from './Details';

  class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
      super(props);

      this.state = {
        activeTab: this.props.children[0].props.label,
        details: []
      };
    }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    let urlVal;
    if(tab==='Year') urlVal = "year";
    if(tab==='Variety') urlVal = "variety";
    if(tab==='Region') urlVal = "region";
    if(tab==='Year-Variety') urlVal = "year-variety";

    fetch('http://localhost:8080/api/breakdown/'+urlVal+'/11YVCHAR001')
    .then(res => res.json())
      .then((data) => {
       this.setState({ details: data })
      });
  }

 render() {
     const {
       onClickTabItem,
       props: {
         children,
       },
       state: {
         activeTab,
         details
       }
     } = this;

     return (
       <div className="tabs">
         <ol className="tab-list">
           {children.map((child) => {
             const { label } = child.props;

             return (
               <Tab
                 activeTab={activeTab}
                 key={label}
                 label={label}
                 onClick={onClickTabItem}
               />
             );
           })}
         </ol>
         <div className="tab-content">
           {children.map((child) => {
             if (child.props.label !== activeTab) return undefined;
             return child.props.children;
           })}
         </div>
          <Details details={this.state.details} />
       </div>
     );
   }
 }

 export default Tabs;