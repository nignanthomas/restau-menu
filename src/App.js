import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';


var json = [{
    name: 'Salad',
    choices: [{
        name: 'Santa Fe'
      },
      {
        name: 'Greek'
      },
      {
        name: 'Asian'
      },
    ],
    related: [{
        name: 'Dressing',
        choices: [{
            name: 'Italian'
          },
          {
            name: 'Blue Cheese'
          },
          {
            name: 'Ranch'
          },
        ]
      },
      {
        name: 'Bread',
        choices: [{
            name: 'Italian'
          },
          {
            name: 'Flat'
          },
          {
            name: 'Sourdough'
          },
        ]
      }
    ]
  },
  {
    name: 'Entree',
    choices: [{
        name: 'Steak'
      },
      {
        name: 'Salmon'
      },
      {
        name: 'Rice'
      },
    ],
    related: []
  },
  {
    name: 'Soup',
    choices: [{
        name: 'Minestrone'
      },
      {
        name: 'Hot and sour'
      },
      {
        name: 'Miso'
      },
    ],
    related: [{
      name: 'Bread',
      choices: [{
        name: 'Breadsticks'
      }]
    }]
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }



  _createList(item, margin, uid){
      return item.map((el,i)=>{
          uid = uid * (i+1);
          return	<div key={i} style={{marginLeft: margin}}>
                     <input type='checkbox' data-toggle="collapse" data-target={"#" + uid} name={el.name} value={el.name}/>
                      {el.name}
                     <div id={uid} className="collapse">
                         {el.choices && el.choices.length ? this._createList(el.choices, 10, Math.random().toFixed(6)*1000000) : null}

                         {el.related && el.related.length ? <p>You might also want:</p> : null}
                         {el.related && el.related.length ? this._createList(el.related, 10, Math.random().toFixed(6)*1000000) : null}
                     </div>
                 </div>
      })
  }

  render() {
    return (
      <div>
        {this._createList(json, 0, Math.random().toFixed(6)*1000000)}
      </div>
    )
  }
}


export default App;
