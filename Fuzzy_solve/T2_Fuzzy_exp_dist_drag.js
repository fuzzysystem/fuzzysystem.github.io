// set the dimensions and margins of the graph
var margin = {top: 3, right: 90, bottom: 80, left: 120},
    width = 400,
    height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg4 = d3.select("#T2FuzzyExp_a")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;

//Read the data
var data1_u =
    [{'x':35,'y':1},{'x':45,'y':1}, {'x':50,'y':0}];
var data1_l =
    [{'x':35,'y':1},{'x':43,'y':1}, {'x':48,'y':0}, {'x':50,'y':0}];
var data2_u =
    [{'x':41,'y':0},{'x':50,'y':1}, {'x':59,'y':0}];
var data2_l =
    [{'x':41,'y':0},{'x':47,'y':0}, {'x':50,'y':1},{'x':53,'y':0}, {'x':59,'y':0}];
var data3_u =
    [{'x':50,'y':0},{'x':55,'y':1}, {'x':61,'y':1}];
var data3_l =
    [{'x':50,'y':0},{'x':52,'y':0}, {'x':57,'y':1},{'x':61,'y':1}];
var color1_2 = 'blue';
var color1_1 = 'cornflowerblue';
var color2_2 = 'green';
var color2_1 = 'yellowgreen';
var color3_2 = 'black';
var color3_1 = 'grey';

var color= 'red';

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([35,62])
    .range([ 0, width ]);

// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1.5])
    .range([ height, 0 ]);

//x轴设置
var xAxis = d3.axisBottom(x).tickValues([41,43,45,47,48,50,52,53,55,57,59]);

//y轴设置
var yAxis = d3.axisLeft(y);

svg4.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg4.append("g")
    .attr("class", "y axis")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);


svg4.append("g")
    .append("text")
    .attr("fill", color1_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 150)
    .attr("y", height*0.25)
    .text('Close');

svg4.append("g")
    .append("text")
    .attr("fill", color2_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 320)
    .attr("y", height*0.25)
    .text('Okay');

svg4.append("g")
    .append("text")
    .attr("fill", color3_2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 450)
    .attr("y", height*0.25)
    .text('Far');

svg4.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'normal')
    .attr("x", -(margin.left) + 230)
    .attr("y", height + 75)
    .text('Distance(m)');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


// Add the line
svg4
    .append("path")
    .datum(data1_u)
    .attr("fill", "none")
    .attr("stroke", color1_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg4
    .append("path")
    .datum(data1_l)
    .attr("fill", "none")
    .attr("stroke", color1_2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg4
    .append("path")
    .datum(data2_u)
    .attr("fill", "none")
    .attr("stroke", color2_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg4
    .append("path")
    .datum(data2_l)
    .attr("fill", "none")
    .attr("stroke", color2_2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg4
    .append("path")
    .datum(data3_u)
    .attr("fill", "none")
    .attr("stroke", color3_1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )

svg4
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
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color1_1)
        .style('font-family', 'Times New Roman')

var focusLabel1_2 =
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color1_2)
        .style('font-family', 'Times New Roman')

var focusLabel2_1 =
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color2_1)
        .style('font-family', 'Times New Roman')

var focusLabel2_2 =
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color2_2)
        .style('font-family', 'Times New Roman')

var focusLabel3_1 =
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color3_1)
        .style('font-family', 'Times New Roman')

var focusLabel3_2 =
    svg4
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '22px')
        .attr('font-weight', 600)
        .attr('fill', color3_2)
        .style('font-family', 'Times New Roman')


var drag = d3.drag()
    .on("start", onStart)
    .on("drag", onDrag)
    .on("end", onEnd);

var circle1_1 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0.6))
    .attr("r", 10)
    .style("fill", color1_1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle1_2 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0.2))
    .attr("r", 10)
    .style("fill", color1_2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle2_1 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0.67))
    .attr("r", 10)
    .style("fill", color2_1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle2_2 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color2_2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle3_1 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color3_1)
    .style("opacity", 0.5)
    .style("visibility", "Hidden")
    .call(drag);

