import React from 'react';

const SideBar = (props) => {
    return <div>
        <button onClick={props.handleCick} name='viewVideos'>Projects</button>
        <button onClick={props.handleCick} name='viewRes'>Resume</button>
    </div>
}

export default SideBar