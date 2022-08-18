const xcoords = [];
const ycoords = [];
generateParabola.apply(this, xcoords, ycoords);

function generateParabola(){
    console.log("hi")
    var angle = document.getElementById("launch").value;
    console.log(angle)
    for (let t = 0; t < 10; t++) {
        xcoords[t-1]=[5*t*Math.cos(45)]
      }
    console.log(xcoords)
    for (let t = 0; t < 10; t++) {
        ycoords[t-1]=[(15*t)-4.9*t**2]
      }
    console.log(ycoords)
}

var xValues = [];
var yValues = [];
generateData("50*x*Math.cos(45)", 0, 10, 0.5);

new Chart("myChart", {
type: "line",
data: {
    labels: xValues,
    datasets: [{
    fill: false,
    pointRadius: 2,
    borderColor: "rgba(0,0,255,0.5)",
    data: yValues
    }]
},
    
options: {
    legend: {display: false},
    title: {
    display: true,
    text: "X-coordinate of projectile graphed against time",
    fontSize: 16
    }
}
});
function generateData(value, i1, i2, step = 1) {
for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
}
}

var xValues2 = [];
console.log(xValues2)
console.log(xValues2)
var yValues2 = [];
generateData2("50*x*Math.sin(45)-4.9*x**2", 0, 10, 0.5);

new Chart("myChart2", {
type: "line",
data: {
    labels: xValues2,
    datasets: [{
    fill: false,
    pointRadius: 2,
    borderColor: "rgba(0,0,255,0.5)",
    data: yValues2
    }]
},
    
options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Y-coordinate of projectile graphed against time",
    fontSize: 16
    }
}
});
function generateData2(value, i1, i2, step = 1) {
for (let x = i1; x <= i2; x += step) {
    yValues2.push(eval(value));
    xValues2.push(x);
}
}

new Chart("myChart3", {
type: "line",

data: {
    labels: yValues,
    datasets: [{
    fill: false,
    pointRadius: 2,
    borderColor: "rgba(0,0,255,0.5)",
    data: yValues2
    }]
},
    
options: {
    legend: {display: false},
    title: {
    display: true,
    text: "X-coordinates of projectile plotted against Y-coordinates",
    fontSize: 16
    }
}
});

document.getElementById("dataList").innerHTML=xValues