var circle3_2 = svg4
    .append("circle")
    .attr("cx", x(47))
    .attr("cy", y(0))
    .attr("r", 10)
    .style("fill", color3_2)
    .style("opacity", 0.5)
    .style("visibility", "Hidden")
    .call(drag);

var focuseLine2x =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(47))
        .attr("y1",y(0.67))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y_1_1 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0.6))
        .attr("y2", y(0.6))
        .style("visibility", "visible");

var focuseLine2y_1_2 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0.2))
        .attr("y2", y(0.2))
        .style("visibility", "visible");

var focuseLine2y_2_1 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0.67))
        .attr("y2", y(0.67))
        .style("visibility", "visible");

var focuseLine2y_2_2 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "visible");

var focuseLine2y_3_1 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "Hidden");

var focuseLine2y_3_2 =
    svg4
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(47) )
        .attr("x2", x(35))
        .attr("y1",y(0))
        .attr("y2", y(0))
        .style("visibility", "Hidden");

var foucseXval =
    svg4.
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

var foucseYval_1_1 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0.6))
        .text("0.6")
        .style("visibility", "visible");

var foucseYval_1_2 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0.2))
        .text("0.2")
        .style("visibility", "visible");

var foucseYval_2_1 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +40)
        .attr("y", y(0.67))
        .text("0.67")
        .style("visibility", "visible");

var foucseYval_2_2 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left)+40 )
        .attr("y", y(0))
        .text("0")
        .style("visibility", "visible");

var foucseYval_3_1 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3_1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0))
        .text("0")
        .style("visibility", "Hidden");

var foucseYval_3_2 =
    svg4.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3_2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +5)
        .attr("y", y(0))
        .text("0")
        .style("visibility", "Hidden");

let y0_close_u=0.6;
let org_y0_close_u =0.6;
let y0_close_l=0.2;
let org_y0_close_l =0.2;
let y0_oky_u=0.67;
let org_y0_oky_u =0.67;
let y0_oky_l=0;
let org_y0_oky_l =0;
let y0_far_u=0;
let org_y0_far_u =0;
let y0_far_l=0;
let org_y0_far_l =0;
let org_x0 = 47;
let x0 =47;


