
//Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
//
//     Add the following HTML code to the element with id="target"

doc = document.querySelector('#target')

doc.innerHTML += '<li>First item</li>\n\<li>Second item</li>\n<li>Third item</li>\n'


// Add class my-item to the second list item

var second = doc.querySelectorAll('li')[1];

second.setAttribute('class', 'my-item')