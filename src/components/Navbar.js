//PlantsContainer & PlantInput can use this header!
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                <Navbar.Brand href="/home">PlantExchange Denver</Navbar.Brand>
                <Navbar.Text>share some plants with your neighbors</Navbar.Text>
                
                </Navbar>
            </div>
        )
    }
}