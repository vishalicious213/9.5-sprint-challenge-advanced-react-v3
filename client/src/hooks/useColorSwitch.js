// import { useState, useEffect } from 'react';

const useColorSwitch = (color) => {
    const main = document.querySelector('.toggle');
    if (color === 1) {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleFive');
        main.classList.remove('toggleSix');
    } else if (color === 2) {
        console.log('theme 2: ', color);
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleFive');
        main.classList.remove('toggleSix');
        main.classList.add('toggleTwo');
    } else if (color === 3) {
        console.log('theme 3: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleFive');
        main.classList.remove('toggleSix');
        main.classList.add('toggleThree');
    } else if (color === 4) {
        console.log('theme 4: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFive');
        main.classList.remove('toggleSix');
        main.classList.add('toggleFour');
    } else if (color === 5) {
        console.log('theme 5: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleSix');
        main.classList.add('toggleFive');
    } else if (color === 6) {
        console.log('theme 6: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleFive');
        main.classList.add('toggleSix');
    } else {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.remove('toggleFive');
        main.classList.remove('toggleSix');
    }

    return main;
}

export default useColorSwitch;