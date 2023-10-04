#project 1
## Html file.
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <span class="button" id="black"></span>

      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```
## CSS file
```CSS

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
#purple {
  background: purple;
}
#black {
  background: rgb(10, 8, 8);
}
```

## JavaScript
```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (button)=>{
  // console.log(button);
  button.addEventListener( 'click',function (ee){
    // console.log(ee);
    // console.log(ee.target);

    if(ee.target.id == 'grey'){
      body.style.backgroundColor = ee.target.id;
    }
    if(ee.target.id == 'yellow'){
      body.style.backgroundColor = ee.target.id;
    }
    if(ee.target.id == 'white'){
      body.style.backgroundColor = ee.target.id;
    }
    if(ee.target.id == 'blue'){
      body.style.backgroundColor = ee.target.id;
    }
    if(ee.target.id == 'purple'){
      body.style.backgroundColor = ee.target.id;
    }
    if(ee.target.id == 'black'){
      body.style.backgroundColor = ee.target.id;
    }
  })
});

// buttons.forEach( function (butt){
//   console.log(butt)
// })
```

## Project 2
## Html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1 id = "font" >BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>
```
## Css
```css
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}
#font{
  font-family: 'Roboto Slab', serif;
  font-family: 'Young Serif', serif;
  color: aqua;
}

```

## javaSrcipt

```javascript
const from = document.querySelector("form");

from.addEventListener('submit',function (e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  //now cheak the that value enter is right or not
  if(height === "" || height <= 0 || isNaN(height)){
    results.innerHTML = `Please give a valid Height ${height}`;
  }else if(weight === "" || weight <= 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //print the answer which BMI

    if(bmi <= 18.6){
    results.innerHTML = `<span>You are Under Weigth and you BMI is : ${bmi}</span>`

    }else if(bmi > 18.6 && bmi < 24.9){
    results.innerHTML = `<span>You are Normal  Weigth and you BMI is : ${bmi}</span>`
    }
    else{
    results.innerHTML = `<span>You are Over Weigth and you BMI is : ${bmi}</span>`

    }
    // results.innerHTML = `<span>${bmi}</span>`
  }

});
```

## project 4 
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 5 Key tracker

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
`;
});

```