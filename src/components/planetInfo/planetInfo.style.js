import styled from "styled-components";

const StyledPlanetInfo = styled.div`
border-top: 1px solid #979797;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 111px;
    height: 111px;
    margin-top: 80px;

}
h1{
    margin-top: 70px;
}
p{
    
    font-size:13px ;
    padding: 25px;
    font-family: "League Spartan", sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
}
`

export {StyledPlanetInfo}
