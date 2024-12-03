// Start coding here
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import frownIcon from "./images/frown.svg"
import alertTriangleIcon from "./images/alert-triangle.svg"
import alertCircleIcon from "./images/alert-circle.svg"
import checkCircleIcon from "./images/check-circle.svg"

const icons = {
    frown: frownIcon,
    alertTriangle: alertTriangleIcon,
    alertCircle: alertCircleIcon,
    checkCircle: checkCircleIcon
}

function Alert(props) {
    const icon = icons[props.propsIcon]
    return (
        <div className="alert-box" css={css`
                width: 650px;
                height: 76px;
                gap: 0px;
                border-radius: 10px;
                opacity: 0px;
                background: ${props.propsColor};
                display: flex;
                align-items: center;
                padding-left: 20px;
            `}>
                <img src={icon} alt={props.propsIcon} />
            <div className="alert-text" css={css`
                width: 545px;
                height: 33px;
                top: 273px;
                left: 177px;
                gap: 0px;
                opacity: 0px;
                font-family: Kanit;
                font-size: 20px;
                font-weight: 700;
                line-height: 29.9px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                padding-left: 20px;

                `}>
                {props.propsText}
            </div>
        </div>
    )
}
export default Alert;
