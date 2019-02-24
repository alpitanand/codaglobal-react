import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classes from './PoulateList.module.css'
import ReactTooltip from 'react-tooltip'


const displayItems = (props)=>{
    let displayData = <p>Sorry nothing found</p>
    if(props.fetchedData.length!==0){
       
   
     displayData = props.fetchedData.map((item)=>{
        
        return(
            <div className={classes.style} key={item.rank}>
          <div data-tip={"Rank "+item.rank} > 
            <ListItem className={classes.list}  divider>
                <ListItemText className={classes.listitem}
                    primary={item.name}
                    secondary={"Song by- "+item.artists}
                />
            </ListItem>
          </div>
          <ReactTooltip place="bottom" type="dark" effect="solid" >
          </ReactTooltip>
            </div>   
        )
    })}
    return(
    <React.Fragment>
        {displayData}
    </React.Fragment>
    )
}

export default displayItems