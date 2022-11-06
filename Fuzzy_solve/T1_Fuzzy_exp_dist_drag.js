// set the dimensions and margins of the graph
var margin = {top: 3, right: 90, bottom: 80, left: 90},
    width = 400,
    height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#T1FuzzyExp_a")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;

//Read the data

var data1 =
        [{'x':40,'y':1},{'x':45,'y':1}, {'x':50,'y':0}];
var data2 =
        [{'x':45,'y':0},{'x':50,'y':1}, {'x':55,'y':0}];
var data3 =
        [{'x':50,'y':0},{'x':55,'y':1}, {'x':60,'y':1}];

var color1 = 'blue';
var color2 = 'green';
var color3 = 'black';
var color= 'red';

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([40,60])
    .range([ 0, width ]);


// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1.5])
    .range([ height, 0 ]);


//x轴设置
var xAxis = d3.axisBottom(x).tickValues([45,50,55]);

//y轴设置
var yAxis = d3.axisLeft(y);

svg2.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg2.append("g")
    .attr("class", "y axis")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);

svg2.append("g")
    .attr("class", "y axis")
    .append("text")
    .attr("class", "axis-label")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', "Times New Roman")
    .style('font-style', 'italic')
    .attr("x", -(margin.left)+40)
    .attr("y", height *0.05)
    .text('u');

svg2.append("g")
    .append("text")
    .attr("fill", color1)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 120)
    .attr("y", height*0.25)
    .text('Close');

svg2.append("g")
    .append("text")
    .attr("fill", color2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 265)
    .attr("y", height*0.25)
    .text('Okay');

svg2.append("g")
    .append("text")
    .attr("fill", color3)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 450)
    .attr("y", height*0.25)
    .text('Far');

svg2.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'normal')
    .attr("x", -(margin.left) + 250)
    .attr("y", height + 75)
    .text('Distance(m)');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


// Add the line
svg2
    .append("path")
    .datum(data1)
    .attr("fill", "none")
    .attr("stroke", color1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )
svg2
    .append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", color2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )
svg2
    .append("path")
    .datum(data3)
    .attr("fill", "none")
    .attr("stroke", color3)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )



var focusLabel1 =
    svg2
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color1)
        .style('font-family', 'Times New Roman')

var focusLabel2 =
    svg2
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color2)
        .style('font-family', 'Times New Roman')

var focusLabel3 =
    svg2
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color3)
        .style('font-family', 'Times New Roman')


var drag = d3.drag()
    .on("start", onStart)
    .on("drag", onDrag)
    .on("end", onEnd);

var circle1 = svg2
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0.6))
    .attr("r", 10)
    .style("fill", color1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);
var circle2 = svg2
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0.4))
    .attr("r", 10)
    .style("fill", color2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle3 = svg2
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color3)
    .style("opacity", 0.5)
    .style("visibility", "Hidden")
    .call(drag);

var focuseLine2x =
    svg2
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", "red")
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(47))
        .attr("y1",y(0.6))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y_1 =
    svg2
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(40))
        .attr("y1",y(0.6))
        .attr("y2", y(0.6))
        .style("visibility", "visible");

var focuseLine2y_2 =
    svg2
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(40))
        .attr("y1",y(0.4))
        .attr("y2", y(0.4))
        .style("visibility", "visible");

var focuseLine2y_3 =
    svg2
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(40))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "Hidden");

var foucseXval =
    svg2.
    append("g")
        .append("text")
        .attr("class", "x axis-value")
        .style('font-size', '22px')
        .style("fill", color)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", x(47) - 10)
        .attr("y", height + 45)
        .text("47")
        .style("visibility", "visible");

var foucseYval_1 =
    svg2.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0.6))
        .text("0.6")
        .style("visibility", "visible");

var foucseYval_2 =
    svg2.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0.4))
        .text("0.4")
        .style("visibility", "visible");

var foucseYval_3 =
    svg2.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0))
        .text("0.4")
        .style("visibility", "Hidden");

let y0_close=0.6;
let org_y0_close =0.6;
let y0_oky =0.4;
let org_y0_oky =0.4;
let y0_far =0;
let org_y0_far =0;
let org_x0 = 47;
let x0 =47;


