import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Menu.css'

const Menu=(props)=>{
    // const [menu,setMenu]=useState(0)
return(
    <div className="menu">
        {props.data.menu.map((ele,ind)=>{
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
       
        dispatch({type:"SET_MENU",payLoad:val})}
    })
  }
export default connect(mapStateToProps,mapActionsToProps)(Menu)