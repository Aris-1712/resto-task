import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Menu.css'
import * as Constants from '../../Global/Constants'
const Menu=(props)=>{
   
    const clickHandler=(ind)=>{
        props.setMenu(ind)
    }
return(
    <div className="menu">
        {props.menuItems.map((ele,ind)=>{
            return(
                <div  key={ind} className={props.menu===ind?"menuName active":"menuName"} onClick={()=>clickHandler(ind)}>{ele.menu_name}</div>
            )
        })}
        
    </div>
)
}


const mapStateToProps = (state) => {
    return ({
        data: state.data,
        menu:state.menu,
        menuItems:state.menuItems
    })
}
const mapActionsToProps=(dispatch)=>{
    return({
      setMenu:(val)=>{
       
        dispatch({type:Constants.SET_MENU,payLoad:val})}
    })
  }
export default connect(mapStateToProps,mapActionsToProps)(Menu)