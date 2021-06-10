import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as Constants from '../../Global/Constants'
const Sections=(props)=>{
    let sections=props.data.menu[props.menu].menu_sections[0].menu_categories
    const clickHandler=(ind)=>{
        props.setSection(ind)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
return(
    <div className="menu">
        {sections.map((ele,ind)=>{
            console.log(ele);
            return(<div  onClick={()=>clickHandler(ind)} className={props.section===ind?"menuName active":"menuName"}>
                {ele.name}
            </div>)
        })}
    </div>
)
}


const mapStateToProps = (state) => {
    return ({
        data: state.data,
        menu:state.menu,
        section:state.section
    })
}
const mapActionsToProps=(dispatch)=>{
    return({
      setSection:(val)=>{
       
        dispatch({type:Constants.SET_SECTION,payLoad:val})}
    })
  }
export default connect(mapStateToProps,mapActionsToProps)(Sections)