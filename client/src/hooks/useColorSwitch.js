// import { useState, useEffect } from 'react';

const useColorSwitch = (color) => {
    const main = document.querySelector('.toggle');
    if (color === 1) {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
    } else if (color === 2) {
        console.log('theme 2: ', color);
        main.classList.remove('toggleThree');
        main.classList.add('toggleTwo');
    } else if (color === 3) {
        console.log('theme 3: ', color);
        main.classList.remove('toggleTwo');
        main.classList.add('toggleThree')
    } else {
        console.log('theme 1: ', color);
        main.classList.remove('toggleTwo');
        main.classList.remove('toggleThree');
    }

    return main;
}

export default useColorSwitch;