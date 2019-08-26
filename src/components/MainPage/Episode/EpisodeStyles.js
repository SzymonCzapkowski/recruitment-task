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
    width: 790px;
    height: 50px;
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
export const EpisodeOpen = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    height: auto;
    width: 790px;
`
