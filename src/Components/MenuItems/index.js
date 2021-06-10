import React, { useState } from 'react'
import { connect } from 'react-redux'
import './MenuItems.css'
import * as Constants from '../../Global/Constants'
const MenuItems = (props) => {
    let menuItem=props.data.menu[props.menu].menu_sections[0].menu_categories[props.section]
    return (
        <div className="menuItemsContainer">
            <h1>{menuItem.name}</h1>
            <div style={{textAlign:"center",marginTop:"-20px"}}><img src={`${process.env.PUBLIC_URL}/border.png`} style={{width:90}}></img></div>
            <div className="menuItems">
                {menuItem.items.map((ele) => {
                    return(<div className='menuItem'>
                        <img  alt={ele.name} src={ele.image?ele.image:`${process.env.PUBLIC_URL}/temp.jpg`}></img>
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

            dispatch({ type: Constants.SET_MENU, payLoad: val })
        }
    })
}
export default connect(mapStateToProps, mapActionsToProps)(MenuItems)