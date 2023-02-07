const $ = document.querySelector.bind(document);
const div1 = $('#div1');
const div2 = $('#div2');

function btn1Clicked(){
    div1.className = 'special';
}

function btn2Clicked(){
    //div2.className = 'special';
    div1.className='';


}