import React from 'react';
import { AddContainer, AddStrap, Open, AddButton } from './AddStyles';
import ARROWOPEN from '../../Assets/ARROW OPEN.jsx'
import ARROWClOSE from '../../Assets/ARROW ClOSE.jsx'
import SEARCH from '../../Assets/SEARCH.jsx'


const Add = () => {
    
    // constructor(state) 
    // {
    //     this.state = {
    //         isDetailsDisplayed : false,
    //         status: this.props.status
    //     };
    //     this.showDetails = this.showDetails.bind(this);
    //     this.hideDetails = this.hideDetails.bind(this);
    // };

    // showDetails()
    // {
    //     if(!this.state.isDetailsDisplayed){
    //     this.setState({ isDetailsDisplayed: true });
    //     }
    // };

    // hideDetails()
    // {
    //     this.setState({ isDetailsDisplayed: false })
    // };

    return (
    <AddContainer>        
        <AddStrap> <p>Add Movie</p>
            
            <div className="arrows">
                <ARROWOPEN/>
                <ARROWClOSE />
            </div>
        </AddStrap>
        <Open>
            <div className="addDivContainer">
                <div className="addDiv" >
                    <p>Movie Title</p>
                    <input className="addInput" placeholder="Please enter the tittle of the movie" />           
                </div>
                <div className="addDiv">
                    <p>Add Planet</p>
                    <input className="addInput" placeholder="Search for the the planet in database" />
                    <button>
                        <SEARCH/>
                    </button>
                </div>
            </div>
            <AddButton>
                ADD MOVIE
            </AddButton>            
        </Open>             
        
    </AddContainer>
    );
}

export default Add;