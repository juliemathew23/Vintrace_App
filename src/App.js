import React, { Component } from 'react';
import Wines from './components/Wines';
import Tabs from "./components/Tabs";

import './App.css';


    class App extends Component {
      state = {
             wines: [],
             details: []
           }

            componentDidMount() {
                   fetch('http://localhost:8080/api/search?lot=11YVCHAR001')
                   .then(res => res.json())
                   .then((data) => {
                     this.setState({ wines: data })
                   })
                   .catch(console.log)

                 }

      render() {
         return (
          <div>
                  <Wines wines={this.state.wines} />
                  <Tabs>
                         <div label="Year">
                         Test
                         </div>
                         <div label="Region">
                          Test
                         </div>
                         <div label="Variety">
                          Test
                         </div>
                         <div label="Year-Variety">
                          Test
                         </div>
                       </Tabs>
                       </div>
                )
      }
    }

    export default App;