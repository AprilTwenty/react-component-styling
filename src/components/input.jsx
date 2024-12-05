/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

function Input() {
    return (
        <form>
    <div className="inputBox" css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: flex-start;
        width: 370px;
        height: 354px;
        border-radius: 10px;
    `}>

        <div className="emailInput" css={css`
            display: flex;
            flex-direction: column;
            width: 370px;
            height: 128px;
            border-radius: 10px;
        `}>
            <label className="email" css={css`
            width: 132px;
            height: 30px;
            font-family: Kanit;
            font-size: 20px;
            font-weight: 700;
            line-height: 29.9px;
            text-align: left;
            color: #525252;
            `}>Email Address</label>
            <input className="email" type="text" placeholder="Enter email address here" css={css`
                padding: 15px 0px 15px 15px;
                width: 370px;
                height: 50px;
                border-radius: 10px;
                font-family: Kanit;
                font-size: 20px;
                font-weight: 300;
                line-height: 29.9px;
                border: 1px solid #A8A6A6;
                outline: none;
                &::placeholder { 
                color: #DFDFDF; 
                };
                &:hover {
                    border-color: #0B82C5;
                };
                
                &:focus {
                    border-color: #7F099D;
                };
                /*
                &.error {
                    border-color: #C50B0B;
                };
                */
                `} />
            <p className="=helpingText" css={css`
                width: 249px;
                height: 30px;
                font-family: Kanit;
                font-size: 20px;
                font-weight: 300;
                line-height: 29.9px;
                text-align: left;
                color: #525252;

            `}>
                We'll never share your email.
            </p>
        </div>
        <div className="usernameInput" css={css`
            display: flex;
            flex-direction: column;
            width: 370px;
            height: 128px;
            border-radius: 10px;
            margin-top: 50px;
        `}>
            <label className="username" css={css`
                width: 132px;
                height: 30px;
                font-family: Kanit;
                font-size: 20px;
                font-weight: 700;
                line-height: 29.9px;
                text-align: left;
                color: #525252;
            `}>Username</label>
            <input className="username" type="text" placeholder="Enter username here" css={css`
                padding-left: 15px;
                width: 370px;
                height: 50px;
                border-radius: 10px;
                font-family: Kanit;
                font-size: 20px;
                font-weight: 300;
                line-height: 29.9px;
                border: 1px solid #A8A6A6;
                outline: none;
                &::placeholder { 
                color: #DFDFDF; 
                };
                &:hover {
                    border-color: #0B82C5;
                };
                &:focus {
                    border-color: #7F099D;
                };
                &.error {
                    border-color: #C50B0B;
                };
                `} />


        </div>
    </div>


</form>

    )
}

export default Input;
