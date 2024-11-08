

//Open t10 folder in your IDE/editor.
// Read the first name and last name values from the form and print them in the <p id="target"> (2p)

//remember to stop the default action of the form

//you can use attribute selectors in querySelector() to select the <input> elements

// example output: Your name is Luke Skywalker

const form = document.querySelector('#source');

const fn = document.querySelector('input[name=firstname]');

const ln = document.querySelector('input[name=lastname]');

const target = document.querySelector('#target');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    target.innerText = `Your name is ${fn.value + ' ' + ln.value}`;

})