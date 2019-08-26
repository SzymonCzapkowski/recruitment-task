import styled from 'styled-components';

export const AddContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, transparent 33%, #FFFFFF 0%);
    background-position: top;
    background-size: 35px 2px;
    background-repeat: repeat-x;
    flex-wrap: wrap;    
`
export const AddStrap = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
    border-radius: 4px;
    width: 790px;
    height: 50px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    color: #00687F;
    display: flex;
    justify-content: space-between;

    p{
        margin: auto 0 auto 20px;    
    }

    svg{
        margin: 16px 0 16px;        
    }

    svg:hover{
        cursor: pointer;
    }

    div{
        width: 18px;
        height: 18px;
        margin-right:15px;
    }
`

export const AddOpen = styled.div`    
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    height: auto;
    width: 790px;   

    p{        
        width: 58px;
        height: 15px;      
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;      
        color: #555555;
    }

    .addDivContainer{
        display: flex;  
        flex-wrap: wrap;
        justify-content: center;               
    }

    .addInput{
        width: 539px;
        height: 45px;             
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;        
        color: #C4C4C4;
        border-width:0px 0px 1px 0px;
        border-style:solid;
        border-color: #999999;
    } 
    
    button{
        position: absolute;
        transform:translateX(-33px) translateY(10px);
        background:transparent;
        border:none;
    }
`
export const AddButton = styled.div`
    width: 160px;
    height: 33px;
    background: #1BA1BE;
    border-radius: 4px;
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;    
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;
    margin: 32px 0 30px 0;
    float: right;  
`