import React from 'react';
import { AddContainer, AddInput, ArrowOpen } from './AddStyles';
import ARROWOPEN from '../../Assets/ARROW OPEN.jsx'


const Add = () => {
return (
    <AddContainer>        
        <AddInput> <p>Add Movie</p> 
            <ArrowOpen>
                <ARROWOPEN/>
            </ArrowOpen> 
        </AddInput>  
    </AddContainer>
);
}

export default Add;