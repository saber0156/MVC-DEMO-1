import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', ()=>{
    $square.toggleClass('active')
    // .toggleClass()  如果有就删除，没有就加上
})