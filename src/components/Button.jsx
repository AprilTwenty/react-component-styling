// Start coding here
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";

function Button(props) {
    return (
        <button 
            css={css`
                padding: 0px 16px 0px 16px;
                background-color: ${props.BackgroundColor};
                border: none;
                border-radius:4px;
                width: 171px;
                height: 50px;
                color: white;
                gap: 8px
            `}>Button
            </button>
    )
}

export default Button;