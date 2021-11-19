import React from "react";
import Accordion from './components/Accordion'

const items = [
    { 
        title: 'what is reat?',
        content:'React is a front end JavaScript framework'
    },
    { 
        title: 'why use reat?',
        content:'React is a favorite JS library among engineers'
    },
    { 
        title: 'how do you use react?',
        content:'by creating a React component'
    }
]


export default () => {
    return(
        <div>
            <Accordion items={items}/>
        </div>
    )
};

 