function onStart() {
    let visible="visible";
    d3.select(this).raise().classed("active", true);
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标
    var vis_label1 = 'Hidden';

    var vis_label2 = 'Hidden';

    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= 45 && x0>40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(45< x0 && x0 <=50){
        y0_close=0.2 * (50 - x0);
        org_y0_close =0.2 * (50 - org_x0);
        vis_label1 = 'visible';

        y0_oky = 0.2 * (x0 -45);
        org_y0_oky = 0.2 * (org_x0 -45);
        vis_label2 = 'visible';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        if (org_y0_close > org_y0_oky){
            maxY = org_y0_close
        }else{
            maxY = org_y0_oky
        }

    }

    else if(50<x0 && x0<=55){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'


        y0_oky = 0.2 * (55 - x0);
        org_y0_oky = 0.2 * (55 - org_x0);
        vis_label2 = 'visible';


        y0_far =0.2 * (x0 -50);
        org_y0_far =0.2 * (org_x0 -50);
        vis_label3 = 'visible';

        if (org_y0_far > org_y0_oky){
            maxY = org_y0_far
        }else{
            maxY = org_y0_oky
        }

    }

    else if(x0>55 && x0<=60){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;

    }

    else if(x0<=40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
        x0=40;
        org_x0=40;
    }
    else{
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;
        x0=60;
        org_x0=60;
    }


    let selectedData_x_close = x0;
    let selectedData_y0_close = org_y0_close.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_oky = org_y0_oky.toFixed(2);
    let selectedData_x_far = x0;
    let selectedData_y0_far = org_y0_far.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close));
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky));
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_far));

    focusLabel1
        .html("(" + selectedData_x_close + ", "  + selectedData_y0_close+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close)+45)
        .style("visibility", "hidden")

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_oky+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky)+45)
        .style("visibility", "hidden")

    focusLabel3
        .html("(" + selectedData_x_far + ", "  + selectedData_y0_far+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far)+45)
        .style("visibility", "hidden")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close))
        .attr("y2", y(org_y0_close))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky))
        .attr("y2", y(org_y0_oky))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far))
        .attr("y2", y(org_y0_far))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_close))
        .text(selectedData_y0_close)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_oky))
        .text(selectedData_y0_oky)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_far))
        .text(selectedData_y0_far)
        .style("visibility", vis_label3);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);
}

function onDrag() {
    let visible="visible";
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标

    var vis_label1 = 'Hidden';
    var vis_label2 = 'Hidden';
    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= 45 && x0>40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(45< x0 && x0 <=50){
        y0_close=0.2 * (50 - x0);
        org_y0_close =0.2 * (50 - org_x0);
        vis_label1 = 'visible';

        y0_oky = 0.2 * (x0 -45);
        org_y0_oky = 0.2 * (org_x0 -45);
        vis_label2 = 'visible';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        if (org_y0_close > org_y0_oky){
            maxY = org_y0_close
        }else{
            maxY = org_y0_oky
        }

    }

    else if(50<x0 && x0<=55){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'


        y0_oky = 0.2 * (55 - x0);
        org_y0_oky = 0.2 * (55 - org_x0);
        vis_label2 = 'visible';


        y0_far =0.2 * (x0 -50);
        org_y0_far =0.2 * (org_x0 -50);
        vis_label3 = 'visible';

        if (org_y0_far > org_y0_oky){
            maxY = org_y0_far
        }else{
            maxY = org_y0_oky
        }

    }

    else if(x0>55 && x0<=60){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;

    }

    else if(x0<=40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
        x0=40;
        org_x0=40;
    }
    else{
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;
        x0=60;
        org_x0=60;
    }


    let selectedData_x_close = x0;
    let selectedData_y0_close = org_y0_close.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_oky = org_y0_oky.toFixed(2);
    let selectedData_x_far = x0;
    let selectedData_y0_far = org_y0_far.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close)).style("visibility", vis_label1);
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky)).style("visibility", vis_label2);
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_far)).style("visibility", vis_label3);

    focusLabel1
        .html("(" + selectedData_x_close + ", "  + selectedData_y0_close+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close)+45)
        .style("visibility", "hidden")

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_oky+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky)+45)
        .style("visibility", "hidden")

    focusLabel3
        .html("(" + selectedData_x_far + ", "  + selectedData_y0_far+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far)+45)
        .style("visibility", "hidden")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close))
        .attr("y2", y(org_y0_close))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky))
        .attr("y2", y(org_y0_oky))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far))
        .attr("y2", y(org_y0_far))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_close))
        .text(selectedData_y0_close)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_oky))
        .text(selectedData_y0_oky)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_far))
        .text(selectedData_y0_far)
        .style("visibility", vis_label3);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);

}