function onStart() {
    let visible="Hidden";
    d3.select(this).raise().classed("active", true);
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标
    var vis_label1 = 'Hidden';

    var vis_label2 = 'Hidden';

    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 < 35){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'Hidden';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
        x0=35;
        org_x0=35;
    }
    else if(35<x0 && x0<=41){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =(x0 - 41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(41<x0 && x0<=43){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =(x0 - 41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(43<x0 && x0<=45){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=0.2 * (48 -x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;

    }
    else if(45<x0 && x0<=47){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_oky_u < org_y0_close_u){
            maxY=org_y0_close_u;
        }else{
            maxY=org_y0_oky_u;
        }

    }
    else if(47<x0 && x0<=48){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(48<x0 && x0<=50){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(50<x0 && x0<=52){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(52<x0 && x0<=53){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(53<x0 && x0<=55){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';


        if (org_y0_oky_u < org_y0_far_u){
            maxY=org_y0_far_u;
        }else{
            maxY=org_y0_oky_u;
        }
    }
    else if(55<x0 && x0<=57){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(57<x0 && x0<=59){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(59<x0 && x0<=61){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
else{
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
        x0=61;
        org_x0=61;
    }


    let selectedData_x_close_u = x0;
    let selectedData_y0_close_u = org_y0_close_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_oky_u = org_y0_oky_u.toFixed(2);
    let selectedData_x_far_u = x0;
    let selectedData_y0_far_u = org_y0_far_u.toFixed(2);
    let selectedData_x_close_l = x0;
    let selectedData_y0_close_l = org_y0_close_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_oky_l = org_y0_oky_l.toFixed(2);
    let selectedData_x_far_l = x0;
    let selectedData_y0_far_l = org_y0_far_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_u));
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_u));
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_u));
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_l));
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_l));
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_l));

    focusLabel1_1
        .html("(" + selectedData_x_close_u + ", "  + selectedData_y0_close_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_u)+45)
        .style("visibility", 'hidden')

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_oky_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_u)+45)
        .style("visibility", 'hidden')

    focusLabel3_1
        .html("(" + selectedData_x_far_u + ", "  + selectedData_y0_far_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_u)+45)
        .style("visibility", 'hidden')

    focusLabel1_2
        .html("(" + selectedData_x_close_l + ", "  + selectedData_y0_close_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_l)+45)
        .style("visibility", 'hidden')

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_oky_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_l)+45)
        .style("visibility", 'hidden')

    focusLabel3_2
        .html("(" + selectedData_x_far_l + ", "  + selectedData_y0_far_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_l)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", 'visible')

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_u))
        .attr("y2", y(org_y0_close_u))
        .style("visibility", vis_label1)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_u))
        .attr("y2", y(org_y0_oky_u))
        .style("visibility", vis_label2)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_u))
        .attr("y2", y(org_y0_far_u))
        .style("visibility", vis_label3)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_l))
        .attr("y2", y(org_y0_close_l))
        .style("visibility", vis_label1)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_l))
        .attr("y2", y(org_y0_oky_l))
        .style("visibility", vis_label2)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_l))
        .attr("y2", y(org_y0_far_l))
        .style("visibility", vis_label3)

    foucseYval_1_1
        .attr("y", y(org_y0_close_u))
        .text(selectedData_y0_close_u)
        .style("visibility", vis_label1);

    foucseYval_2_1
        .attr("y", y(org_y0_oky_u))
        .text(selectedData_y0_oky_u)
        .style("visibility", vis_label2);

    foucseYval_3_1
        .attr("y", y(org_y0_far_u))
        .text(selectedData_y0_far_u)
        .style("visibility", vis_label3);

    foucseYval_1_2
        .attr("y", y(org_y0_close_l))
        .text(selectedData_y0_close_l)
        .style("visibility", vis_label1);

    foucseYval_2_2
        .attr("y", y(org_y0_oky_l))
        .text(selectedData_y0_oky_l)
        .style("visibility", vis_label2);

    foucseYval_3_2
        .attr("y", y(org_y0_far_l))
        .text(selectedData_y0_far_l)
        .style("visibility", vis_label3);


    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", 'visible');
}

