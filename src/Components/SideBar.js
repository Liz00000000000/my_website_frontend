import React from 'react';

const SideBar = (props) => {
    return <div>
        <button onClick={props.handleCick} name='Projects' value='Projects'>Projects</button>
        <button onClick={props.handleCick} name='Resume' value='Resume'>Resume</button>
    </div>
}

export default SideBar