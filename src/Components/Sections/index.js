import React, { useState } from 'react'
import { connect } from 'react-redux'
// import './Menu.css'

const Sections=(props)=>{
    // const [menu,setMenu]=useState(0)
return(
    <div className="menu">
        {props.data.menu[props.menu].menu_sections[0].menu_categories.map((ele,ind)=>{
            console.log(ele);
            return(<div  onClick={()=>{
                props.setSection(ind)
                window.scrollTo({top: 0, behavior: 'smooth'})
            }} className={props.section===ind?"menuName active":"menuName"}>
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
       
        dispatch({type:"SET_SECTION",payLoad:val})}
    })
  }
export default connect(mapStateToProps,mapActionsToProps)(Sections)