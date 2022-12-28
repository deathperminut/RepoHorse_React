import React from 'react';
/* LOADING */
import DotLoader from "react-spinners/DotLoader";
import './preloader.css';


export default function Preloader() {
  return (
    <div id="preloader-wrapper">
    <div class="w-auto d-flex flex-column justify-content-center align-items-center align-self-center">
      <div id="preloader" class="preloader"></div>
      <DotLoader
            color={"#FF9300"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      <div class="txt-loading">
        <span data-text-preloader="P" class="letters-loading">
          P
        </span>
        <span data-text-preloader="R" class="letters-loading">
          R
        </span>
        <span data-text-preloader="O" class="letters-loading">
          O
        </span>
        <span data-text-preloader="C" class="letters-loading">
          C
        </span>
        <span data-text-preloader="E" class="letters-loading">
          E
        </span>
        <span data-text-preloader="S" class="letters-loading">
          S
        </span>
        <span data-text-preloader="A" class="letters-loading">
          A
        </span>
        <span data-text-preloader="N" class="letters-loading">
          N
        </span>
        <span data-text-preloader="D" class="letters-loading">
          D
        </span>
        <span data-text-preloader="O" class="letters-loading">
          O
        </span>
      </div>
    </div>
  </div>

  )
}
