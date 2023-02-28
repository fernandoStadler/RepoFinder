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
export const Info = styled.span`
    display: flex;
    min-height:50px ;
    max-width: 100%;
    text-align: center;
    padding: 10px;
    color: #fff;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
    background-color:#0d2636 ;
    border-radius: 4px;
` ;
export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style:none;

    li{
        display: flex;
        padding:10px 15px;

        & + li{
            margin-top: 12px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius:50%;
            border:2px solid #0D2636
        }

        div{
            flex: 1;
            margin-left: 12px;
        }

        p{
            margin-top: 10px;
            font-size: 12px;
            color:#000;
        }

        strong{
            font-size:15px;
            a{
                text-decoration: none;
                color:#222;
                transition:0.3s;
                &:hover{
                    color: #0071db
                }
            }

            span{
                background: #222;
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                
                font-weight: 600;
                padding: 5px 7px;
                margin-left: 10px;
        }
    }
    `;