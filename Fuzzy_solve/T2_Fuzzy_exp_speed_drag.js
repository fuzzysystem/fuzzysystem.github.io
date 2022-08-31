// set the dimensions and margins of the graph
// import {y0_close_l, y0_close_u, y0_far_l, y0_far_u, y0_oky_l, y0_oky_u} from "./IT2_Fuzzy_exp_dist_drag";

var margin = {top: 3, right: 90, bottom: 80, left: 120},
    width = 400,
    height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg5 = d3.select("#T2FuzzyExp_b")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;

//Read the data
var data1_u =
    [{'x':-12,'y':1},{'x':-5,'y':1}, {'x':0,'y':0}];
var data1_l =
    [{'x':-12,'y':1},{'x':-7,'y':1}, {'x':-2,'y':0}, {'x':0,'y':0}];
var data2_u =
    [{'x':-7,'y':0},{'x':0,'y':1}, {'x':7,'y':0}];
var data2_l =
    [{'x':-7,'y':0},{'x':-3,'y':0}, {'x':0,'y':1},{'x':3,'y':0}, {'x':7,'y':0}];
var data3_u =
    [{'x':0,'y':0},{'x':5,'y':1}, {'x':10,'y':1}];
var data3_l =
    [{'x':0,'y':0},{'x':2,'y':0}, {'x':7,'y':1},{'x':10,'y':1}];



var color1_2 = 'darkviolet';
var color2_2 = 'orange';
var color3_2 = 'firebrick';
var color3_1 = 'salmon';
var color1_1 = 'mediumpurple';
var color2_1 = 'gold';

var color='red';

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([-12,12])
    .range([ 0, width ]);


// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1.5])
    .range([ height, 0 ]);


//x轴设置
var xAxis = d3.axisBottom(x).tickValues([ -7, -5, -3, -2, 0, 2,3,5,7]);

//y轴设置
var yAxis = d3.axisLeft(y);

svg5.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg5.append("g")
    .attr("class", "y axis")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);


svg5.append("g")
    .append("text")
    .attr("fill", color1_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 150)
    .attr("y", height*0.25)
    .text('Slow');

svg5.append("g")
    .append("text")
    .attr("fill", color2_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left)  + 300)
    .attr("y", height*0.25)
    .text('Okay');

svg5.append("g")
    .append("text")
    .attr("fill", color3_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 450)
    .attr("y", height*0.25)
    .text('Fast');

svg5.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'normal')
    .attr("x", -(margin.left) + 180)
    .attr("y", height + 75)
    .text('Relative Speed (KM/h)');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


// Add the line
svg5
    .append("path")
    .datum(data1_u)
    .attr("fill", "none")
    .attr("stroke", color1_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg5
    .append("path")
    .datum(data1_l)
    .attr("fill", "none")
    .attr("stroke", color1_2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg5
    .append("path")
    .datum(data2_u)
    .attr("fill", "none")
    .attr("stroke", color2_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg5
    .append("path")
    .datum(data2_l)
    .attr("fill", "none")
    .attr("stroke", color2_2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg5
    .append("path")
    .datum(data3_u)
    .attr("fill", "none")
    .attr("stroke", color3_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg5
    .append("path")
    .datum(data3_l)
    .attr("fill", "none")
    .attr("stroke", color3_2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )



var focusLabel1_1 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color1_1)
        .style('font-family', 'Times New Roman')

var focusLabel1_2 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color1_2)
        .style('font-family', 'Times New Roman')

var focusLabel2_1 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color2_1)
        .style('font-family', 'Times New Roman')

var focusLabel2_2 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color2_2)
        .style('font-family', 'Times New Roman')

var focusLabel3_1 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color3_1)
        .style('font-family', 'Times New Roman')

var focusLabel3_2 =
    svg5
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color3_2)
        .style('font-family', 'Times New Roman')


var drag = d3.drag()
    .on("start", onStart)
    .on("drag", onDrag)
    .on("end", onEnd);

var circle1_1 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color1_1)
    .style("opacity", 0.5)
    .style("visibility", "hidden")
    .call(drag);

var circle1_2 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color1_2)
    .style("opacity", 0.5)
    .style("visibility", "hidden")
    .call(drag);