function onDrag() {
    let visible="Hidden";
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标

    var vis_label1 = 'Hidden';
    var vis_label2 = 'Hidden';
    var vis_label3 = 'Hidden';
    var maxY = 0;
    if(x0 <= 35){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'Hidden';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
        x0=35;
        org_x0=35;
    }
    else if(x0>35 && x0 <= 41){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'Hidden';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(41<x0 && x0<=43){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =(x0 - 41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(43<x0 && x0<=45){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=0.2 * (48 -x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;

    }
    else if(45<x0 && x0<=47){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_oky_u < org_y0_close_u){
            maxY=org_y0_close_u;
        }else{
            maxY=org_y0_oky_u;
        }

    }
    else if(47<x0 && x0<=48){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(48<x0 && x0<=50){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(50<x0 && x0<=52){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(52<x0 && x0<=53){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(53<x0 && x0<=55){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';


        if (org_y0_oky_u < org_y0_far_u){
            maxY=org_y0_far_u;
        }else{
            maxY=org_y0_oky_u;
        }
    }
    else if(55<x0 && x0<=57){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(57<x0 && x0<=59){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(59<x0 && x0<=61){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }else{
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
        x0=61;
        org_x0=61;
    }


    let selectedData_x_close_u = x0;
    let selectedData_y0_close_u = org_y0_close_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_oky_u = org_y0_oky_u.toFixed(2);
    let selectedData_x_far_u = x0;
    let selectedData_y0_far_u = org_y0_far_u.toFixed(2);
    let selectedData_x_close_l = x0;
    let selectedData_y0_close_l = org_y0_close_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_oky_l = org_y0_oky_l.toFixed(2);
    let selectedData_x_far_l = x0;
    let selectedData_y0_far_l = org_y0_far_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_u)).style("visibility", vis_label1);
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_u)).style("visibility", vis_label2);
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_u)).style("visibility", vis_label3);
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_l)).style("visibility", vis_label1);
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_l)).style("visibility", vis_label2);
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_l)).style("visibility", vis_label3);

    focusLabel1_1
        .html("(" + selectedData_x_close_u + ", "  + selectedData_y0_close_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_u)+45)
        .style("visibility", 'hidden')

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_oky_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_u)+45)
        .style("visibility", 'hidden')

    focusLabel3_1
        .html("(" + selectedData_x_far_u + ", "  + selectedData_y0_far_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_u)+45)
        .style("visibility", 'hidden')

    focusLabel1_2
        .html("(" + selectedData_x_close_l + ", "  + selectedData_y0_close_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_l)+45)
        .style("visibility", 'hidden')

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_oky_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_l)+45)
        .style("visibility", 'hidden')

    focusLabel3_2
        .html("(" + selectedData_x_far_l + ", "  + selectedData_y0_far_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_l)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", 'visible')

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_u))
        .attr("y2", y(org_y0_close_u))
        .style("visibility", vis_label1)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_u))
        .attr("y2", y(org_y0_oky_u))
        .style("visibility", vis_label2)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_u))
        .attr("y2", y(org_y0_far_u))
        .style("visibility", vis_label3)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_l))
        .attr("y2", y(org_y0_close_l))
        .style("visibility", vis_label1)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_l))
        .attr("y2", y(org_y0_oky_l))
        .style("visibility", vis_label2)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_l))
        .attr("y2", y(org_y0_far_l))
        .style("visibility", vis_label3)

    foucseYval_1_1
        .attr("y", y(org_y0_close_u))
        .text(selectedData_y0_close_u)
        .style("visibility", vis_label1);

    foucseYval_2_1
        .attr("y", y(org_y0_oky_u))
        .text(selectedData_y0_oky_u)
        .style("visibility", vis_label2);

    foucseYval_3_1
        .attr("y", y(org_y0_far_u))
        .text(selectedData_y0_far_u)
        .style("visibility", vis_label3);

    foucseYval_1_2
        .attr("y", y(org_y0_close_l))
        .text(selectedData_y0_close_l)
        .style("visibility", vis_label1);

    foucseYval_2_2
        .attr("y", y(org_y0_oky_l))
        .text(selectedData_y0_oky_l)
        .style("visibility", vis_label2);

    foucseYval_3_2
        .attr("y", y(org_y0_far_l))
        .text(selectedData_y0_far_l)
        .style("visibility", vis_label3);


    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", 'visible');

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

    if(x0 <= 35){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'Hidden';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
        x0=35;
        org_x0=35;
    }
    else if(x0 <= 41 && x0>35){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'Hidden';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(41<x0 && x0<=43){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=1;
        org_y0_close_l =1;
        vis_label1 = 'visible';

        y0_oky_u =(x0 - 41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;
    }
    else if(43<x0 && x0<=45){
        y0_close_u = 1;
        org_y0_close_u = 1;
        y0_close_l=0.2 * (48 -x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_close_u;

    }
    else if(45<x0 && x0<=47){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        if (org_y0_oky_u < org_y0_close_u){
            maxY=org_y0_close_u;
        }else{
            maxY=org_y0_oky_u;
        }

    }
    else if(47<x0 && x0<=48){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0.2 * (48 - x0);
        org_y0_close_l =0.2 * (48 -org_x0);
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(48<x0 && x0<=50){
        y0_close_u = 0.2 * (50 -x0);
        org_y0_close_u =0.2 * (50 -org_x0);
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'visible';

        y0_oky_u =(x0 -41)/9;
        org_y0_oky_u =(org_x0 -41)/9;
        y0_oky_l =(x0 -47)/3;
        org_y0_oky_l =(org_x0 -47)/3;
        vis_label2 = 'visible';

        y0_far_u =0;
        org_y0_far_u =0;
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'Hidden';

        maxY=org_y0_oky_u;
    }
    else if(50<x0 && x0<=52){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0;
        org_y0_far_l =0;
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(52<x0 && x0<=53){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =(53 - x0)/3;
        org_y0_oky_l =(53-org_x0)/3;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_oky_u;
    }
    else if(53<x0 && x0<=55){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =0.2 * (x0 - 50);
        org_y0_far_u =0.2 * (org_x0 - 50);
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';


        if (org_y0_oky_u < org_y0_far_u){
            maxY=org_y0_far_u;
        }else{
            maxY=org_y0_oky_u;
        }
    }
    else if(55<x0 && x0<=57){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =0.2 * (x0 - 52);
        org_y0_far_l =0.2 * (org_x0 - 52);
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(57<x0 && x0<=59){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =(59 - x0)/9;
        org_y0_oky_u =(59 - org_x0)/9;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'visible';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else if(59<x0 && x0<=61){
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
    }
    else{
        y0_close_u = 0;
        org_y0_close_u =0;
        y0_close_l=0;
        org_y0_close_l =0;
        vis_label1 = 'Hidden';

        y0_oky_u =0;
        org_y0_oky_u =0;
        y0_oky_l =0;
        org_y0_oky_l =0;
        vis_label2 = 'hidden';

        y0_far_u =1;
        org_y0_far_u =1;
        y0_far_l =1;
        org_y0_far_l =1;
        vis_label3 = 'visible';

        maxY=org_y0_far_u;
        x0=61;
        org_x0=61;
    }


    let selectedData_x_close_u = x0;
    let selectedData_y0_close_u = org_y0_close_u.toFixed(2);
    let selectedData_x_okay_u = x0;
    let selectedData_y0_oky_u = org_y0_oky_u.toFixed(2);
    let selectedData_x_far_u = x0;
    let selectedData_y0_far_u = org_y0_far_u.toFixed(2);
    let selectedData_x_close_l = x0;
    let selectedData_y0_close_l = org_y0_close_l.toFixed(2);
    let selectedData_x_okay_l = x0;
    let selectedData_y0_oky_l = org_y0_oky_l.toFixed(2);
    let selectedData_x_far_l = x0;
    let selectedData_y0_far_l = org_y0_far_l.toFixed(2);

    circle1_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_u)).style("visibility", vis_label1);
    circle2_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_u)).style("visibility", vis_label2);
    circle3_1.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_u)).style("visibility", vis_label3);
    circle1_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_close_l)).style("visibility", vis_label1);
    circle2_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_oky_l)).style("visibility", vis_label2);
    circle3_2.attr("cx", x(org_x0)).attr("cy", y(org_y0_far_l)).style("visibility", vis_label3);

    focusLabel1_1
        .html("(" + selectedData_x_close_u + ", "  + selectedData_y0_close_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_u)+45)
        .style("visibility", 'hidden')

    focusLabel2_1
        .html("(" + selectedData_x_okay_u + ", "  + selectedData_y0_oky_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_u)+45)
        .style("visibility", 'hidden')

    focusLabel3_1
        .html("(" + selectedData_x_far_u + ", "  + selectedData_y0_far_u+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_u)+45)
        .style("visibility", 'hidden')

    focusLabel1_2
        .html("(" + selectedData_x_close_l + ", "  + selectedData_y0_close_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_close_l)+45)
        .style("visibility", 'hidden')

    focusLabel2_2
        .html("(" + selectedData_x_okay_l + ", "  + selectedData_y0_oky_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_oky_l)+45)
        .style("visibility", 'hidden')

    focusLabel3_2
        .html("(" + selectedData_x_far_l + ", "  + selectedData_y0_far_l+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_far_l)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_u))
        .attr("y2", y(org_y0_close_u))
        .style("visibility", vis_label1)
    focuseLine2y_2_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_u))
        .attr("y2", y(org_y0_oky_u))
        .style("visibility", vis_label2)
    focuseLine2y_3_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_u))
        .attr("y2", y(org_y0_far_u))
        .style("visibility", vis_label3)

    focuseLine2y_1_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_close_l))
        .attr("y2", y(org_y0_close_l))
        .style("visibility", vis_label1)
    focuseLine2y_2_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_oky_l))
        .attr("y2", y(org_y0_oky_l))
        .style("visibility", vis_label2)
    focuseLine2y_3_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_far_l))
        .attr("y2", y(org_y0_far_l))
        .style("visibility", vis_label3)

    foucseYval_1_1
        .attr("y", y(org_y0_close_u))
        .text(selectedData_y0_close_u)
        .style("visibility", vis_label1);

    foucseYval_2_1
        .attr("y", y(org_y0_oky_u))
        .text(selectedData_y0_oky_u)
        .style("visibility", vis_label2);

    foucseYval_3_1
        .attr("y", y(org_y0_far_u))
        .text(selectedData_y0_far_u)
        .style("visibility", vis_label3);

    foucseYval_1_2
        .attr("y", y(org_y0_close_l))
        .text(selectedData_y0_close_l)
        .style("visibility", vis_label1);

    foucseYval_2_2
        .attr("y", y(org_y0_oky_l))
        .text(selectedData_y0_oky_l)
        .style("visibility", vis_label2);

    foucseYval_3_2
        .attr("y", y(org_y0_far_l))
        .text(selectedData_y0_far_l)
        .style("visibility", vis_label3);


    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);

    document.getElementById("dst_close_u_x1").innerHTML = x0;
    document.getElementById("dst_close_u_x2").innerHTML = x0;
    document.getElementById("dst_close_u_x3").innerHTML = x0;
    document.getElementById("dst_close_l_x1").innerHTML = x0;
    document.getElementById("dst_close_l_x2").innerHTML = x0;
    document.getElementById("dst_close_l_x3").innerHTML = x0;
    document.getElementById("dst_close_y_u").innerHTML = org_y0_close_u.toFixed(2);
    document.getElementById("dst_oky_y_u").innerHTML = org_y0_oky_u.toFixed(2);
    document.getElementById("dst_far_y_u").innerHTML = org_y0_far_u.toFixed(2);
    document.getElementById("dst_close_y_l").innerHTML = org_y0_close_l.toFixed(2);
    document.getElementById("dst_oky_y_l").innerHTML = org_y0_oky_l.toFixed(2);
    document.getElementById("dst_far_y_l").innerHTML = org_y0_far_l.toFixed(2);

    document.getElementById("dst_close_u_x1_a").innerHTML = x0;
    document.getElementById("dst_close_l_x2_a").innerHTML = x0;
    document.getElementById("dst_close_u_y_a").innerHTML = org_y0_close_u.toFixed(2);
    document.getElementById("dst_close_l_y_a").innerHTML = org_y0_close_l.toFixed(2);

    document.getElementById("dst_close_u_x1_b").innerHTML = x0;
    document.getElementById("dst_close_l_x2_b").innerHTML = x0;
    document.getElementById("dst_close_u_y_b").innerHTML = org_y0_close_u.toFixed(2);
    document.getElementById("dst_close_l_y_b").innerHTML = org_y0_close_l.toFixed(2);

    document.getElementById("dst_close_u_x1_c").innerHTML = x0;
    document.getElementById("dst_close_l_x2_c").innerHTML = x0;
    document.getElementById("dst_close_u_y_c").innerHTML = org_y0_close_u.toFixed(2);
    document.getElementById("dst_close_l_y_c").innerHTML = org_y0_close_l.toFixed(2);

    document.getElementById("dst_oky_u_x1_d").innerHTML = x0;
    document.getElementById("dst_oky_l_x2_d").innerHTML = x0;
    document.getElementById("dst_oky_u_y_d").innerHTML = org_y0_oky_u.toFixed(2);
    document.getElementById("dst_oky_l_y_d").innerHTML = org_y0_oky_l.toFixed(2);

    document.getElementById("dst_oky_u_x1_e").innerHTML = x0;
    document.getElementById("dst_oky_l_x2_e").innerHTML = x0;
    document.getElementById("dst_oky_u_y_e").innerHTML = org_y0_oky_u.toFixed(2);
    document.getElementById("dst_oky_l_y_e").innerHTML = org_y0_oky_l.toFixed(2);

    document.getElementById("dst_oky_u_x1_f").innerHTML = x0;
    document.getElementById("dst_oky_l_x2_f").innerHTML = x0;
    document.getElementById("dst_oky_u_y_f").innerHTML = org_y0_oky_u.toFixed(2);
    document.getElementById("dst_oky_l_y_f").innerHTML = org_y0_oky_l.toFixed(2);

    document.getElementById("dst_far_u_x1_g").innerHTML = x0;
    document.getElementById("dst_far_l_x2_g").innerHTML = x0;
    document.getElementById("dst_far_u_y_g").innerHTML = org_y0_far_u.toFixed(2);
    document.getElementById("dst_far_l_y_g").innerHTML = org_y0_far_l.toFixed(2);

    document.getElementById("dst_far_u_x1_h").innerHTML = x0;
    document.getElementById("dst_far_l_x2_h").innerHTML = x0;
    document.getElementById("dst_far_u_y_h").innerHTML = org_y0_far_u.toFixed(2);
    document.getElementById("dst_far_l_y_h").innerHTML = org_y0_far_l.toFixed(2);

    document.getElementById("dst_far_u_x1_i").innerHTML = x0;
    document.getElementById("dst_far_l_x2_i").innerHTML = x0;
    document.getElementById("dst_far_u_y_i").innerHTML = org_y0_far_u.toFixed(2);
    document.getElementById("dst_far_l_y_i").innerHTML = org_y0_far_l.toFixed(2);

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

    document.getElementById("dst_x1_t2").innerHTML = x0;
    document.getElementById("dst_x2_t2").innerHTML = x0;
    document.getElementById("dst_x3_t2").innerHTML = x0;

    var result_l =
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
    var result_u =
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
    var result_y = (result_l + result_u) / 2;
    document.getElementById("y_l").innerHTML =result_l.toFixed(2)
    document.getElementById("y_r").innerHTML =result_u.toFixed(2)
    document.getElementById("y_l_l").innerHTML =result_l.toFixed(2)
    document.getElementById("y_r_r").innerHTML =result_u.toFixed(2)
    document.getElementById("result_y").innerHTML =result_y.toFixed(2)
}

