import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Menu.css'
import * as Constants from '../../Global/Constants'
const Menu=(props)=>{
    // const [menu,setMenu]=useState(0)
    let menu=props.data.menu
return(
    <div className="menu">
        {menu.map((ele,ind)=>{
            return(
                <div  key={ind} className={props.menu===ind?"menuName active":"menuName"} onClick={()=>{
                    props.setMenu(ind)
                }}>{ele.menu_name}</div>
            )
        })}
        
    </div>
)
}


const mapStateToProps = (state) => {
    return ({
        data: state.data,
        menu:state.menu
    })
}
const mapActionsToProps=(dispatch)=>{
    return({
      setMenu:(val)=>{
       
        dispatch({type:Constants.SET_MENU,payLoad:val})}
    })
  }
export default connect(mapStateToProps,mapActionsToProps)(Menu)