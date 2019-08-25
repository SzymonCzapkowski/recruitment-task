import React from 'react';
import { AddContainer, AddStrap, AddOpen, AddButton } from './AddStyles';
import ARROWOPEN from '../../Assets/ARROW OPEN.jsx'
import ARROWCLOSE from '../../Assets/ARROW CLOSE.jsx'
import SEARCH from '../../Assets/SEARCH.jsx'


class Add extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { 
            isOpened : false,
            title:'',
            planet:'',
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    };

    open()
    {
        if(!this.state.isOpened){
        this.setState({ isOpened: true })        
        }
    };

    close()
    {
        this.setState({ isOpened: false })
        
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {title, planet} = this.state;
    };

    
    render() {
    return (
        
    <AddContainer>        
        <AddStrap> <p>Add Movie</p>            
            <div className="arrows">
                { this.state.isOpened ? null: <div onClick={this.open}><ARROWOPEN/></div>}
                { this.state.isOpened ? <div onClick={this.close}><ARROWCLOSE/></div> :null}
            </div>
        </AddStrap>
        { this.state.isOpened ?
        <AddOpen>
            <div className="addDivContainer" onSubmit={this.onSubmit}>
                <form className="addDiv" >
                    <p>Movie Title</p>
                    <input className="addInput" name="title" value={title} placeholder="Please enter the tittle of the movie" />           
                </form>
                <form className="addDiv">
                    <p>Add Planet</p>
                    <input className="addInput" name="planet" value={planet} placeholder="Search for the the planet in database" />
                    <button>
                        <SEARCH/>
                    </button>
                </form>
            </div>
            <AddButton onSubmit={this.onSubmit}>
                ADD MOVIE
            </AddButton>            
        </AddOpen> 
        :null }             
        
    </AddContainer>
    );
}
}

export default Add;