import { y0_slow_u, y0_slow_l,y0_fast_u,y0_fast_l,y0_okay_u,y0_okay_l } from './T2_Fuzzy_exp_speed_drag.js';
import {y1_u,y2_u,y3_u,y4_u,y5_u,y6_u,y7_u,y8_u,y9_u, y1_l,y2_l,y3_l,y4_l,y5_l,y6_l,y7_l,y8_l,y9_l} from './T2_Fuzzy_exp_speed_drag.js';

document.getElementById("dst_close_u_x1").innerHTML = x0;
document.getElementById("dst_close_u_x2").innerHTML = x0;
document.getElementById("dst_close_u_x3").innerHTML = x0;
document.getElementById("dst_close_l_x1").innerHTML = x0;
document.getElementById("dst_close_l_x2").innerHTML = x0;
document.getElementById("dst_close_l_x3").innerHTML = x0;
document.getElementById("dst_close_y_u").innerHTML = org_y0_close_u.toFixed(2);
document.getElementById("dst_oky_y_u").innerHTML = org_y0_oky_u.toFixed(2);
document.getElementById("dst_far_y_u").innerHTML = org_y0_far_u.toFixed(2);
document.getElementById("dst_close_y_l").innerHTML = org_y0_close_l.toFixed(2);
document.getElementById("dst_oky_y_l").innerHTML = org_y0_oky_l.toFixed(2);
document.getElementById("dst_far_y_l").innerHTML = org_y0_far_l.toFixed(2);