function onEnd() {
    let visible="visible";

    d3.select(this).classed("active", false);


    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标


    var vis_label1 = 'Hidden';
    var vis_label2 = 'Hidden';
    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= 45 && x0>40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(45< x0 && x0 <=50){
        y0_close=0.2 * (50 - x0);
        org_y0_close =0.2 * (50 - org_x0);
        vis_label1 = 'visible';

        y0_oky = 0.2 * (x0 -45);
        org_y0_oky = 0.2 * (org_x0 -45);
        vis_label2 = 'visible';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        if (org_y0_close > org_y0_oky){
            maxY = org_y0_close
        }else{
            maxY = org_y0_oky
        }

    }

    else if(50<x0 && x0<=55){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'


        y0_oky = 0.2 * (55 - x0);
        org_y0_oky = 0.2 * (55 - org_x0);
        vis_label2 = 'visible';


        y0_far =0.2 * (x0 -50);
        org_y0_far =0.2 * (org_x0 -50);
        vis_label3 = 'visible';

        if (org_y0_far > org_y0_oky){
            maxY = org_y0_far
        }else{
            maxY = org_y0_oky
        }

    }

    else if(x0>55 && x0<=60){
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;

    }

    else if(x0<=40){
        y0_close=1;
        org_y0_close =1;
        vis_label1 = 'visible';

        y0_oky =0;
        org_y0_oky =0;
        vis_label2 = 'Hidden';

        y0_far =0;
        org_y0_far =0;
        vis_label3 = 'Hidden';

        maxY=1;
        x0=40;
        org_x0=40;
    }
    else{
        y0_close = 0;
        org_y0_close = 0;
        vis_label1 = 'Hidden'

        y0_oky = 0;
        org_y0_oky = 0;
        vis_label2 = 'Hidden'

        y0_far =1;
        org_y0_far =1;
        vis_label3 = 'visible';

        maxY = org_y0_far;
        x0=60;
        org_x0=60;
    }


    let selectedData_x_close = x0;
    let selectedData_y0_close = org_y0_close.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_oky = org_y0_oky.toFixed(2);
    let selectedData_x_far = x0;
    let selectedData_y0_far = org_y0_far.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close)).style("visibility", vis_label1);
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky)).style("visibility", vis_label2);
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_far)).style("visibility", vis_label3);

    focusLabel1
        .html("(" + selectedData_x_close + ", "  + selectedData_y0_close+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close)+45)
        .style("visibility", "hidden")

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_oky+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky)+45)
        .style("visibility", "hidden")

    focusLabel3
        .html("(" + selectedData_x_far + ", "  + selectedData_y0_far+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far)+45)
        .style("visibility", "hidden")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close))
        .attr("y2", y(org_y0_close))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky))
        .attr("y2", y(org_y0_oky))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far))
        .attr("y2", y(org_y0_far))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_close))
        .text(selectedData_y0_close)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_oky))
        .text(selectedData_y0_oky)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_far))
        .text(selectedData_y0_far)
        .style("visibility", vis_label3);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);

    document.getElementById("dst_close_x1").innerHTML = x0;
    document.getElementById("dst_close_x2").innerHTML = x0;
    document.getElementById("dst_close_x3").innerHTML = x0;
    document.getElementById("dst_close_x4").innerHTML = x0;

    document.getElementById("dst_close_y").innerHTML = org_y0_close.toFixed(2);
    document.getElementById("dst_oky_y").innerHTML = org_y0_oky.toFixed(2);
    document.getElementById("dst_far_y").innerHTML = org_y0_far.toFixed(2);

    document.getElementById("dst_close_y2").innerHTML = org_y0_close.toFixed(2);
    document.getElementById("dst_oky_y2").innerHTML = org_y0_oky.toFixed(2);
    document.getElementById("dst_far_y2").innerHTML = org_y0_far.toFixed(2);

    document.getElementById("dst_close_x1_a").innerHTML = x0;
    document.getElementById("dst_close_x2_a").innerHTML = x0;
    document.getElementById("dst_close_y_a").innerHTML = org_y0_close.toFixed(2);

    document.getElementById("dst_close_x1_b").innerHTML = x0;
    document.getElementById("dst_close_x2_b").innerHTML = x0;
    document.getElementById("dst_close_y_b").innerHTML = org_y0_close.toFixed(2);

    document.getElementById("dst_close_x1_c").innerHTML = x0;
    document.getElementById("dst_close_x2_c").innerHTML = x0;
    document.getElementById("dst_close_y_c").innerHTML = org_y0_close.toFixed(2);

    document.getElementById("dst_oky_x1_d").innerHTML = x0;
    document.getElementById("dst_oky_x2_d").innerHTML = x0;
    document.getElementById("dst_oky_y_d").innerHTML = org_y0_oky.toFixed(2);

    document.getElementById("dst_oky_x1_e").innerHTML = x0;
    document.getElementById("dst_oky_x2_e").innerHTML = x0;
    document.getElementById("dst_oky_y_e").innerHTML = org_y0_oky.toFixed(2);

    document.getElementById("dst_oky_x1_f").innerHTML = x0;
    document.getElementById("dst_oky_x2_f").innerHTML = x0;
    document.getElementById("dst_oky_y_f").innerHTML = org_y0_oky.toFixed(2);

    document.getElementById("dst_far_x1_g").innerHTML = x0;
    document.getElementById("dst_far_x2_g").innerHTML = x0;
    document.getElementById("dst_far_y_g").innerHTML = org_y0_far.toFixed(2);

    document.getElementById("dst_far_x1_h").innerHTML = x0;
    document.getElementById("dst_far_x2_h").innerHTML = x0;
    document.getElementById("dst_far_y_h").innerHTML = org_y0_far.toFixed(2);

    document.getElementById("dst_far_x1_i").innerHTML = x0;
    document.getElementById("dst_far_x2_i").innerHTML = x0;
    document.getElementById("dst_far_y_i").innerHTML = org_y0_far.toFixed(2);

    document.getElementById("result_1").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_2").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_3").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("result_4").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_5").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_6").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("result_7").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_8").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_9").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);

    document.getElementById("dst_x1").innerHTML = x0;
    document.getElementById("dst_x2").innerHTML = x0;
    document.getElementById("dst_x3").innerHTML = x0;

    document.getElementById("eqr1").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqr2").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqr3").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("eqr4").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqr5").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqr6").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("eqr7").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqr8").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqr9").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);

    document.getElementById("eqd1").innerHTML = y1;
    document.getElementById("eqd2").innerHTML = y2;
    document.getElementById("eqd3").innerHTML = y3;
    document.getElementById("eqd4").innerHTML = y4;
    document.getElementById("eqd5").innerHTML = y5;
    document.getElementById("eqd6").innerHTML = y6;
    document.getElementById("eqd7").innerHTML = y7;
    document.getElementById("eqd8").innerHTML = y8;
    document.getElementById("eqd9").innerHTML = y9;

    document.getElementById("eqs1").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqs2").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqs3").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("eqs4").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqs5").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqs6").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("eqs7").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("eqs8").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("eqs9").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);

    var result2 =
        (
            y1 * (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            y2 * (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            y3 * (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2)))+
            y4 * (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            y5 * (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            y6 * (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2)))+
            y7 * (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            y8 * (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            y9 * (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2)))
        )/
        (
            (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2)))+
            (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2)))+
            (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2)))+
            (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2)))+
            (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2)))
        );
    document.getElementById("acceleration").innerHTML =result2.toFixed(2)

    ///
    let describ2 ='';
    if (result2>=8){
        describ2 = 'a large accelaration';
    }
    else if (result2<8 && result2 >=4){
        describ2 = 'an accelaration';

    }
    else if (result2<4 && result2 >=1.5){
        describ2 = 'a moderate accelaration';
    }
    else if (result2<1.5 && result2 >-1.5){
        describ2 = 'almost no speed change';
    }
    else if (result2<=-1.5 && result2 >-4){
        describ2 = 'a moderate decelaration';
    }
    else if (result2<=-4 && result2 >-8){
        describ2 = 'a decelaration';
    }
    else{
        describ2 = 'a large decelaration';
    }
    document.getElementById("describe").innerHTML = describ2;
