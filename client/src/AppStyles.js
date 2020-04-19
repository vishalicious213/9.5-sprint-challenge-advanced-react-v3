import styled from 'styled-components';

export const AppDiv = styled.div`

.main {

    // .App {
      text-align: center;
    // }

    .App-header {
      min-height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }

    @media screen and (max-width: 768px) {
      .App-header {
        font-size: calc(8px + 2vmin);
      }
    }

    @media screen and (max-width: 604px) {
      .App-header {
        font-size: calc(6px + 2vmin);
      }
    }

    /* GetPlayers.js */

    header, .top {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      background: #04043a;
    }

    .fifaLogo {
      width: 100%;
      align-self: center;
    }

    .womensCup {
      height: 80%;
      align-self: center;
      justify-self: center;
    }

    .title {
      margin-bottom: 0;
    }

    .subtitle {
      margin-bottom: .5rem;
    }

    button {
      border-radius: 1rem;
      margin-bottom: .5rem;
    }

    /* DisplayPlayers */

    .colHeader {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
      padding-top: .5rem;
      padding-bottom: .75rem;
      margin-top: 0;
      margin-bottom: 0;
      color: white;
      background: #213a8e;
      border-bottom: .025px solid lightslategray;
    }

    .container {
      border-bottom: 3rem solid #0156a3;
    }

    .playerEntry {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
      color: white;
      background: #0156a3;
      border-bottom: .025px solid lightslategray;
    }

    .playerEntry:hover {
      background: midnightblue;
    }


  /* ColorToggle 2 (PURPLE) */

  .toggleTwo {
    .top {
      color: white;
      background: darkmagenta;
    }

    .colHeader {
      color: white;
      background: mediumorchid;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid orchid;
    }

    .playerEntry {
      color: white;
      background: orchid;
      border-bottom: .025px solid thistle;
    }

    .playerEntry:hover {
      background: darkorchid;
    }

    .dark-mode {
      border: 3px solid black;
    }
  }


  /* ColorToggle 3 (PINK) */

  .toggleThree {
    .top {
      color: gainsboro;
      background: mediumvioletred;
    }

    .colHeader {
      color: white;
      background: deeppink;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid hotpink;
    }

    .playerEntry {
      color: white;
      background: hotpink;
      border-bottom: .025px solid lavender;
    }

    .playerEntry:hover {
      background: mediumvioletred;
    }
  }


  /* ColorToggle 4 (ORANGE) */

  .toggleFour {
    .top {
      color: gainsboro;
      background: orangered;
    }

    .colHeader {
      color: white;
      background: tomato;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid coral;
    }

    .playerEntry {
      color: white;
      background: coral;
      border-bottom: .025px solid lavender;
    }

    .playerEntry:hover {
      background: orangered;
    }
  }


  /* ColorToggle 5 (YELLOW) */

  .toggleFive {
    .App-header {
      color: black;
    }

    .top {
      color: black;
      background: orange;
    }

    .colHeader {
      color: black;
      background: gold;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid darkkhaki;
    }

    .playerEntry {
      color: black;
      background: darkkhaki;
      border-bottom: .025px solid lavender;
    }

    .playerEntry:hover {
      background: orange;
    }
  }


  /* ColorToggle 6 (GREEN) */

  .toggleSix {
    .top {
      color: white;
      background: darkgreen;
    }

    .colHeader {
      color: white;
      background: forestgreen;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid mediumseagreen;
    }

    .playerEntry {
      color: white;
      background: mediumseagreen;
      border-bottom: .025px solid lavender;
    }

    .playerEntry:hover {
      background: darkgreen;
    }
  }


  /* ColorToggle 7 (TURQUOISE) */

  .toggleSeven {
    .App-header {
      color: black;
    }

    .top {
      color: black;
      background: lightseagreen;
    }

    .colHeader {
      color: black;
      background: darkturquoise;
      border-bottom: .025px solid lavender;
    }

    .container {
      border-bottom: 3rem solid mediumturquoise;
    }

    .playerEntry {
      color: black;
      background: mediumturquoise;
      border-bottom: .025px solid lavender;
    }

    .playerEntry:hover {
      background: lightseagreen;
    }
  }
}
`