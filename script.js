

function updateColor(picker) {
  const color = picker.dataset.color;
  picker.style.backgroundColor = color;

  const color1 = pickers[0].dataset.color;
  const color2 = pickers[1].dataset.color;
  const color3 = pickers[2].dataset.color;

  const mixedColor = mixColors(color1, color2, color3);
}

const pickers = document.querySelectorAll('.picker input');
const target = document.getElementById('target');
const targetRed = document.getElementById('target-red');
const targetGreen = document.getElementById('target-green');
const targetBlue = document.getElementById('target-blue');
const mixButton = document.getElementById('mix-button');

pickers.forEach(picker => {
  picker.addEventListener('change', () => {
    const color = picker.value;
    picker.dataset.color = color;
    updateColor(picker);
  });
});


// mixButton.addEventListener('click', () => {
//   const color1 = pickers[0].dataset.color;
//   const color2 = pickers[1].dataset.color;
//   const color3 = pickers[2].dataset.color;

//   // Implement your mixing logic here. This could be a simple average or something more advanced
//   const mixedColor = mixColors(color1, color2, color3);


//   console.log(mixedColor)
// });

function mixColors(color1, color2, color3) {
  // Replace this with your actual mixing logic
  // You can use libraries like chroma.js for advanced mixing
  const red1 =   parseInt(color1.substring(1, 3), 16);
  const green1 = parseInt(color1.substring(3, 5), 16);
  const blue1 =  parseInt(color1.substring(5, 7), 16);

  const red2 =   parseInt(color2.substring(1, 3), 16);
  const green2 = parseInt(color2.substring(3, 5), 16);
  const blue2 =  parseInt(color2.substring(5, 7), 16);

  const red3 =   parseInt(color3.substring(1, 3), 16);
  const green3 = parseInt(color3.substring(3, 5), 16);
  const blue3 =  parseInt(color3.substring(5, 7), 16);

  const redMixed = Math.floor((red1 + red2 + red3) / 3);
  const greenMixed = Math.floor((green1 + green2 + green3) / 3);
  const blueMixed = Math.floor((blue1 + blue2 + blue3) / 3);

  const mixedColor = `#${redMixed.toString(16).padStart(2, "0")}${greenMixed.toString(16).padStart(2, "0")}${blueMixed.toString(16).padStart(2, "0")}`;

  target.style.backgroundColor = mixedColor;
//   targetRed.style.backgroundColor = `#${redMixed.toString(16).padStart(2, "0")}0000`
//   targetGreen.style.backgroundColor = `#00${greenMixed.toString(16).padStart(2, "0")}00`
//   targetBlue.style.backgroundColor = `#0000${blueMixed.toString(16).padStart(2, "0")}`

  return mixedColor;
}
