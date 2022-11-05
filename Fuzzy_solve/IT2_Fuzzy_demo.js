// set the dimensions and margins of the graph
var margin = {top: 3, right: 90, bottom: 80, left: 90},
    width = 400,
    height = 350 - margin.top - margin.bottom;


// append the svg object to the body of the page
var svg3 = d3.select("#IT2FuzzyExp")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;

//Read the data
var data1 =
    [{'x':1,'y':0},{'x':3,'y':1}, {'x':6,'y':1}, {'x':8,'y':0}];
var data2 =
    [{'x':1,'y':0},{'x':2,'y':0}, {'x':5,'y':0.75}, {'x':6,'y':0}, {'x':8,'y':0}];


var color1 = 'blue';
var color2 = 'green';
var color3 = 'black';
var color= 'red';

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([0,9])
    .range([ 0, width ]);


// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1.5])
    .range([ height, 0 ]);


//x轴设置
var xAxis = d3.axisBottom(x).tickValues([0,1,2,3,4,5,6,7,8]);

//y轴设置
var yAxis = d3.axisLeft(y);

//y轴设置
var yAxis = d3.axisLeft(y);

svg3.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("stroke", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg3.append("g")
    .attr("class", "y axis")
    .attr("stroke", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);

svg3.append("g")
    .attr("class", "y axis")
    .append("text")
    .attr("class", "axis-label")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left)+30)
    .attr("y", height *0.05)
    .text('u');

svg3.append("g")
    .append("text")
    .style('font-size', '22px')
    .style('font-style', 'italic')
    .style('font-family', 'Times New Roman')
    .attr("x", -(margin.left) + 280)
    .attr("y", height*0.3)
    .text('X̃');

svg3.append("g")
    .append("text")
    .attr("class", "axis-label")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-style', 'italic')
    .style('font-family', 'Times New Roman')
    .attr("x", -(margin.left) + 500)
    .attr("y", height + 40)
    .text('x');

svg3.append("g")
    .append("text")
    .style('font-size', '22px')
    .style('font-style', 'italic')
    .style('font-family', 'Times New Roman')
    .attr("x", -(margin.left) + 400)
    .attr("y", height*0.65)
    .text('UMF')
    .style("fill", color1)
    .attr("fill-width", 2);

svg3.append("g")
    .append("text")
    .style('font-size', '22px')
    .style('font-style', 'italic')
    .style('font-family', 'Times New Roman')
    .attr("x", -(margin.left) + 350)
    .attr("y", height*0.9)
    .text('LMF')
    .style("fill", color2)
    .attr("fill-width", 2);

svg3.append("g")
    .append("text")
    .style('font-size', '22px')
    .style('font-style', 'italic')
    .style('font-family', 'Times New Roman')
    .attr("x", -(margin.left) + 280)
    .attr("y", height*0.45)
    .text('FOU')
    .style("fill", color)
    .attr("fill-width", 2);




// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


// Add the line
svg3
    .append("path")
    .datum(data1)
    .attr("fill", "none")
    .attr("stroke", color1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )
svg3
    .append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", color2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )




var focusLabel1 =
    svg3
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color1)
        .style('font-family', 'Times New Roman')

var focusLabel2 =
    svg3
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color2)
        .style('font-family', 'Times New Roman')

var drag = d3.drag()
    .on("start", onStart)
    .on("drag", onDrag)
    .on("end", onEnd);

var circle1 = svg3
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(1))
    .attr("r", 10)
    .style("fill", color1)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);
var circle2 = svg3
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.5))
    .attr("r", 10)
    .style("fill", color2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var focuseLine2LMF =
    svg3
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", "red")
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(4))
        .attr("y1",y(1))
        .attr("y2", y(0.5))
        .style("visibility", "visible");

var focuseLine2x =
    svg3
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color3)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(4))
        .attr("y1",y(0.5))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y_1 =
    svg3
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color3)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(0))
        .attr("y1",y(1))
        .attr("y2", y(1))
        .style("visibility", "visible");

