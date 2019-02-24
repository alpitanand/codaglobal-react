import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classes from './PoulateList.module.css'


const displayItems = (props)=>{

   

    let displayData = props.fetchedData.map((item)=>{
        return(
<div className={classes.style}>
        <ListItem className={classes.list} divider>
            <ListItemText className={classes.listitem}
                primary={item.name}
                secondary={"Song by- "+item.artists}
            />
        
        </ListItem>
        </div>   
        )
    })
    return(
    <React.Fragment>
        {displayData}
    </React.Fragment>
    )
}

export default displayItems