document.getElementById("dst_close_u_x1_a").innerHTML = x0;
document.getElementById("dst_close_l_x2_a").innerHTML = x0;
document.getElementById("dst_close_u_y_a").innerHTML = org_y0_close_u.toFixed(2);
document.getElementById("dst_close_l_y_a").innerHTML = org_y0_close_l.toFixed(2);

document.getElementById("dst_close_u_x1_b").innerHTML = x0;
document.getElementById("dst_close_l_x2_b").innerHTML = x0;
document.getElementById("dst_close_u_y_b").innerHTML = org_y0_close_u.toFixed(2);
document.getElementById("dst_close_l_y_b").innerHTML = org_y0_close_l.toFixed(2);

document.getElementById("dst_close_u_x1_c").innerHTML = x0;
document.getElementById("dst_close_l_x2_c").innerHTML = x0;
document.getElementById("dst_close_u_y_c").innerHTML = org_y0_close_u.toFixed(2);
document.getElementById("dst_close_l_y_c").innerHTML = org_y0_close_l.toFixed(2);

document.getElementById("dst_oky_u_x1_d").innerHTML = x0;
document.getElementById("dst_oky_l_x2_d").innerHTML = x0;
document.getElementById("dst_oky_u_y_d").innerHTML = org_y0_oky_u.toFixed(2);
document.getElementById("dst_oky_l_y_d").innerHTML = org_y0_oky_l.toFixed(2);

