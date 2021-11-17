import React from "react";

type AccordionPropsType = {
    title: string,
    value: object,
    collapsed: boolean
}

export default function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody value={props.value}/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        );
    }

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