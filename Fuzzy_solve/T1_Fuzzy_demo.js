

// set the dimensions and margins of the graph
var margin = {top: 3, right: 60, bottom: 60, left: 90},
width = 600,
height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#T1Fuzzy")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
"translate(" + margin.left + "," + margin.top + ")");


//Read the data
var data = [
    {'x':1,'y':0},
    {'x':3,'y':1},
    {'x':4,'y':1},
    {'x':6,'y':0}
];

var color = ['red'];

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([0,8])
.range([ 0, width ]);


// Add Y axis
var y = d3.scaleLinear()
.domain([0, 1.5])
.range([ height, 0 ]);


//x轴设置
var xAxis = d3.axisBottom(x).tickValues([0,1,2,3,4,5,6,7,8]);

//y轴设置
var yAxis = d3.axisLeft(y);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("stroke", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("stroke", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')

    .call(yAxis);

svg.append("g")
    .attr("class", "y axis")
    .append("text")
    .attr("class", "axis-label")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Geogria')
    .style('font-style', 'italic')
    .attr("x", -(margin.left)+40)
    .attr("y", height *0.05)
    // .text('μ(x)');
    .text('u');

svg.append("g")
    .append("text")
    .style('font-size', '22px')
    .style('font-style', 'italic')
    .style('font-family', 'Arial')
    .attr("x", -(margin.left) + 350)
    .attr("y", height*0.15)
    .text('Moderate');

svg.append("g")
    .append("text")
    .attr("class", "axis-label")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-style', 'italic')
    .style('font-family', 'Geogria')
    .attr("x", -(margin.left) + 700)
    .attr("y", height + 40)
    .text('x');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;

// Create the circle that travels along the curve of chart
var focus = svg
.append('g')
.append('circle')
.style("fill", "skyblue")
.attr("fill", "skyblue")
.attr('r', 8.5)
.style("opacity", 0.1)



// Create the text that travels along the curve of chart
var focusText = svg
.append('g')
.append('text')
.style("opacity", 0)
.attr("text-anchor", "left")
.attr("alignment-baseline", "middle")


let focusLine2x = svg
    .append('line')
    .style("stroke-dasharray","5,5")//dashed array for line
    .style("stroke", color);
let focusLine2y = svg
    .append('line')
    .style("stroke-dasharray","5,5")//dashed array for line
    .style("stroke", color);

// Add the line
svg
.append("path")
.datum(data)
.attr("fill", "none")
.attr("stroke", "black")
.attr("stroke-width", 3)
.attr("d", d3.line()
.x(function(d) { return x(d.x) })
.y(function(d) { return y(d.y) })
)

// Create a rect on top of the svg area: this rectangle recovers mouse position
svg
.append('rect')
.style("fill", "none")
.style("pointer-events", "all")
.attr('width', width)
.attr('height', height)
.on('mouseover', mouseover)
.on('mousemove', mousemove)
.on('mouseout', mouseout);


// What happens when the mouse move -> show the annotations at the right positions.
function mouseover() {
focus.style("opacity", 1)
focusText.style("opacity",1)
focusLine2x.style("opacity", 1)
focusLine2y.style("opacity", 1)
}

function mousemove() {
// recover coordinate we need
    let org_x0 = x.invert(d3.mouse(this)[0])
    let x0 = x.invert(d3.mouse(this)[0]).toFixed(2);
    let i = bisect(data, x0, 0.1);
    let y0=0;
    let org_y0 =0;

    if(1<= x0 && x0 <=3){
        y0 =0.5 * (x0 - 1);
        org_y0 = 0.5 * (org_x0 - 1);
    }else if(3< x0 && x0 <=4){
        y0 =1;
        org_y0 = 1;

    }else if(4<x0 && x0<=6){
        y0 =0.5*(6-x0);
        org_y0 = 0.5 * (6 -org_x0);

    }


    let selectedData_x = x0;
    let selectedData_y0 = org_y0.toFixed(2);



    let visible="hidden";

    focus
    .attr("cx", x(org_x0))
    .attr("cy", y(org_y0))

    focusText
    .html("x:" + selectedData_x + "," + "μ(x):" + selectedData_y0)
    .attr("x", x(org_x0)+25)
    .attr("y", y(org_y0)+45)
    .style('font-size', '22px')

    focusLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0))
        .attr("y2", y(0))

    focusLine2y
        .attr("x1",x(org_x0) )
        .attr("x2", x(0))
        .attr("y1",y(org_y0))
        .attr("y2", y(org_y0))

}
function mouseout() {
focus.style("opacity", 0)
focusText.style("opacity", 0)
    focusLine2x.style("opacity", 0)
    focusLine2y.style("opacity", 0)
}


