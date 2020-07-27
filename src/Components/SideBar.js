import React from 'react';
// import Icon from '.../public/favicon.ico'

const SideBar = (props) => {
    return (
        <div className='ui vertical pointing menu'>
        <div className='two column stackable ui grid'>
                <div className='item'>
                <img className='ui small circular image' src='https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/28161461_10211066462202263_862115397948204181_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=h--IM4VGYWgAX-FGbOu&_nc_ht=scontent-lga3-1.xx&oh=040f8c06ca02d1ac188f74d6a4501787&oe=5F457F86' alt='Liz' />
                </div>
                <div className='row'>
                <button className='ui small button' onClick={props.handleCick} name='Projects' value='Projects'>Projects</button>
                <button className='ui small button' onClick={props.handleCick} name='Resume' value='Resume'>Resume</button>
                </div>
        </div>
        </div>
    )
}

export default SideBar