///
///
    let dist_dis ='';
    if(x0 <=48.5){
        dist_dis = 'is shorter than';
    }
    else if (x0<51.5 && x0>48.5){
        dist_dis = 'is almost';
    }
    else{
        dist_dis = 'is longer than';
    }
    document.getElementById("dist_dis").innerHTML = dist_dis;
///

}

import {describ, result, y0_slow} from './T1_Fuzzy_exp_speed_drag.js';
import { y0_okay } from './T1_Fuzzy_exp_speed_drag.js';
import { y0_fast } from './T1_Fuzzy_exp_speed_drag.js';
// import { result } from './T1_Fuzzy_exp_speed_drag.js';
import {y1,y2,y3,y4,y5,y6,y7,y8,y9} from './T1_Fuzzy_exp_speed_drag.js';

document.getElementById("dst_close_x1").innerHTML = x0;
document.getElementById("dst_close_x2").innerHTML = x0;
document.getElementById("dst_close_x3").innerHTML = x0;
document.getElementById("dst_close_x4").innerHTML = x0;

document.getElementById("dst_close_y").innerHTML = org_y0_close.toFixed(2);
document.getElementById("dst_oky_y").innerHTML = org_y0_oky.toFixed(2);
document.getElementById("dst_far_y").innerHTML = org_y0_far.toFixed(2);

