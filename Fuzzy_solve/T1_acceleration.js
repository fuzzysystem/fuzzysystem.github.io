
var data = [{
    x: [0, 1, 2, 0],
    y: [0, 0, 1, 2],
    z: [0, 2, 0, 1],
    intensity: [0, 0.33, 0.66, 1],
    type: 'mesh3d',
    colorscale:'Jet'
}];


var layout = {
    title: 'Mt Bruno Elevation',
    autosize: false,
    width: 700,
    height: 700,
    margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
    },
    scene: {
        xaxis: {title: 'Distance'},
        yaxis: {title: 'Relative Speed'},
        zaxis: {title: 'Acceleration'}
    }
};

mydiv = document.getElementById('fig6')
Plotly.newPlot('fig6', data, layout);