import React from 'react';

function sleep(ms) { // Sleep function that "sleeps" given ms amount
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) { // Random function 0-max  ex. (0-255)
  max = max - 1;
  return Math.floor(Math.random() * max);
}

function clearStats() { // Sets stats to zero
  document.getElementById("statsFilled").textContent = "0";
  document.getElementById("statsEmptied").textContent = "0";
  document.getElementById("statsEmpty").textContent = "Randomly emptied ones: 0";
  document.getElementById("statsMissed").textContent = "Randomly missed ones: 0";
}

function addFilledPixel() { // Adds 1 to filled pixels
  var filledPixels = parseInt(document.getElementById("statsFilled").textContent);
  document.getElementById("statsFilled").textContent = filledPixels + 1;
}

function addEmptiedPixel() { // Adds 1 to emptied pixels
  var emptiedPixels = parseInt(document.getElementById("statsEmptied").textContent);
  document.getElementById("statsEmptied").textContent = emptiedPixels + 1;
}

function changeColor(id) { // Changes the color with a new color and sets it as active
  var newColor = document.getElementById(id).style.backgroundColor;
  document.getElementById("color").style.backgroundColor = newColor;
}

function changePixel(id) { // Changes the chosen pixels color by the current color
  var pixel = document.getElementById(id);
  var currentColor = document.getElementById("color").style.backgroundColor;
  addFilledPixel();
  pixel.style.backgroundColor = currentColor;
}

function stop() { // Stop function
  document.getElementById("status").innerHTML = "Status: Stopping";
}

async function clearGrid() { // Clears the whole grid
  var pixels = document.getElementsByClassName("grid");
  document.getElementById("status").innerHTML = "Status: Clearing";

  for (let index = 0; index < pixels.length; index++) {
    var status = document.getElementById("status").textContent;
    var pixelColor = pixels[index].style.backgroundColor;

    if (status !== "Status: Stopping") {
      if (pixelColor !== "white" || pixelColor !== "") { // if colour is white skips to next and saves performance
        pixels[index].style.backgroundColor = "white";
        addEmptiedPixel();
        //await sleep(0);
      }
    }
  }
}

async function fillGrid() { // Fills the whole grid with chosen color
  var pixels = document.getElementsByClassName("grid");
  var currentColor = document.getElementById("color").style.backgroundColor;
  document.getElementById("status").innerHTML = "Status: Filling with " + currentColor;

  for (let index = 0; index < pixels.length; index++) {
    var status = document.getElementById("status").textContent;
    var pixelColor = pixels[index].style.backgroundColor;

    if (status !== "Status: Stopping") {
      if (pixelColor !== currentColor) { // if colour is chosen color skips to next and saves performance
        pixels[index].style.backgroundColor = currentColor;
        addFilledPixel();
        await sleep(0.5);
      }
    }
  }
}

async function fillEmptySpots() { // Fills all the empty pixels with current color
  var pixels = document.getElementsByClassName("grid");
  var currentColor = document.getElementById("color").style.backgroundColor;
  document.getElementById("status").innerHTML = "Status: Filling empty pixels with " + currentColor;

  for (let index = 0; index < pixels.length; index++) {
    var color = pixels[index].style.backgroundColor;
    var status = document.getElementById("status").textContent;

    if (status !== "Status: Stopping") {
      if (color === "white" || color === "") { // checks if pixel is empty
        pixels[index].style.backgroundColor = currentColor;
        addFilledPixel();
        await sleep(1);
      }
    }
  }
}

async function emptyRandom() { // Empties pixels randomly till none left
  var pixels = document.getElementsByClassName("grid");
  var lenght = pixels.length;

  var missed = 0; var emptied = 0;
  document.getElementById("status").innerHTML = "Status: Emptying random"

  for (let index = 0; index < pixels.length; index++) {
    var status = document.getElementById("status").textContent;
    var random = getRandomInt(lenght); // get random number between 0 and pixel lenght

    var color = pixels[random].style.backgroundColor; // chosen pixels color

    if (status !== "Status: Stopping") {
      if (color !== "white" || color !== "") { // check if pixel is empty
        pixels[random].style.backgroundColor = "white";
        emptied++; document.getElementById("statsEmpty").innerHTML = "Randomly emptied ones: " + emptied;
        addEmptiedPixel();
        await sleep(1);
      } else { // set index back by one and try again
        index--;
        missed++; document.getElementById("statsMissed").innerHTML = "Randomly missed ones: " + missed;
      }
    }
  }
}

async function fillRandom() { // fill grid with random colors
  var pixels = document.getElementsByClassName("grid");
  var colors = document.getElementsByClassName("colorBox");
  document.getElementById("status").innerHTML = "Status: Random filling";

  for (let index = 0; index < pixels.length; index++) {
    var status = document.getElementById("status").textContent;
    var colorId = "color" + getRandomInt(colors.length); // get random number between 0 - colors lenght

    if (status !== "Status: Stopping") {
      var color = document.getElementById(colorId).style.backgroundColor;
      pixels[index].style.backgroundColor = color;
      addFilledPixel();
      await sleep(1);
    }
  }
}

