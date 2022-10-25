import { basename } from 'path';
import React from 'react';
import './App.css';

let name :any;
let age:number | string;
let isStudent:boolean;
let hobbies: string[];
let role: [number, string]


let printName: (name: string) => string;

// function printName(name: string)
// {
//   console.log(name);
// }

// printName("takano");

type X = {
  name:string;
}

interface Person extends X {
  name:string;
  age?:number;
}

let person: Person;

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
