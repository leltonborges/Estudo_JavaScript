import React from 'react';
import ReactDom from 'react-dom';

// import Primary from './components/Primary'

// import GodMorning from './components/GoodMorning'

// import { GoodAfternoon, GoodEvening } from './components/Multi';
// import mult, { GoodEvening } from './components/Multi';

import Greeding from './components/Greenting'

// import Father from './components/Father'
import Father from './components/Father2'
import Child from './components/Child'

ReactDom.render(
    <main>
        <Greeding type="Good Morning" name="João" />
        <Father name="José" surname="Lopes">
            <Child name="Luan" surname="Alves" />
            <Child name="Bob" surname="Souza" />
            <Child name="Maria" />
            <Child name="Lilia" />
            <Child name="Raquel" />
            <Child name="José" />
        </Father>
    </main>
    , document.getElementById('root'))