document.getElementById("dst_close_y2").innerHTML = org_y0_close.toFixed(2);
document.getElementById("dst_oky_y2").innerHTML = org_y0_oky.toFixed(2);
document.getElementById("dst_far_y2").innerHTML = org_y0_far.toFixed(2);

document.getElementById("dst_x1").innerHTML = x0;
document.getElementById("dst_x2").innerHTML = x0;
document.getElementById("dst_x3").innerHTML = x0;

document.getElementById("dst_close_x1_a").innerHTML = x0;
document.getElementById("dst_close_x2_a").innerHTML = x0;
document.getElementById("dst_close_y_a").innerHTML = org_y0_close.toFixed(2);

document.getElementById("dst_close_x1_b").innerHTML = x0;
document.getElementById("dst_close_x2_b").innerHTML = x0;
document.getElementById("dst_close_y_b").innerHTML = org_y0_close.toFixed(2);

document.getElementById("dst_close_x1_c").innerHTML = x0;
document.getElementById("dst_close_x2_c").innerHTML = x0;
document.getElementById("dst_close_y_c").innerHTML = org_y0_close.toFixed(2);

document.getElementById("dst_oky_x1_d").innerHTML = x0;
document.getElementById("dst_oky_x2_d").innerHTML = x0;
document.getElementById("dst_oky_y_d").innerHTML = org_y0_oky.toFixed(2);

document.getElementById("dst_oky_x1_e").innerHTML = x0;
document.getElementById("dst_oky_x2_e").innerHTML = x0;
document.getElementById("dst_oky_y_e").innerHTML = org_y0_oky.toFixed(2);

document.getElementById("dst_oky_x1_f").innerHTML = x0;
document.getElementById("dst_oky_x2_f").innerHTML = x0;
document.getElementById("dst_oky_y_f").innerHTML = org_y0_oky.toFixed(2);

document.getElementById("dst_far_x1_g").innerHTML = x0;
document.getElementById("dst_far_x2_g").innerHTML = x0;
document.getElementById("dst_far_y_g").innerHTML = org_y0_far.toFixed(2);

document.getElementById("dst_far_x1_h").innerHTML = x0;
document.getElementById("dst_far_x2_h").innerHTML = x0;
document.getElementById("dst_far_y_h").innerHTML = org_y0_far.toFixed(2);

document.getElementById("dst_far_x1_i").innerHTML = x0;
document.getElementById("dst_far_x2_i").innerHTML = x0;
document.getElementById("dst_far_y_i").innerHTML = org_y0_far.toFixed(2);

let dist_dis ='';
if(x0 <=48.5){
    dist_dis = 'is shorter than';
}
else if (x0<51.5&& x0>48.5){
    dist_dis = 'is almost';
}
else{
    dist_dis = 'is longer than';
}
document.getElementById("dist_dis").innerHTML = dist_dis;

export { y0_close };
export { y0_oky };
export { y0_far };
