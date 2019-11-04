import React, { Component } from 'react';

class Fave extends Component {

    state = {
        isFave:false,
    }

    handleClick = (event) =>{
        event.stopPropagation()
        this.setState({ isFave: !this.state.isFave })
        console.log("handling Fave click!")
    }

    render() {
        const isFave = this.state.isFave? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`}>
                <p className="material-icons" onClick={this.handleClick}>{isFave}</p>
            </div>
        );
    }
}

export default Fave;