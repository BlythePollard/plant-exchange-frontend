import React from 'react';

export const AvailablePlant = (props) => {
    const isAvailable = props.isAvailable;
    if(isAvailable == true) {
        return (
            <div>
            <li>Link to show page here</li>
            </div>
        )
    } else { return ( <div>Not Available</div>)}
}

export default AvailablePlant