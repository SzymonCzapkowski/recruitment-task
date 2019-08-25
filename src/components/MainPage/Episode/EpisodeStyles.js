import styled from 'styled-components';

export const EpisodeContainer = styled.div `
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    
`
export const EpisodeTask = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
    border-radius: 4px;
    width: 80vw;
    height: 50px;
    font-weight: bold;
    font-size: 16px;
    color: #00687F;
    margin-top: 4vh;
    display: flex;
    justify-content: space-between;

    p{
        transform: translateX(20px);     
    }

    svg{
        margin: 16px 0 16px;
        transform: translateX(-20px);
    }
`
export const EpisodeOpen = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    height: 30vh;
    width: 80vw;  
 

    /* p{        
        width: 58px;
        height: 15px;      
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        
        color: #555555;
    }

    .addDivContainer{
        display: flex;  
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px;   
       
    }

    .addInput{
        width: 50vw;
        height: 45px;     
        top: 1012px;
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #C4C4C4;
        border-width:0px 0px 1px 0px;
        border-style:solid;
        border-color: #999999;
    } 
    
    button{
        position: absolute;
        transform:translateX(-33px) translateY(10px)
    } */
`
