import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Loading = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

` ;
export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
    color: #000;
` ;

export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
 
` ;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 150px;
        border-radius: 20px;
        margin: 20px 0;
    }
    h1{
        font-size:30px;
        color:#0d2636
    }
    p{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
` ;