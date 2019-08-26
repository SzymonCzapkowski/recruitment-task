import React from 'react';
import { AddContainer, AddStrap, AddOpen, AddButton, } from './AddStyles';
import ARROWOPEN from '../../Assets/ARROW OPEN.jsx'
import ARROWCLOSE from '../../Assets/ARROW CLOSE.jsx'
import SEARCH from '../../Assets/SEARCH.jsx'
import Episode from '../MainPage/Episode/Episode.jsx'


class Add extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { 
            isOpened : false,
            newItem:'',
            list:[{id:1}, {id:2}]
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

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    };

    addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        const list = {...this.state.list};

        list.push(newItem);

        this.setState({
            list,
            newItem:''
        });
    };
    
    render() {
    return (
    <>
    <ul style={{ padding: 0 }}>
    {this.state.list.map( item => {
        return(
        <li style={{ listStyleType: "none" }} key={item.id}><Episode key={item.id}>
        {item.value}
        </Episode></li>
        )
    })}
    </ul>   
    <AddContainer>        
        <AddStrap> <p>Add Movie</p>         
                { this.state.isOpened ? null: <div onClick={this.open}><ARROWOPEN/></div>}
                { this.state.isOpened ? <div onClick={this.close}><ARROWCLOSE/></div> :null}
        </AddStrap>
        { this.state.isOpened ?
        <AddOpen>
            <div className="addDivContainer" onSubmit={this.onSubmit}>
                <form className="addDiv" type="text" value={this.state.newItem} 
                onChange={e => this.updateForm('newItem', e.target.value)} >
                    <p>Movie Title</p>
                    <input className="addInput" placeholder="Please enter the tittle of the movie" />           
                </form>
                <form className="addDiv">
                    <p>Add Planet</p>
                    <input className="addInput" placeholder="Search for the the planet in database" />
                    <button>
                        <SEARCH/>
                    </button>
                </form>
            </div>
            <AddButton onClick={() => this.addItem()}>
                ADD MOVIE
            </AddButton>            
        </AddOpen> 
        :null }             
        
    </AddContainer>
    </>
    );
}
}

export default Add;