import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should be able to run tests', () => {
        expect(1 + 2).toEqual(3);
});


// it('create list', () => {
//   var json = [{
//       name: 'Salad',
//       choices: [{
//           name: 'Santa Fe'
//         },
//         {
//           name: 'Greek'
//         },
//         {
//           name: 'Asian'
//         },
//       ],
//       related: [{
//           name: 'Dressing',
//           choices: [{
//               name: 'Italian'
//             },
//             {
//               name: 'Blue Cheese'
//             },
//             {
//               name: 'Ranch'
//             },
//           ]
//         }
//       ]
//     }
//   ];
//         _createList(json, 0, Math.random().toFixed(6)*1000000);
//         expect(_createList).toBeCalledTimes(1);
// });

it('Should capture checkbox ticked correctly onChange', function(){
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
})