var focuseLine2y_2 =
    svg3
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color3)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(0))
        .attr("y1",y(0.5))
        .attr("y2", y(0.5))
        .style("visibility", "visible");

var foucseXval =
    svg3.
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

var foucseYval_1 =
    svg3.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(1))
        .text("1.00")
        .style("visibility", "visible");

var foucseYval_2 =
    svg3.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0.5))
        .text("0.5")
        .style("visibility", "visible");

let y0_umf=1;
let org_y0_umf =1;
let y0_lmf =0.75;
let org_y0_lmf =0.75;
let org_x0 = 5;
let x0 =5;


function onStart() {
    let visible="Hidden";
    d3.select(this).raise().classed("active", true);
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标
    var vis_label1 = 'Hidden';

    var vis_label2 = 'Hidden';

    var maxY = 0;

    if(x0<=1 && x0>=0){
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;
    }
    else if(1< x0 && x0 <=2){

        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf =0.5 *(org_x0 - 1);
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;
    }

    else if(2<x0 && x0<=3){
        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf = 0.5 *(org_x0 - 1);
        vis_label1 = 'visible';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(3<x0 && x0<=5){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'visible';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(5<x0 && x0<=6){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'visible';

        y0_lmf =0.75 *(6-x0);
        org_y0_lmf =0.75 *(6-org_x0);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(6<x0 && x0<=8){
        y0_umf= 0.5 *(8-x0);
        org_y0_umf = 0.5 *(8-org_x0);
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }

    else if(x0>8 && x0<=9){
        y0_umf= 0;
        org_y0_umf = 0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=0;

    }else if(9< x0){

        y0_umf= 0;
        org_y0_umf = 0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=0;
        x0 = 9;
        org_x0 = 9;
    }
    else{
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;
        x0 = 0;
        org_x0 = 0;
    }


    let selectedData_x_umf = x0;
    let selectedData_y0_umf = org_y0_umf.toFixed(2);
    let selectedData_x_lmf = x0;
    let selectedData_y0_lmf = org_y0_lmf.toFixed(2);


    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_umf));
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_lmf));


    focusLabel1
        .html("(" + selectedData_x_umf + ", "  + selectedData_y0_umf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_umf)+45)
        .style("visibility", 'hidden')

    focusLabel2
        .html("(" + selectedData_x_lmf + ", "  + selectedData_y0_lmf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_lmf)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(0))
        .style("visibility", 'visible')

    focuseLine2LMF
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", 'visible')

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_umf))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", vis_label2)

    foucseYval_1
        .attr("y", y(org_y0_umf))
        .text(selectedData_y0_umf)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_lmf))
        .text(selectedData_y0_lmf)
        .style("visibility", vis_label2);

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
    var maxY = 0;

    if(x0<=1 && x0>=0){
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=0;
    }
    else if(1< x0 && x0 <=2){

        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf =0.5 *(org_x0 - 1);
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;
    }

    else if(2<x0 && x0<=3){
        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf = 0.5 *(org_x0 - 1);
        vis_label1 = 'visible';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(3<x0 && x0<=5){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'visible';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(5<x0 && x0<=6){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'visible';

        y0_lmf =0.75 *(6-x0);
        org_y0_lmf =0.75 *(6-org_x0);
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(6<x0 && x0<=8){
        y0_umf= 0.5 *(8-x0);
        org_y0_umf = 0.5 *(8-org_x0);
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=org_y0_umf - org_y0_lmf;

    }

    else if (x0<=9 && x0>8){
        y0_umf= 0;
        org_y0_umf = 0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;

    }
    else if(9< x0){

    y0_umf= 0;
    org_y0_umf = 0;
    vis_label1 = 'visible';

    y0_lmf =0;
    org_y0_lmf =0;
    vis_label2 = 'Hidden';

    maxY=0;
    x0 = 9;
    org_x0 = 9;
}
else{
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'visible';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'visible';

        maxY=0;
        x0 = 0;
        org_x0 = 0;
}



    let selectedData_x_umf = x0;
    let selectedData_y0_umf = org_y0_umf.toFixed(2);
    let selectedData_x_lmf = x0;
    let selectedData_y0_lmf = org_y0_lmf.toFixed(2);


    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_umf));
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_lmf));


    focusLabel1
        .html("(" + selectedData_x_umf + ", "  + selectedData_y0_umf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_umf)+45)
        .style("visibility", 'hidden')

    focusLabel2
        .html("(" + selectedData_x_lmf + ", "  + selectedData_y0_lmf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_lmf)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(0))
        .style("visibility", 'visible')

    focuseLine2LMF
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", 'visible')

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_umf))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", vis_label2)

    foucseYval_1
        .attr("y", y(org_y0_umf))
        .text(selectedData_y0_umf)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_lmf))
        .text(selectedData_y0_lmf)
        .style("visibility", vis_label2);

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
    var maxY = 0;

    if(x0<=1 && x0>=0){
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;
    }
    else if(1< x0 && x0 <=2){

        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf =0.5 *(org_x0 - 1);
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=org_y0_umf - org_y0_lmf;
    }

    else if(2<x0 && x0<=3){
        y0_umf= 0.5 *(x0 - 1);
        org_y0_umf = 0.5 *(org_x0 - 1);
        vis_label1 = 'Hidden';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'Hidden';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(3<x0 && x0<=5){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'Hidden';

        y0_lmf =0.25 *(x0 - 2);
        org_y0_lmf =0.25 *(org_x0 - 2);
        vis_label2 = 'Hidden';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(5<x0 && x0<=6){
        y0_umf= 1;
        org_y0_umf = 1;
        vis_label1 = 'Hidden';

        y0_lmf =0.75 *(6-x0);
        org_y0_lmf =0.75 *(6-org_x0);
        vis_label2 = 'Hidden';

        maxY=org_y0_umf - org_y0_lmf;

    }
    else if(6<x0 && x0<=8){
        y0_umf= 0.5 *(8-x0);
        org_y0_umf = 0.5 *(8-org_x0);
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=org_y0_umf - org_y0_lmf;

    }

    else if (8<x0 && x0<=9){
        y0_umf= 0;
        org_y0_umf = 0;
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;

    }
    else if(9< x0){

        y0_umf= 0;
        org_y0_umf = 0;
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;
        x0 = 9;
        org_x0 = 9;
    }
    else{
        y0_umf=0;
        org_y0_umf =0;
        vis_label1 = 'Hidden';

        y0_lmf =0;
        org_y0_lmf =0;
        vis_label2 = 'Hidden';

        maxY=0;
        x0 = 0;
        org_x0 = 0;
    }

    let selectedData_x_umf = x0;
    let selectedData_y0_umf = org_y0_umf.toFixed(2);
    let selectedData_x_lmf = x0;
    let selectedData_y0_lmf = org_y0_lmf.toFixed(2);


    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_umf));
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_lmf));


    focusLabel1
        .html("(" + selectedData_x_umf + ", "  + selectedData_y0_umf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_umf)+45)
        .style("visibility", vis_label1)

    focusLabel2
        .html("(" + selectedData_x_lmf + ", "  + selectedData_y0_lmf+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_lmf)+45)
        .style("visibility", vis_label2)

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2LMF
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_umf))
        .attr("y2", y(org_y0_umf))
        .style("visibility", visible)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_lmf))
        .attr("y2", y(org_y0_lmf))
        .style("visibility", visible)

    foucseYval_1
        .attr("y", y(org_y0_umf))
        .text(selectedData_y0_umf)
        .style("visibility", visible);

    foucseYval_2
        .attr("y", y(org_y0_lmf))
        .text(selectedData_y0_lmf)
        .style("visibility", visible);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);
}
