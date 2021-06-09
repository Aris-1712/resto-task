import React from 'react'
import { connect } from 'react-redux'
import './Banner.css'

const Banner = (props) => {
    return (

        <div /* style={{ backgroundImage: `url(${props.data.info.image_url})` }} */ className="banner">
            <img src={props.data.info.logo_url}></img>
            <div className='myorder'>MY ORDERS</div>
            <div className="title">
                <p>{props.data.info.restaurant_location}</p>
                <h1>In Room Dining</h1>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return ({
        data: state.data
    })
}

export default connect(mapStateToProps)(Banner)