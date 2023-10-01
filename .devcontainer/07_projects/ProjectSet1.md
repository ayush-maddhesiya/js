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