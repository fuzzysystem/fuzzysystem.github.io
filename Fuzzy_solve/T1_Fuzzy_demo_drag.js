

// set the dimensions and margins of the graph
var margin = {top: 3, right: 90, bottom: 60, left: 90},
    width = 400,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#T1Fuzzy")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;


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
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("stroke", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);

svg.append("g")
    .attr("class", "y axis")
    .append("text")
    .attr("class", "axis-label")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', "Times New Roman")
    .style('font-style', 'italic')
    .attr("x", -(margin.left)+5)
    .attr("y", height *0.05)
    .text('μ(x)');

svg.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 250)
    .attr("y", height*0.2)
    .text('Moderate');

svg.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 500)
    .attr("y", height + 40)
    .text('x');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


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



var focusLabel =
    svg
    .append('g')
    .append('text')
    .attr("text-anchor", "left")
    .attr("alignment-baseline", "middle")
    .style('font-size', '24px')
    .attr('font-weight', 600)
    .attr('fill', 'red')
    .style('font-family', 'Times New Roman')


var drag = d3.drag()
    .on("start", onStart)
    .on("drag", onDrag)
    .on("end", onEnd);

var circle = svg
    .append("circle")
    .attr("cx", x(3))
    .attr("cy", y(1))
    .attr("r", 10)
    .style("fill", "blue")
    .style("opacity", 0.5)
    .call(drag);

var focuseLine2x =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(3) )
        .attr("x2", x(3))
        .attr("y1",y(1))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(3) )
        .attr("x2", x(0))
        .attr("y1",y(1))
        .attr("y2", y(1))
        .style("visibility", "visible");


var foucseXval =
    svg.
    append("g")
        .append("text")
        .attr("class", "x axis-value")
        .style('font-size', '22px')
        .style("fill", color)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", x(3) - 10)
        .attr("y", height + 50)
        .text("3.0")
        .style("visibility", "visible");

var foucseYval =
    svg.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(1))
        .text("1.0")
        .style("visibility", "visible");


function onStart() {
    let visible="Hidden";
    d3.select(this).raise().classed("active", true);
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
    d3.select(this).attr("cx", x(org_x0)).attr("cy", y(org_y0));
    focusLabel
        .html("(" + selectedData_x + ", "  + selectedData_y0+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0)+45)
        .style("visibility", "visible")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y
        .attr("x1",x(org_x0) )
        .attr("x2", x(0))
        .attr("y1",y(org_y0))
        .attr("y2", y(org_y0))
        .style("visibility", visible)

    foucseYval
        .attr("x", -(margin.left) +2)
        .attr("y", y(org_y0))
        .text(selectedData_y0)
        .style("visibility", visible);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .attr("y", height + 50)
        .text(selectedData_x)
        .style("visibility", visible);
}

function onDrag() {
    let visible="Hidden";

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
    d3.select(this).attr("cx", x(org_x0)).attr("cy", y(org_y0));
    focusLabel
        .html("(" + selectedData_x + ", "  + selectedData_y0+ ")")
        // .html("x:" + selectedData_x + ", " + "μ(x):" + selectedData_y0)
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0)+45)
        .style("visibility", "visible")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y
        .attr("x1",x(org_x0) )
        .attr("x2", x(0))
        .attr("y1",y(org_y0))
        .attr("y2", y(org_y0))
        .style("visibility", visible)

    foucseYval
        .attr("x", -(margin.left) +2)
        .attr("y", y(org_y0))
        .text(selectedData_y0)
        .style("visibility", visible);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .attr("y", height + 50)
        .text(selectedData_x)
        .style("visibility", visible);

}

function onEnd() {
    let visible="visible";

    d3.select(this).classed("active", false);
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

    focusLabel
        .html("(" + selectedData_x + ", "  + selectedData_y0+ ")")
        // .html("x:" + selectedData_x + ", " + "μ(x):" + selectedData_y0)
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0)+45)
        .style("visibility", "Hidden")


    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y
        .attr("x1",x(org_x0) )
        .attr("x2", x(0))
        .attr("y1",y(org_y0))
        .attr("y2", y(org_y0))
        .style("visibility", visible)

    foucseYval
        .attr("x", -(margin.left) +2)
        .attr("y", y(org_y0))
        .text(selectedData_y0)
        .style("visibility", visible);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .attr("y", height + 50)
        .text(selectedData_x)
        .style("visibility", visible);

}

