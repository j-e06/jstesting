'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


// Open t4 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
//
//     Add the following HTML code to the element with id="target".
//     Add the values from 'students' array to the <option> elements in a for-loop.

var doc = document.querySelector('#target')

for (let student of students) {
  let option = document.createElement('option')
  option.label = student['name'];
  option.value = student['id'];
  doc.appendChild(option);
}