import React, { useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import "./App.css";

const notify = (msg)=>{
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function Counter() {

  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('option1');

  const calculateOpacity = () => {
    const threshold = selectedOption === 'option1' ? 33 : 100;
    if (count === threshold) {
      notify("MashAllah you completed")
      return 1;
    }
    return count / threshold;
  };

  return (
    <>
      <div class="container my-4">
      <h3>Select any of them and then start</h3>
      <div className="radio-buttons my-4">
        <label>
          <input
            type="radio"
            value="option1"
            id="small"
            checked={selectedOption === 'option1'}
            onChange={() => setSelectedOption('option1')}
          />
          33
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            id="big"
            checked={selectedOption === 'option2'}
            onChange={() => setSelectedOption('option2')}
          />
          100
        </label>
      </div>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div id="hero">
              <img src="https://i.pinimg.com/736x/a4/09/0a/a4090af1ff117a47463af24ed841c439.jpg" style={{ opacity: calculateOpacity() }} alt="madina"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div id="counter">
              <h3 class="text-center">Counter</h3>
              <div class="d-flex justify-content-center my-5">
                <i
                  class="fa-solid fa-plus"
                  onClick={() => setCount(count + 1)}
                ></i>
              </div>
              <div id="count" class="fs-1 text-center">
                {count}
              </div>
              <div class="d-flex justify-content-center">
                <button
                  class="btn btn-outline-dark w-50 mt-4"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