var circle2_1 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.43))
    .attr("r", 10)
    .style("fill", color2_1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle2_2 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color2_2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle3_1 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.8))
    .attr("r", 10)
    .style("fill", color3_1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle3_2 = svg5
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.4))
    .attr("r", 10)
    .style("fill", color3_2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var focuseLine2x =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(4))
        .attr("y1",y(0.8))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y_1_1 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "hidden");

var focuseLine2y_1_2 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "hidden");

var focuseLine2y_2_1 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0.43))
        .attr("y2", y(0.43))
        .style("visibility", "visible");

var focuseLine2y_2_2 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "visible");

var focuseLine2y_3_1 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0.8))
        .attr("y2", y(0.8))
        .style("visibility", "visible");

var focuseLine2y_3_2 =
    svg5
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-12))
        .attr("y1",y(0.4))
        .attr("y2", y(0.4))
        .style("visibility", "visible");

var foucseXval =
    svg5.
    append("g")
        .append("text")
        .attr("class", "x axis-value")
        .style('font-size', '22px')
        .style("fill", color)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", x(4) - 10)
        .attr("y", height + 45)
        .text("4")
        .style("visibility", "visible");

var foucseYval_1_1 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0))
        .text("0")
        .style("visibility", "hidden");

var foucseYval_1_2 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0))
        .text("0")
        .style("visibility", "hidden");

var foucseYval_2_1 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +40)
        .attr("y", y(0.43))
        .text("0.43")
        .style("visibility", "visible");

var foucseYval_2_2 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +40)
        .attr("y", y(0))
        .text("0")
        .style("visibility", "visible");

var foucseYval_3_1 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0.8))
        .text("0.8")
        .style("visibility", "visible");

var foucseYval_3_2 =
    svg5.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0.4))
        .text("0.4")
        .style("visibility", "visible");

let y0_slow_u=0;
let org_y0_slow_u =0;
let y0_slow_l=0;
let org_y0_slow_l =0;
let y0_okay_u=0.43;
let org_y0_okay_u =0.43;
let y0_okay_l=0;
let org_y0_okay_l =0;
let y0_fast_u=0.8;
let org_y0_fast_u =0.8;
let y0_fast_l=0.4;
let org_y0_fast_l =0.4;
let org_x0 = 4;
let x0 =4;



function onStart() {
    let visible="Hidden";
    d3.select(this).raise().classed("active", true);
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标
    var vis_label1 = 'Hidden';

    var vis_label2 = 'Hidden';

    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= -7){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l=1;
        org_y0_slow_l =1;
        vis_label1 = 'visible';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'Hidden';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }else if(-7<x0 && x0<=-5){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l= 0.2 * (-2 - x0);
        org_y0_slow_l =0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }else if(-5<x0 && x0<=-3){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u = (x0 + 7)/7;
        org_y0_okay_u = (org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }else if(-3<x0 && x0<=-2){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }else if(-2<x0 && x0<=0){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0;
        org_y0_slow_l =0;
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(0<x0 && x0<=2){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_okay_u;

    }else if(2<x0 && x0<=3){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(3<x0 && x0<=5){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(5<x0 && x0<=7){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;

    }else{
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'hidden';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =1;
        org_y0_fast_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;
    }


    let selectedData_x_slow_u = x0;
    let selectedData_y0_slow_u = org_y0_slow_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_okay_u = org_y0_okay_u.toFixed(2);
    let selectedData_x_fast_u = x0;
    let selectedData_y0_fast_u = org_y0_fast_u.toFixed(2);
    let selectedData_x_slow_l = x0;
    let selectedData_y0_slow_l = org_y0_slow_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_okay_l = org_y0_okay_l.toFixed(2);
    let selectedData_x_fast_l = x0;
    let selectedData_y0_fast_l = org_y0_fast_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_u));
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_u));
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_u));
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_l));
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_l));
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_l));

    focusLabel1_1
        .html("(" + selectedData_x_slow_u + ", "  + selectedData_y0_slow_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_u)+45)
        .style("visibility", vis_label1)

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_okay_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_u)+45)
        .style("visibility", vis_label2)

    focusLabel3_1
        .html("(" + selectedData_x_fast_u + ", "  + selectedData_y0_fast_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_u)+45)
        .style("visibility", vis_label3)

    focusLabel1_2
        .html("(" + selectedData_x_slow_l + ", "  + selectedData_y0_slow_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_l)+45)
        .style("visibility", vis_label1)

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_okay_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_l)+45)
        .style("visibility", vis_label2)

    focusLabel3_2
        .html("(" + selectedData_x_fast_l + ", "  + selectedData_y0_fast_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_l)+45)
        .style("visibility", vis_label3)

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_u))
        .attr("y2", y(org_y0_slow_u))
        .style("visibility", visible)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_u))
        .attr("y2", y(org_y0_okay_u))
        .style("visibility", visible)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_u))
        .attr("y2", y(org_y0_fast_u))
        .style("visibility", visible)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_l))
        .attr("y2", y(org_y0_slow_l))
        .style("visibility", visible)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_l))
        .attr("y2", y(org_y0_okay_l))
        .style("visibility", visible)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_l))
        .attr("y2", y(org_y0_fast_l))
        .style("visibility", visible)

    foucseYval_1_1
        .attr("y", y(org_y0_slow_u))
        .text(selectedData_y0_slow_u)
        .style("visibility", visible);

    foucseYval_2_1
        .attr("y", y(org_y0_okay_u))
        .text(selectedData_y0_okay_u)
        .style("visibility", visible);

    foucseYval_3_1
        .attr("y", y(org_y0_fast_u))
        .text(selectedData_y0_fast_u)
        .style("visibility", visible);

    foucseYval_1_2
        .attr("y", y(org_y0_slow_l))
        .text(selectedData_y0_slow_l)
        .style("visibility", visible);

    foucseYval_2_2
        .attr("y", y(org_y0_okay_l))
        .text(selectedData_y0_okay_l)
        .style("visibility", visible);

    foucseYval_3_2
        .attr("y", y(org_y0_fast_l))
        .text(selectedData_y0_fast_l)
        .style("visibility", visible);


    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);
}

