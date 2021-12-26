import React from 'react';
import './App.css';
import Rating, {UnRating} from "./components/Rating/Rating";
import Accordion, {UnAccordion} from "./components/Accordion/Accordion";
import TodoList from "./TodoList";
import {OnOff} from "./OnOff/OnOff";

export type TodoListArrayType = {
    id: number,
    isDone: boolean,
    title: string
}

function App() {
    const todoListTitle_1: string = "what a want learn";
    const todoListTitle_2: string = "what a want bye";

    const todoListDate_1: Array<TodoListArrayType> = [
        {id: 1, isDone: true, title: 'HTML'},
        {id: 2, isDone: false, title: 'CSS'},
        {id: 3, isDone: true, title: 'CSS'},
    ]

    const todoListDate_2: Array<TodoListArrayType> = [
        {id: 1, isDone: true, title: 'Milk'},
        {id: 2, isDone: false, title: 'Bread'},
        {id: 3, isDone: false, title: 'Meat'},
    ]
    return (
        <div className={'App'}>
            <Rating value={5}/>
            {/*<Accordion title={'Menu'} value={[1, 2, 3, 4, 5, 'hello']} collapsed={true}/>*/}
            {/*<Accordion title={'Settings'} value={[10, 9, 8, 7, 'six', 6, 5]} collapsed={true}/>*/}
            <OnOff/>
            <UnAccordion title={'Menu'} value={['Home', 'About', 'Product', 'Blog', 'Contact']}/>
            <UnAccordion title={'Settings'} value={['Video', 'Audio', 'Game', 'Options']}/>

            <UnRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
