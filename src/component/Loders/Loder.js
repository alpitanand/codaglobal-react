import Loader from 'react-loader-spinner'
import React,{Component} from 'react'
 export default class App extends Component {
  //other logic
    render() {
     return(
        <React.Fragment>
      <Loader
         type="Watch"
         color="#ecf0f1"
         height="100"	
         width="100"
      />  
      <div>Fetching data...</div>
      </React.Fragment>
     );
    }
 }