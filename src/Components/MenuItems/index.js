import React, { useState } from 'react'
import { connect } from 'react-redux'
import './MenuItems.css'

const MenuItems = (props) => {
    return (
        <div className="menuItemsContainer">
            <h1>{props.data.menu[props.menu].menu_sections[0].menu_categories[props.section].name}</h1>
            <div style={{textAlign:"center",marginTop:"-20px"}}><img src={`${process.env.PUBLIC_URL}/border.png`} style={{width:90}}></img></div>
            <div className="menuItems">
                {props.data.menu[props.menu].menu_sections[0].menu_categories[props.section].items.map((ele) => {
                    return(<div className='menuItem'>
                        <img  alt={ele.name} src={ele.image}></img>
                        <div className='menuItemDetail'>
                            <p >{ele.name}</p>
                            <p>AED {ele.price}</p>
                            <p>{ele.description}</p>
                        </div>

                    </div>)
                })}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({
        data: state.data,
        menu: state.menu,
        section: state.section
    })
}
const mapActionsToProps = (dispatch) => {
    return ({
        setMenu: (val) => {

            dispatch({ type: "SET_MENU", payLoad: val })
        }
    })
}
export default connect(mapStateToProps, mapActionsToProps)(MenuItems)