function onDrag() {
    let visible="Hidden";
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标

    var vis_label1 = 'Hidden';
    var vis_label2 = 'Hidden';
    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= -7){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l=1;
        org_y0_slow_l =1;
        vis_label1 = 'visible';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'Hidden';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }
    else if(-7<x0 && x0<=-5){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l= 0.2 * (-2 - x0);
        org_y0_slow_l =0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }
    else if(-5<x0 && x0<=-3){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u = (x0 + 7)/7;
        org_y0_okay_u = (org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }
    else if(-3<x0 && x0<=-2){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }
    else if(-2<x0 && x0<=0){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0;
        org_y0_slow_l =0;
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }
    else if(0<x0 && x0<=2){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_okay_u;

    }
    else if(2<x0 && x0<=3){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }
    else if(3<x0 && x0<=5){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }
    else if(5<x0 && x0<=7){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;

    }
    else{
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'hidden';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =1;
        org_y0_fast_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;
    }


    let selectedData_x_slow_u = x0;
    let selectedData_y0_slow_u = org_y0_slow_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_okay_u = org_y0_okay_u.toFixed(2);
    let selectedData_x_fast_u = x0;
    let selectedData_y0_fast_u = org_y0_fast_u.toFixed(2);
    let selectedData_x_slow_l = x0;
    let selectedData_y0_slow_l = org_y0_slow_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_okay_l = org_y0_okay_l.toFixed(2);
    let selectedData_x_fast_l = x0;
    let selectedData_y0_fast_l = org_y0_fast_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_u)).style("visibility", vis_label1);
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_u)).style("visibility", vis_label2);
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_u)).style("visibility", vis_label3);
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_l)).style("visibility", vis_label1);
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_l)).style("visibility", vis_label2);
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_l)).style("visibility", vis_label3);

    focusLabel1_1
        .html("(" + selectedData_x_slow_u + ", "  + selectedData_y0_slow_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_u)+45)
        .style("visibility", vis_label1)

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_okay_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_u)+45)
        .style("visibility", vis_label2)

    focusLabel3_1
        .html("(" + selectedData_x_fast_u + ", "  + selectedData_y0_fast_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_u)+45)
        .style("visibility", vis_label3)

    focusLabel1_2
        .html("(" + selectedData_x_slow_l + ", "  + selectedData_y0_slow_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_l)+45)
        .style("visibility", vis_label1)

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_okay_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_l)+45)
        .style("visibility", vis_label2)

    focusLabel3_2
        .html("(" + selectedData_x_fast_l + ", "  + selectedData_y0_fast_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_l)+45)
        .style("visibility", vis_label3)

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_u))
        .attr("y2", y(org_y0_slow_u))
        .style("visibility", visible)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_u))
        .attr("y2", y(org_y0_okay_u))
        .style("visibility", visible)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_u))
        .attr("y2", y(org_y0_fast_u))
        .style("visibility", visible)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_l))
        .attr("y2", y(org_y0_slow_l))
        .style("visibility", visible)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_l))
        .attr("y2", y(org_y0_okay_l))
        .style("visibility", visible)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_l))
        .attr("y2", y(org_y0_fast_l))
        .style("visibility", visible)

    foucseYval_1_1
        .attr("y", y(org_y0_slow_u))
        .text(selectedData_y0_slow_u)
        .style("visibility", visible);

    foucseYval_2_1
        .attr("y", y(org_y0_okay_u))
        .text(selectedData_y0_okay_u)
        .style("visibility", visible);

    foucseYval_3_1
        .attr("y", y(org_y0_fast_u))
        .text(selectedData_y0_fast_u)
        .style("visibility", visible);

    foucseYval_1_2
        .attr("y", y(org_y0_slow_l))
        .text(selectedData_y0_slow_l)
        .style("visibility", visible);

    foucseYval_2_2
        .attr("y", y(org_y0_okay_l))
        .text(selectedData_y0_okay_l)
        .style("visibility", visible);

    foucseYval_3_2
        .attr("y", y(org_y0_fast_l))
        .text(selectedData_y0_fast_l)
        .style("visibility", visible);


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

    if(x0 <= -7){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l=1;
        org_y0_slow_l =1;
        vis_label1 = 'visible';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'Hidden';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }else if(-7<x0 && x0<=-5){
        y0_slow_u = 1;
        org_y0_slow_u = 1;
        y0_slow_l= 0.2 * (-2 - x0);
        org_y0_slow_l =0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_slow_u;
    }else if(-5<x0 && x0<=-3){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u = (x0 + 7)/7;
        org_y0_okay_u = (org_x0 + 7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }else if(-3<x0 && x0<=-2){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0.2 * (-2 - x0);
        org_y0_slow_l = 0.2 * (-2 - org_x0);
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }

    }else if(-2<x0 && x0<=0){
        y0_slow_u = 0.2 * (- x0);
        org_y0_slow_u = 0.2 * (- org_x0);
        y0_slow_l = 0;
        org_y0_slow_l =0;
        vis_label1 = 'visible';

        y0_okay_u =(x0 + 7)/7;
        org_y0_okay_u =(org_x0 + 7)/7;
        y0_okay_l =(x0 + 3)/3;
        org_y0_okay_l =(org_x0 + 3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0;
        org_y0_fast_u =0;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_okay_u < org_y0_slow_u){
            maxY=org_y0_slow_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(0<x0 && x0<=2){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0;
        org_y0_fast_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_okay_u;

    }else if(2<x0 && x0<=3){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =(-x0 +3)/3;
        org_y0_okay_l =(-org_x0 +3)/3;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(3<x0 && x0<=5){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =0.2 * x0;
        org_y0_fast_u =0.2 * org_x0 ;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        if (org_y0_okay_u < org_y0_fast_u){
            maxY=org_y0_fast_u;
        }else{
            maxY=org_y0_okay_u;
        }
    }else if(5<x0 && x0<=7){
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =(-x0 +7)/7;
        org_y0_okay_u =(-org_x0 +7)/7;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'visible';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =0.2 * (x0 - 2);
        org_y0_fast_l =0.2 *(org_x0 - 2);
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;

    }else{
        y0_slow_u = 0;
        org_y0_slow_u =0;
        y0_slow_l=0;
        org_y0_slow_l =0;
        vis_label1 = 'Hidden';

        y0_okay_u =0;
        org_y0_okay_u =0;
        y0_okay_l =0;
        org_y0_okay_l =0;
        vis_label2 = 'hidden';

        y0_fast_u =1;
        org_y0_fast_u =1;
        y0_fast_l =1;
        org_y0_fast_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_fast_u;
    }


    let selectedData_x_slow_u = x0;
    let selectedData_y0_slow_u = org_y0_slow_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_okay_u = org_y0_okay_u.toFixed(2);
    let selectedData_x_fast_u = x0;
    let selectedData_y0_fast_u = org_y0_fast_u.toFixed(2);
    let selectedData_x_slow_l = x0;
    let selectedData_y0_slow_l = org_y0_slow_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_okay_l = org_y0_okay_l.toFixed(2);
    let selectedData_x_fast_l = x0;
    let selectedData_y0_fast_l = org_y0_fast_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_u)).style("visibility", vis_label1);
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_u)).style("visibility", vis_label2);
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_u)).style("visibility", vis_label3);
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow_l)).style("visibility", vis_label1);
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay_l)).style("visibility", vis_label2);
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast_l)).style("visibility", vis_label3);

    focusLabel1_1
        .html("(" + selectedData_x_slow_u + ", "  + selectedData_y0_slow_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_u)+45)
        .style("visibility", 'hidden')

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_okay_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_u)+45)
        .style("visibility", 'hidden')

    focusLabel3_1
        .html("(" + selectedData_x_fast_u + ", "  + selectedData_y0_fast_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_u)+45)
        .style("visibility", 'hidden')

    focusLabel1_2
        .html("(" + selectedData_x_slow_l + ", "  + selectedData_y0_slow_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow_l)+45)
        .style("visibility", 'hidden')

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_okay_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay_l)+45)
        .style("visibility", 'hidden')

    focusLabel3_2
        .html("(" + selectedData_x_fast_l + ", "  + selectedData_y0_fast_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast_l)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_u))
        .attr("y2", y(org_y0_slow_u))
        .style("visibility", vis_label1)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_u))
        .attr("y2", y(org_y0_okay_u))
        .style("visibility", vis_label2)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_u))
        .attr("y2", y(org_y0_fast_u))
        .style("visibility", vis_label3)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow_l))
        .attr("y2", y(org_y0_slow_l))
        .style("visibility", vis_label1)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay_l))
        .attr("y2", y(org_y0_okay_l))
        .style("visibility", vis_label2)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast_l))
        .attr("y2", y(org_y0_fast_l))
        .style("visibility", vis_label3)

    foucseYval_1_1
        .attr("y", y(org_y0_slow_u))
        .text(selectedData_y0_slow_u)
        .style("visibility", vis_label1);

    foucseYval_2_1
        .attr("y", y(org_y0_okay_u))
        .text(selectedData_y0_okay_u)
        .style("visibility", vis_label2);

    foucseYval_3_1
        .attr("y", y(org_y0_fast_u))
        .text(selectedData_y0_fast_u)
        .style("visibility", vis_label3);

    foucseYval_1_2
        .attr("y", y(org_y0_slow_l))
        .text(selectedData_y0_slow_l)
        .style("visibility", vis_label1);

    foucseYval_2_2
        .attr("y", y(org_y0_okay_l))
        .text(selectedData_y0_okay_l)
        .style("visibility", vis_label2);

    foucseYval_3_2
        .attr("y", y(org_y0_fast_l))
        .text(selectedData_y0_fast_l)
        .style("visibility", vis_label3);


    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);

    results_l =
        (
            y1_l * (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            y2_l * (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            y3_l * (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
            y4_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            y5_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            y6_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
            y7_l * (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            y8_l * (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            y9_l * (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))
        )/
        (
            (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
            (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
            (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
            (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
            (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))
        );
    results_u =
        (
            y1_u * (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            y2_u * (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            y3_u * (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
            y4_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            y5_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            y6_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
            y7_u * (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            y8_u * (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            y9_u * (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))
        )/
        (
            (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
            (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
            (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
            (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
            (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))
        );
    results_y = (results_l + results_u) / 2;

    document.getElementById("y_l").innerHTML =results_l.toFixed(2);
    document.getElementById("y_r").innerHTML =results_u.toFixed(2);
    document.getElementById("y_l_l").innerHTML =results_l.toFixed(2);
    document.getElementById("y_r_r").innerHTML =results_u.toFixed(2);
    document.getElementById("result_y").innerHTML =results_y.toFixed(2);


    document.getElementById("spd_slow_u_x1").innerHTML = x0;
    document.getElementById("spd_slow_u_x2").innerHTML = x0;
    document.getElementById("spd_slow_u_x3").innerHTML = x0;
    document.getElementById("spd_slow_l_x1").innerHTML = x0;
    document.getElementById("spd_slow_l_x2").innerHTML = x0;
    document.getElementById("spd_slow_l_x3").innerHTML = x0;
    document.getElementById("spd_slow_y_u").innerHTML = org_y0_slow_u.toFixed(2);
    document.getElementById("spd_okay_y_u").innerHTML = org_y0_okay_u.toFixed(2);
    document.getElementById("spd_fast_y_u").innerHTML = org_y0_fast_u.toFixed(2);
    document.getElementById("spd_slow_y_l").innerHTML = org_y0_slow_l.toFixed(2);
    document.getElementById("spd_okay_y_l").innerHTML = org_y0_okay_l.toFixed(2);
    document.getElementById("spd_fast_y_l").innerHTML = org_y0_fast_l.toFixed(2);

    document.getElementById("spd_slow_u_x1_a").innerHTML = x0;
    document.getElementById("spd_slow_l_x2_a").innerHTML = x0;
    document.getElementById("spd_slow_u_y_a").innerHTML = org_y0_slow_u.toFixed(2);
    document.getElementById("spd_slow_l_y_a").innerHTML = org_y0_slow_l.toFixed(2);

    document.getElementById("spd_slow_u_x1_d").innerHTML = x0;
    document.getElementById("spd_slow_l_x2_d").innerHTML = x0;
    document.getElementById("spd_slow_u_y_d").innerHTML = org_y0_slow_u.toFixed(2);
    document.getElementById("spd_slow_l_y_d").innerHTML = org_y0_slow_l.toFixed(2);

    document.getElementById("spd_slow_u_x1_g").innerHTML = x0;
    document.getElementById("spd_slow_l_x2_g").innerHTML = x0;
    document.getElementById("spd_slow_u_y_g").innerHTML = org_y0_slow_u.toFixed(2);
    document.getElementById("spd_slow_l_y_g").innerHTML = org_y0_slow_l.toFixed(2);

    document.getElementById("spd_okay_u_x1_b").innerHTML = x0;
    document.getElementById("spd_okay_l_x2_b").innerHTML = x0;
    document.getElementById("spd_okay_u_y_b").innerHTML = org_y0_okay_u.toFixed(2);
    document.getElementById("spd_okay_l_y_b").innerHTML = org_y0_okay_l.toFixed(2);

    document.getElementById("spd_okay_u_x1_e").innerHTML = x0;
    document.getElementById("spd_okay_l_x2_e").innerHTML = x0;
    document.getElementById("spd_okay_u_y_e").innerHTML = org_y0_okay_u.toFixed(2);
    document.getElementById("spd_okay_l_y_e").innerHTML = org_y0_okay_l.toFixed(2);

    document.getElementById("spd_okay_u_x1_h").innerHTML = x0;
    document.getElementById("spd_okay_l_x2_h").innerHTML = x0;
    document.getElementById("spd_okay_u_y_h").innerHTML = org_y0_okay_u.toFixed(2);
    document.getElementById("spd_okay_l_y_h").innerHTML = org_y0_okay_l.toFixed(2);

    document.getElementById("spd_fast_u_x1_c").innerHTML = x0;
    document.getElementById("spd_fast_l_x2_c").innerHTML = x0;
    document.getElementById("spd_fast_u_y_c").innerHTML = org_y0_fast_u.toFixed(2);
    document.getElementById("spd_fast_l_y_c").innerHTML = org_y0_fast_l.toFixed(2);

    document.getElementById("spd_fast_u_x1_f").innerHTML = x0;
    document.getElementById("spd_fast_l_x2_f").innerHTML = x0;
    document.getElementById("spd_fast_u_y_f").innerHTML = org_y0_fast_u.toFixed(2);
    document.getElementById("spd_fast_l_y_f").innerHTML = org_y0_fast_l.toFixed(2);

    document.getElementById("spd_fast_u_x1_i").innerHTML = x0;
    document.getElementById("spd_fast_l_x2_i").innerHTML = x0;
    document.getElementById("spd_fast_u_y_i").innerHTML = org_y0_fast_u.toFixed(2);
    document.getElementById("spd_fast_l_y_i").innerHTML = org_y0_fast_l.toFixed(2);

    document.getElementById("result_1_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
    document.getElementById("result_2_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
    document.getElementById("result_3_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
    document.getElementById("result_4_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
    document.getElementById("result_5_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
    document.getElementById("result_6_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
    document.getElementById("result_7_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
    document.getElementById("result_8_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
    document.getElementById("result_9_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
    document.getElementById("result_1_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
    document.getElementById("result_2_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
    document.getElementById("result_3_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);
    document.getElementById("result_4_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
    document.getElementById("result_5_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
    document.getElementById("result_6_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);
    document.getElementById("result_7_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
    document.getElementById("result_8_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
    document.getElementById("result_9_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);

    document.getElementById("spd_x1_t2").innerHTML = x0;
    document.getElementById("spd_x2_t2").innerHTML = x0;
    document.getElementById("spd_x3_t2").innerHTML = x0;
}
import {y0_close_l, y0_close_u, y0_far_l, y0_far_u, y0_oky_l, y0_oky_u} from "./T2_Fuzzy_exp_dist_drag.js";

document.getElementById("spd_slow_u_x1").innerHTML = x0;
document.getElementById("spd_slow_u_x2").innerHTML = x0;
document.getElementById("spd_slow_u_x3").innerHTML = x0;
document.getElementById("spd_slow_l_x1").innerHTML = x0;
document.getElementById("spd_slow_l_x2").innerHTML = x0;
document.getElementById("spd_slow_l_x3").innerHTML = x0;
document.getElementById("spd_slow_y_u").innerHTML = org_y0_slow_u.toFixed(2);
document.getElementById("spd_okay_y_u").innerHTML = org_y0_okay_u.toFixed(2);
document.getElementById("spd_fast_y_u").innerHTML = org_y0_fast_u.toFixed(2);
document.getElementById("spd_slow_y_l").innerHTML = org_y0_slow_l.toFixed(2);
document.getElementById("spd_okay_y_l").innerHTML = org_y0_okay_l.toFixed(2);
document.getElementById("spd_fast_y_l").innerHTML = org_y0_fast_l.toFixed(2);

document.getElementById("spd_slow_u_x1_a").innerHTML = x0;
document.getElementById("spd_slow_l_x2_a").innerHTML = x0;
document.getElementById("spd_slow_u_y_a").innerHTML = org_y0_slow_u.toFixed(2);
document.getElementById("spd_slow_l_y_a").innerHTML = org_y0_slow_l.toFixed(2);

document.getElementById("spd_slow_u_x1_d").innerHTML = x0;
document.getElementById("spd_slow_l_x2_d").innerHTML = x0;
document.getElementById("spd_slow_u_y_d").innerHTML = org_y0_slow_u.toFixed(2);
document.getElementById("spd_slow_l_y_d").innerHTML = org_y0_slow_l.toFixed(2);

document.getElementById("spd_slow_u_x1_g").innerHTML = x0;
document.getElementById("spd_slow_l_x2_g").innerHTML = x0;
document.getElementById("spd_slow_u_y_g").innerHTML = org_y0_slow_u.toFixed(2);
document.getElementById("spd_slow_l_y_g").innerHTML = org_y0_slow_l.toFixed(2);

document.getElementById("spd_okay_u_x1_b").innerHTML = x0;
document.getElementById("spd_okay_l_x2_b").innerHTML = x0;
document.getElementById("spd_okay_u_y_b").innerHTML = org_y0_okay_u.toFixed(2);
document.getElementById("spd_okay_l_y_b").innerHTML = org_y0_okay_l.toFixed(2);

document.getElementById("spd_okay_u_x1_e").innerHTML = x0;
document.getElementById("spd_okay_l_x2_e").innerHTML = x0;
document.getElementById("spd_okay_u_y_e").innerHTML = org_y0_okay_u.toFixed(2);
document.getElementById("spd_okay_l_y_e").innerHTML = org_y0_okay_l.toFixed(2);

document.getElementById("spd_okay_u_x1_h").innerHTML = x0;
document.getElementById("spd_okay_l_x2_h").innerHTML = x0;
document.getElementById("spd_okay_u_y_h").innerHTML = org_y0_okay_u.toFixed(2);
document.getElementById("spd_okay_l_y_h").innerHTML = org_y0_okay_l.toFixed(2);

document.getElementById("spd_fast_u_x1_c").innerHTML = x0;
document.getElementById("spd_fast_l_x2_c").innerHTML = x0;
document.getElementById("spd_fast_u_y_c").innerHTML = org_y0_fast_u.toFixed(2);
document.getElementById("spd_fast_l_y_c").innerHTML = org_y0_fast_l.toFixed(2);

document.getElementById("spd_fast_u_x1_f").innerHTML = x0;
document.getElementById("spd_fast_l_x2_f").innerHTML = x0;
document.getElementById("spd_fast_u_y_f").innerHTML = org_y0_fast_u.toFixed(2);
document.getElementById("spd_fast_l_y_f").innerHTML = org_y0_fast_l.toFixed(2);

document.getElementById("spd_fast_u_x1_i").innerHTML = x0;
document.getElementById("spd_fast_l_x2_i").innerHTML = x0;
document.getElementById("spd_fast_u_y_i").innerHTML = org_y0_fast_u.toFixed(2);
document.getElementById("spd_fast_l_y_i").innerHTML = org_y0_fast_l.toFixed(2);

document.getElementById("result_1_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
document.getElementById("result_2_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
document.getElementById("result_3_1").innerHTML = (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
document.getElementById("result_4_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
document.getElementById("result_5_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
document.getElementById("result_6_1").innerHTML = (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
document.getElementById("result_7_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2))).toFixed(2);
document.getElementById("result_8_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2))).toFixed(2);
document.getElementById("result_9_1").innerHTML = (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2))).toFixed(2);
document.getElementById("result_1_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
document.getElementById("result_2_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
document.getElementById("result_3_2").innerHTML = (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);
document.getElementById("result_4_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
document.getElementById("result_5_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
document.getElementById("result_6_2").innerHTML = (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);
document.getElementById("result_7_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2))).toFixed(2);
document.getElementById("result_8_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2))).toFixed(2);
document.getElementById("result_9_2").innerHTML = (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2))).toFixed(2);

document.getElementById("spd_x1_t2").innerHTML = x0;
document.getElementById("spd_x2_t2").innerHTML = x0;
document.getElementById("spd_x3_t2").innerHTML = x0;

let y1_l = -1;
let y2_l = -6;
let y3_l = -11;
let y4_l = 2;
let y5_l = -1;
let y6_l = -4;
let y7_l = 9;
let y8_l = 4;
let y9_l = -1;

let y1_u = 1;
let y2_u = -4;
let y3_u = -9;
let y4_u = 4;
let y5_u = 1;
let y6_u = -2;
let y7_u = 11;
let y8_u = 6;
let y9_u = 1;

var results_l =
    (
        y1_l * (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        y2_l * (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        y3_l * (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
        y4_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        y5_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        y6_l * (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
        y7_l * (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        y8_l * (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        y9_l * (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))
    )/
    (
        (Number(y0_close_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        (Number(y0_close_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        (Number(y0_close_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
        (Number(y0_oky_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        (Number(y0_oky_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        (Number(y0_oky_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))+
        (Number(y0_far_l.toFixed(2)) * Number(y0_slow_l.toFixed(2)))+
        (Number(y0_far_l.toFixed(2)) * Number(y0_okay_l.toFixed(2)))+
        (Number(y0_far_l.toFixed(2)) * Number(y0_fast_l.toFixed(2)))
    );
var results_u =
    (
        y1_u * (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        y2_u * (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        y3_u * (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
        y4_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        y5_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        y6_u * (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
        y7_u * (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        y8_u * (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        y9_u * (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))
    )/
    (
        (Number(y0_close_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        (Number(y0_close_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        (Number(y0_close_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
        (Number(y0_oky_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        (Number(y0_oky_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        (Number(y0_oky_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))+
        (Number(y0_far_u.toFixed(2)) * Number(y0_slow_u.toFixed(2)))+
        (Number(y0_far_u.toFixed(2)) * Number(y0_okay_u.toFixed(2)))+
        (Number(y0_far_u.toFixed(2)) * Number(y0_fast_u.toFixed(2)))
    );
var results_y = (results_l + results_u) / 2;
document.getElementById("y_l").innerHTML =results_l.toFixed(2);
document.getElementById("y_r").innerHTML =results_u.toFixed(2);
document.getElementById("y_l_l").innerHTML =results_l.toFixed(2);
document.getElementById("y_r_r").innerHTML =results_u.toFixed(2);
document.getElementById("result_y").innerHTML =results_y.toFixed(2);


export { y0_slow_u,y0_slow_l };
export { y0_okay_u, y0_okay_l };
export { y0_fast_u, y0_fast_l };
export { results_y };

export{y1_u,y2_u,y3_u,y4_u,y5_u,y6_u,y7_u,y8_u,y9_u,
    y1_l,y2_l,y3_l,y4_l,y5_l,y6_l,y7_l,y8_l,y9_l};