'use strict'

const $ = document.querySelector.bind(document);


const mainDiv = $('#main');
const todoTextInput = $('#todoContent');
const todoAddButton = $('#todoButton');

function addTodo(){
    var d = document.createElement('div'); // create div, d
    mainDiv.appendChild( d ); // add d to place
    d.innerHTML = todoTextInput.value; // add text to d
    d.classList.add('todo');        // add class to d
    d.addEventListener('click', function(){   //add onclick to do
        d.className = 'completed';
    }); // add onclick to d

    todoTextInput.value='';
    }

    todoAddButton.addEventListener('click',addTodo);

