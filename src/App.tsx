import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <PageTitle title={"This is App Title One 1"}/>
            <PageTitle title={"This is App Title Two 2"}/>
            <Rating value={4}/>
            <Accordion title={'Menu'} value={[1, 2, 3, 4, 5, 'hello']} collapsed = {true}/>
            <Accordion title={'Settings'} value={[10, 9, 8, 7, 'six', 6, 5]} collapsed ={false}/>
            <Rating value={1}/>
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
