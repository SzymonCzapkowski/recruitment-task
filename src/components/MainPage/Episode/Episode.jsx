import React from 'react';
import { EpisodeContainer, EpisodeTask, EpisodeOpen } from './EpisodeStyles';
import ARROWOPEN from '../../../Assets/ARROW OPEN.jsx';
import ARROWCLOSE from '../../../Assets/ARROW CLOSE.jsx';

class Episode extends React.Component {

    constructor(props){
        super(props);
        this.state = { isOpened : false };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    };

    open()
    {
        if(!this.state.isOpened){
        this.setState({ isOpened: true })
        console.log("open");
        }
    };

    close()
    {
        this.setState({ isOpened: false })
        console.log("close");
    };

    render(){
    return (
    <EpisodeContainer>
        <EpisodeTask> <p>Episode Name</p>                
                { this.state.isOpened ? null: <div onClick={this.open}><ARROWOPEN/></div>}
                { this.state.isOpened ? <div onClick={this.close}><ARROWCLOSE/></div> :null}
        </EpisodeTask>
        { this.state.isOpened ?
        <EpisodeOpen>
            <table>
            <tbody>
                <tr>
                    <th>Planet Name</th>
                    <th>Rotation period</th> 
                    <th>Orbital period</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Surface wate</th>
                    <th>Population</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td> 
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
            </tbody>
            </table>                        
        </EpisodeOpen>
        :null }              
    </EpisodeContainer>        
    );
}
}

export default Episode;