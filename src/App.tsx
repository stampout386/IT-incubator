import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <PageTitle title={"This is App Title One 1"}/>
            <PageTitle title={"This is App Title Two 2"}/>
            <Rating value={5}/>
            <Accordion title = {'Menu'} value ={1}/>
            <Accordion title = {'Settings'} value ={2}/>
            <Rating value={1}/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
