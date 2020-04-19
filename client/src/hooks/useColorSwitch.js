// import { useState, useEffect } from 'react';

const useColorSwitch = (color) => {
    const main = document.querySelector('.toggle');
    if (color === 1) {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
    } else if (color === 2) {
        console.log('theme 2: ', color);
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
        main.classList.add('toggleTwo');
    } else if (color === 3) {
        console.log('theme 3: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleFour');
        main.classList.add('toggleThree');
    } else if (color === 4) {
        console.log('theme 4: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.add('toggleFour')
    } else {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
        main.classList.remove('toggleFour');
    }

    return main;
}

export default useColorSwitch;