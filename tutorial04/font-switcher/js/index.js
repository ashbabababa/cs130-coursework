// let originalFont - 1.4
//
// const makeBigger = () => {
//    originalFont = originalFont +0.3
//    document.querySelector('.content').style.fontSize = originalFont + 'em'
// };

const makeBigger = () => {
    document.querySelector('.content').style.fontSize = '3.4em';
    document.querySelector('.content').style.background = 'hotpink';
    document.querySelector('.content').innerHTML = 'Hello'

};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector('.content').style.fontSize = '1.4em';
   document.querySelector('.content').style.background = 'white';
   document.querySelector('.content').innerHTML = 'Goodbye'


};



document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
