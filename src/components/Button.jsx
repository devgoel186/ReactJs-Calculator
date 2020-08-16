import React from "react"
import "./styles/Button.css"

const isOperator = (val) => {
    return (!isNaN(val) || val === "." || val === "=")
}

const isEqualSign = (val) => {
    return (val === "=")
}

export const Button = (props) => (
    <div
        className={`button-wrapper ${isOperator(props.children) ? (isEqualSign(props.children) ? "equalOperator" : null) : "otherOperator"}`}
        onClick = {() => (props.handleClick(props.children))}
        >
        {props.children}
    </div>
)
