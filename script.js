const pickers = document.querySelectorAll('.picker input');
const checks = document.querySelectorAll('.switch input');
const target = document.getElementById('target');
const targetRed = document.getElementById('target-red');
const targetGreen = document.getElementById('target-green');
const targetBlue = document.getElementById('target-blue');
const mixButton = document.getElementById('mix-button');

function updateColor(picker) {
    const color = picker.dataset.color;
    picker.style.backgroundColor = color;

    const color1 = pickers[0].dataset.color;
    const color2 = pickers[1].dataset.color;
    const color3 = pickers[2].dataset.color;

    handleMix()
}



pickers.forEach(picker => {
    picker.addEventListener('change', () => {
        const color = picker.value;
        picker.dataset.color = color;
        updateColor(picker);
    });
});

checks.forEach(check => {
    check.addEventListener('change', handleMix)
})

function handleMix() {
    const enable1 = checks[0].checked
    const enable2 = checks[1].checked
    const enable3 = checks[2].checked
    const color1 = enable1 ? pickers[0].dataset.color : null;
    const color2 = enable2 ? pickers[1].dataset.color : null;
    const color3 = enable3 ? pickers[2].dataset.color : null;
    mixColors(color1, color2, color3)
}


function mixColors(color1, color2, color3) {

    let totalColors = 0

    // Replace this with your actual mixing logic
    // You can use libraries like chroma.js for advanced mixing
    const red1 = color1 ? parseInt(color1.substring(1, 3), 16) : 0;
    const green1 = color1 ? parseInt(color1.substring(3, 5), 16) : 0;
    const blue1 = color1 ? parseInt(color1.substring(5, 7), 16) : 0;
    if (color1) totalColors++;

    const red2 = color2 ? parseInt(color2.substring(1, 3), 16) : 0;
    const green2 = color2 ? parseInt(color2.substring(3, 5), 16) : 0;
    const blue2 = color2 ? parseInt(color2.substring(5, 7), 16) : 0;
    if (color2) totalColors++;


    const red3 = color3 ? parseInt(color3.substring(1, 3), 16) : 0;
    const green3 = color3 ? parseInt(color3.substring(3, 5), 16) : 0;
    const blue3 = color3 ? parseInt(color3.substring(5, 7), 16) : 0;
    if (color3) totalColors++;

    const redMixed = Math.floor((red1 + red2 + red3) / totalColors);
    const greenMixed = Math.floor((green1 + green2 + green3) / totalColors);
    const blueMixed = Math.floor((blue1 + blue2 + blue3) / totalColors);

    const mixedColor = `#${redMixed.toString(16).padStart(2, "0")}${greenMixed.toString(16).padStart(2, "0")}${blueMixed.toString(16).padStart(2, "0")}`;

    target.style.backgroundColor = totalColors > 0 ? mixedColor : '#ffffff';
    //   targetRed.style.backgroundColor = `#${redMixed.toString(16).padStart(2, "0")}0000`
    //   targetGreen.style.backgroundColor = `#00${greenMixed.toString(16).padStart(2, "0")}00`
    //   targetBlue.style.backgroundColor = `#0000${blueMixed.toString(16).padStart(2, "0")}`

    return mixedColor;
}