document.getElementById("dst_oky_u_x1_e").innerHTML = x0;
document.getElementById("dst_oky_l_x2_e").innerHTML = x0;
document.getElementById("dst_oky_u_y_e").innerHTML = org_y0_oky_u.toFixed(2);
document.getElementById("dst_oky_l_y_e").innerHTML = org_y0_oky_l.toFixed(2);

document.getElementById("dst_oky_u_x1_f").innerHTML = x0;
document.getElementById("dst_oky_l_x2_f").innerHTML = x0;
document.getElementById("dst_oky_u_y_f").innerHTML = org_y0_oky_u.toFixed(2);
document.getElementById("dst_oky_l_y_f").innerHTML = org_y0_oky_l.toFixed(2);

document.getElementById("dst_far_u_x1_g").innerHTML = x0;
document.getElementById("dst_far_l_x2_g").innerHTML = x0;
document.getElementById("dst_far_u_y_g").innerHTML = org_y0_far_u.toFixed(2);
document.getElementById("dst_far_l_y_g").innerHTML = org_y0_far_l.toFixed(2);

document.getElementById("dst_far_u_x1_h").innerHTML = x0;
document.getElementById("dst_far_l_x2_h").innerHTML = x0;
document.getElementById("dst_far_u_y_h").innerHTML = org_y0_far_u.toFixed(2);
document.getElementById("dst_far_l_y_h").innerHTML = org_y0_far_l.toFixed(2);

document.getElementById("dst_far_u_x1_i").innerHTML = x0;
document.getElementById("dst_far_l_x2_i").innerHTML = x0;
document.getElementById("dst_far_u_y_i").innerHTML = org_y0_far_u.toFixed(2);
document.getElementById("dst_far_l_y_i").innerHTML = org_y0_far_l.toFixed(2);

document.getElementById("dst_x1_t2").innerHTML = x0;
document.getElementById("dst_x2_t2").innerHTML = x0;
document.getElementById("dst_x3_t2").innerHTML = x0;

export { y0_close_u,  y0_close_l};
export { y0_oky_u, y0_oky_l };
export { y0_far_u, y0_far_l };
