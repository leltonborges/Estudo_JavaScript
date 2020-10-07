import React from 'react';
import Child from './Child'

export default props =>
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h2>Children</h2>
        <ul>
            <Child name="Paulo" surname={props.surname} />
            <Child {...props} />
            <Child name="Carla" {...props} /> {/*Sobrescreve a tab "name", o operador spread é prioridade*/}
            <Child {...props} name="Carla" />{/*Não sobrescreve a tab name, a tab "name" é prioridade*/}
        </ul>
    </div>