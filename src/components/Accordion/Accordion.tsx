import React from "react";

export default function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody value={props.value}/>
        </div>
    );
}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody(props: any) {

    let liArr = props.value.map((item: any) => <li>{item}</li>)
    return (
        <ul>{liArr}</ul>
    )
}