import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5,
}

export default function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
}

export function UnRating() {

    let [value, setValue] = useState(0)

    let divStyle = {
        display: 'inline-block',
        marginLeft: '3px'
    }

    return (
        <div>
            <div style={divStyle} onClick={() => {
                setValue(1)
            }}><Star selected={value > 0}/></div>
            <div style={divStyle} onClick={() => {
                setValue(2)
            }}><Star selected={value > 1}/></div>
            <div style={divStyle} onClick={() => {
                setValue(3)
            }}><Star selected={value > 2}/></div>
            <div style={divStyle} onClick={() => {
                setValue(4)
            }}><Star selected={value > 3}/></div>
            <div style={divStyle} onClick={() => {
                setValue(5)
            }}><Star selected={value > 4}/></div>

        </div>

    )
}

type StarPropsType = {
    selected: boolean,
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span> <b> star </b></span>
    } else {
        return <span>star </span>
    }

}