async function fillWithCurrentRandom() { // Fill grid randomly with current color
  var pixels = document.getElementsByClassName("grid");
  var lenght = pixels.length;
  document.getElementById("status").innerHTML = "Status: Random filling";
  var howMany = getRandomInt(lenght); // get random number between 0 - pixels lenght that is max amount of filled pixels

  for (let index = 0; index < howMany; index++) {
    var status = document.getElementById("status").textContent;
    var id = getRandomInt(lenght); // get random number between 0 - pixels lenght

    if (status !== "Status: Stopping") {
      var currentColor = document.getElementById("color").style.backgroundColor;
      pixels[id].style.backgroundColor = currentColor;
      addFilledPixel();
      await sleep(1);
    }
  }
}

async function fillEmptySpotsRandom() { // Fill empty pixels randomly with random colors
  var pixels = document.getElementsByClassName("grid");
  var colors = document.getElementsByClassName("colorBox");
  document.getElementById("status").innerHTML = "Status: Filling empty pixels randomly";

  for (let index = 0; index < pixels.length; index++) {
    var status = document.getElementById("status").textContent;
    var color = pixels[index].style.backgroundColor;

    if (status !== "Status: Stopping") {
      if (color === "white" || color === "") {
        var id = "color" + getRandomInt(colors.length);
        var newColor = document.getElementById(id).style.backgroundColor;
        pixels[index].style.backgroundColor = newColor;
        addFilledPixel();
        await sleep(1);
      }
    }
  }
}

function makeColors() { // Makes color pixels. Colors are stored by names. Full list of 140 names: colors.js
  var colors = ["Aqua", "Beige", "Black", "Blue", "Coral", "Crimson",
    "DarkBlue", "DarkGrey", "DarkOrange", "DarkSalmon", "DarkGreen", "DarkRed",
    "Grey", "Green", "White", "Yellow"];

  var totalPixels = 0;
  var colorPixels = [];

  for (let index = 0; index < colors.length; index++) {
    var id = "color" + totalPixels++;
    var color = colors[index];
    colorPixels.push({ id: id, color: color }); // create and array that has names for values for easier calling
  }

  return colorPixels.map(item => (
    <div className="colorBox" id={item.id} style={{ backgroundColor: item.color }} onClick={() => changeColor(item.id)} />
  ))
}

function makeGrid() { // Makes the grid and empty pixels
  var pixels = [];
  var pixelAmount = 2100; // how many pixels to create

  for (let index = 0; index < pixelAmount; index++) {
    pixels.push({ id: index, class: "grid" }); // create and array that has names for values for easier calling
  }

  return pixels.map(item => (
    <div className={item.class} id={item.id} onClick={() => changePixel(item.id)} />
  ))
}

function App() { // "main" function. Creates the html and calls different functions
  return (
    <div>
      <h2 id="status">Status:</h2>
      <h1 id="title">
        <h1 id="c">C</h1>
        <h1 id="O">O</h1>
        <h1 id="l">L</h1>
        <h1 id="o">O</h1>
        <h1 id="r">R</h1>
        <h1 id="y">Y</h1>
      </h1>

      <div className="colorContainer">
        <h2 className="colorHeader">Current color:</h2>
        <div className="colorBox" id="color" />
        <div className="colorOuter">
          {makeColors()}
        </div>
      </div>

      <div className="gridBox">
        <button onClick={() => clearGrid()}>Clear pixels</button>
        <button onClick={() => fillGrid()}>Fill all pixels</button>
        <button onClick={() => fillEmptySpots()}>Fill empty pixels</button>
        <button onClick={() => fillRandom()}>Randomize</button>
        <button onClick={() => emptyRandom()}>Empty random</button>
        <button onClick={() => fillWithCurrentRandom()}>Randomize with current</button>
        <button onClick={() => fillEmptySpotsRandom()}>Randomize empty pixels</button>
        <button onClick={() => stop()}>Stop</button>
        <div className="gridOuterLayer">
          {makeGrid()}
        </div>
      </div>

      <h1>Stats:</h1>
      <h2 className="statsFilled" style={{ marginLeft: "650px" }}>Filled pixels:</h2>
      <h2 className="statsFilled" style={{ marginLeft: "10px" }} id="statsFilled">0</h2>
      <h2 className="statsEmptied" style={{ marginLeft: "650px" }}>Emptied pixels:</h2>
      <h2 className="statsEmptied" style={{ marginLeft: "10px" }} id="statsEmptied">0</h2>
      <h2 id="statsEmpty">Randomly emptied ones: 0</h2>
      <h2 id="statsMissed">Randomly missed ones: 0</h2>
      <button style={{ marginLeft: "700px" }} onClick={() => clearStats()}>Clear stats</button>
    </div>
  );
}

export default App;
