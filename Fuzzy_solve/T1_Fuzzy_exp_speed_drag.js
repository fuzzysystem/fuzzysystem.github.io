// set the dimensions and margins of the graph
var margin = {top: 3, right: 90, bottom: 80, left: 90},
    width = 400,
    height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#T1FuzzyExp_b")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
;

//Read the data

var data1 =
        [{'x':-10,'y':1},{'x':-5,'y':1}, {'x':0,'y':0}];
var data2 =
        [{'x':-5,'y':0},{'x':0,'y':1}, {'x':5,'y':0}];
var data3 =
        [{'x':0,'y':0},{'x':5,'y':1}, {'x':10,'y':1}];

var color1 = 'darkslateblue';
var color2 = 'darkorange';
var color3 = 'firebrick';
var color='red';

// Add X axis --> it is a date format
var x = d3.scaleLinear()
    .domain([-10,10])
    .range([ 0, width ]);


// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1.5])
    .range([ height, 0 ]);


//x轴设置
var xAxis = d3.axisBottom(x).tickValues([ -5,0, 5]);

//y轴设置
var yAxis = d3.axisLeft(y);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("fill", "black")
    .attr("fill-width", "2px")
    .style('font-size', '20px')
    .style('font-family', "Times New Roman")
    .call(yAxis);


svg.append("g")
    .append("text")
    .attr("fill", color1)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 120)
    .attr("y", height*0.25)
    .text('Slow');

svg.append("g")
    .append("text")
    .attr("fill", color2)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 265)
    .attr("y", height*0.25)
    .text('Okay');

svg.append("g")
    .append("text")
    .attr("fill", color3)
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'italic')
    .attr("x", -(margin.left) + 450)
    .attr("y", height*0.25)
    .text('Fast');

svg.append("g")
    .append("text")
    .attr("fill", "black")
    .style('font-size', '22px')
    .attr("fill-width", "3px")
    .style('font-family', 'Times New Roman')
    .style('font-style', 'normal')
    .attr("x", -(margin.left) + 170)
    .attr("y", height + 75)
    .text('Relative Speed (KM/h)');

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;


// Add the line
svg
    .append("path")
    .datum(data1)
    .attr("fill", "none")
    .attr("stroke", color1)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )
svg
    .append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", color2)
    .attr("stroke-width", 3)
    .attr("d", d3.line()
        .x(function(d) { return x(d.x) })
        .y(function(d) { return y(d.y) })
    )
svg
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
    svg
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color1)
        .style('font-family', 'Times New Roman')


var focusLabel2 =
    svg
        .append('g')
        .append('text')
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")
        .style('font-size', '24px')
        .attr('font-weight', 600)
        .attr('fill', color2)
        .style('font-family', 'Times New Roman')

var focusLabel3 =
    svg
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

var circle1 = svg
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(-0.8))
    .attr("r", 10)
    .style("fill", color1)
    .style("opacity", 0.5)
    .style("visibility", "Hidden")
    .call(drag);
var circle2 = svg
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.2))
    .attr("r", 10)
    .style("fill", color2)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var circle3 = svg
    .append("circle")
    .attr("cx", x(4))
    .attr("cy", y(0.8))
    .attr("r", 10)
    .style("fill", color3)
    .style("opacity", 0.5)
    .style("visibility", "visible")
    .call(drag);

var focuseLine2x =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", "red")
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(4))
        .attr("y1",y(0.8))
        .attr("y2", y(0))
        .style("visibility", "visible");


var focuseLine2y_1 =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-10))
        .attr("y1",y(-0.8))
        .attr("y2", y(-0.8))
        .style("visibility", "hidden");

var focuseLine2y_2 =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-10))
        .attr("y1",y(0.2))
        .attr("y2", y(0.2))
        .style("visibility", "visible");

var focuseLine2y_3 =
    svg
        .append('line')
        .style("stroke-dasharray","5,5")//dashed array for line
        .style("stroke", color)
        .attr("stroke-width", 3)
        .attr("x1",x(4) )
        .attr("x2", x(-10))
        .attr("y1",y(0.8))
        .attr("y2", y(0.8))
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
        .attr("x", x(4) - 10)
        .attr("y", height + 45)
        .text("4")
        .style("visibility", "visible");

var foucseYval_1 =
    svg.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color1)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(-0.8))
        .text("-0.8")
        .style("visibility", "hidden");

var foucseYval_2 =
    svg.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color2)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0.2))
        .text("0.2")
        .style("visibility", "visible");

var foucseYval_3 =
    svg.append("g")
        .append("text")
        .attr("class", "y axis-value")
        .style('font-size', '22px')
        .style("fill", color3)
        .attr("fill-width", 2)
        .style('font-family', 'Times New Roman')
        .attr("x", -(margin.left) +2)
        .attr("y", y(0.8))
        .text("0.8")
        .style("visibility", "visible");

let y0_slow=0.0;
let org_y0_slow =0.0;
let y0_okay =0.2;
let org_y0_okay = 0.2;
let y0_fast = 0.8;
let org_y0_fast = 0.8;
let org_x0 = 4;
let x0 =4;



function onStart() {
    let visible="Visible";
    d3.select(this).raise().classed("active", true);
    org_x0 = x.invert(d3.mouse(this)[0])
    x0 = Number(x.invert(d3.mouse(this)[0]).toFixed(2)); // 读x坐标
    var vis_label1 = 'Hidden';

    var vis_label2 = 'Hidden';

    var vis_label3 = 'Hidden';
    var maxY = 0;

    if(x0 <= -5 && x0 >= -10){
        y0_slow=1;
        org_y0_slow =1;
        vis_label1 = 'visible';

        y0_okay =0;
        org_y0_okay =0;
        vis_label2 = 'Hidden';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(-5< x0 && x0 <=0){
        y0_slow=0.2 * (0 - x0);
        org_y0_slow =0.2 * (0 - org_x0);
        vis_label1 = 'visible';

        y0_okay = 0.2 * (x0 + 5);
        org_y0_okay = 0.2 * (org_x0 +5);
        vis_label2 = 'visible';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        if (org_y0_slow > org_y0_okay){
            maxY = org_y0_slow
        }else{
            maxY = org_y0_okay
        }

    }

    else if(0<x0 && x0<=5){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'


        y0_okay = 0.2 * (5 - x0);
        org_y0_okay = 0.2 * (5 - org_x0);
        vis_label2 = 'visible';


        y0_fast =0.2 * (x0 -0);
        org_y0_fast =0.2 * (org_x0 - 0);
        vis_label3 = 'visible';

        if (org_y0_fast > org_y0_okay){
            maxY = org_y0_fast
        }else{
            maxY = org_y0_okay
        }

    }

    else if(5<x0 && x0<=10){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;

    }

    else if(x0<-10){
        y0_slow = 1;
        org_y0_slow = 1;
        vis_label1 = 'visible'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY = org_y0_slow;
        x0= -10;
        org_x0 = -10;

    }

    else{
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;
        x0=10;
        org_x0=10;

    }


    let selectedData_x_slow = x0;
    let selectedData_y0_slow = org_y0_slow.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_okay = org_y0_okay.toFixed(2);
    let selectedData_x_fast = x0;
    let selectedData_y0_fast = org_y0_fast.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow));
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay));
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast));

    focusLabel1
        .html("(" + selectedData_x_slow + ", "  + selectedData_y0_slow+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow)+45)
        .style("visibility", "hidden")

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_okay+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay)+45)
        .style("visibility", "hidden")

    focusLabel3
        .html("(" + selectedData_x_fast + ", "  + selectedData_y0_fast+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast)+45)
        .style("visibility", "hidden")

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow))
        .attr("y2", y(org_y0_slow))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay))
        .attr("y2", y(org_y0_okay))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast))
        .attr("y2", y(org_y0_fast))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_slow))
        .text(selectedData_y0_slow)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_okay))
        .text(selectedData_y0_okay)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_fast))
        .text(selectedData_y0_fast)
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

    if(x0 <= -5 && x0>= -10){
        y0_slow=1;
        org_y0_slow =1;
        vis_label1 = 'visible';

        y0_okay =0;
        org_y0_okay =0;
        vis_label2 = 'Hidden';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(-5< x0 && x0 <=0){
        y0_slow=0.2 * (0 - x0);
        org_y0_slow =0.2 * (0 - org_x0);
        vis_label1 = 'visible';

        y0_okay = 0.2 * (x0 + 5);
        org_y0_okay = 0.2 * (org_x0 +5);
        vis_label2 = 'visible';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        if (org_y0_slow > org_y0_okay){
            maxY = org_y0_slow
        }else{
            maxY = org_y0_okay
        }

    }

    else if(0<x0 && x0<=5){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'


        y0_okay = 0.2 * (5 - x0);
        org_y0_okay = 0.2 * (5 - org_x0);
        vis_label2 = 'visible';


        y0_fast =0.2 * (x0 -0);
        org_y0_fast =0.2 * (org_x0 - 0);
        vis_label3 = 'visible';

        if (org_y0_fast > org_y0_okay){
            maxY = org_y0_fast
        }else{
            maxY = org_y0_okay
        }

    }
    else if (x0 >5 && x0<=10){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;
    }

    else if(x0 < -10){
        y0_slow = 1;
        org_y0_slow = 1;
        vis_label1 = 'visible'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY = org_y0_slow;
        x0= -10;
        org_x0= -10;

    }

    else{
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;
        x0=10;
        org_x0=10;

    }


    let selectedData_x_slow = x0;
    let selectedData_y0_slow = org_y0_slow.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_okay = org_y0_okay.toFixed(2);
    let selectedData_x_fast = x0;
    let selectedData_y0_fast = org_y0_fast.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow)).style("visibility", vis_label1);
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay)).style("visibility", vis_label2);
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast)).style("visibility", vis_label3);

    focusLabel1
        .html("(" + selectedData_x_slow + ", "  + selectedData_y0_slow+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow)+45)
        .style("visibility", 'Hidden')

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_okay+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay)+45)
        .style("visibility", 'Hidden')

    focusLabel3
        .html("(" + selectedData_x_fast + ", "  + selectedData_y0_fast+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast)+45)
        .style("visibility", 'Hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow))
        .attr("y2", y(org_y0_slow))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay))
        .attr("y2", y(org_y0_okay))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast))
        .attr("y2", y(org_y0_fast))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_slow))
        .text(selectedData_y0_slow)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_okay))
        .text(selectedData_y0_okay)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_fast))
        .text(selectedData_y0_fast)
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

    if(x0 <= -5 && x0>-10){
        y0_slow=1;
        org_y0_slow =1;
        vis_label1 = 'visible';

        y0_okay =0;
        org_y0_okay =0;
        vis_label2 = 'Hidden';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY=1;
    }

    else if(-5< x0 && x0 <=0){
        y0_slow=0.2 * (0 - x0);
        org_y0_slow =0.2 * (0 - org_x0);
        vis_label1 = 'visible';

        y0_okay = 0.2 * (x0 + 5);
        org_y0_okay = 0.2 * (org_x0 +5);
        vis_label2 = 'visible';

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        if (org_y0_slow > org_y0_okay){
            maxY = org_y0_slow
        }else{
            maxY = org_y0_okay
        }

    }

    else if(0<x0 && x0<=5){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'


        y0_okay = 0.2 * (5 - x0);
        org_y0_okay = 0.2 * (5 - org_x0);
        vis_label2 = 'visible';


        y0_fast =0.2 * (x0 -0);
        org_y0_fast =0.2 * (org_x0 - 0);
        vis_label3 = 'visible';

        if (org_y0_fast > org_y0_okay){
            maxY = org_y0_fast
        }else{
            maxY = org_y0_okay
        }

    }
    else if(x0>5 && x0<=10){
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;
    }

    else if(x0<-10){
        y0_slow = 1;
        org_y0_slow = 1;
        vis_label1 = 'visible'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =0;
        org_y0_fast =0;
        vis_label3 = 'Hidden';

        maxY = org_y0_slow;
        x0= -10;
        org_x0= -10;

    }

    else{
        y0_slow = 0;
        org_y0_slow = 0;
        vis_label1 = 'Hidden'

        y0_okay = 0;
        org_y0_okay = 0;
        vis_label2 = 'Hidden'

        y0_fast =1;
        org_y0_fast =1;
        vis_label3 = 'visible';

        maxY = org_y0_fast;
        x0=10;
        org_x0=10;

    }


    let selectedData_x_slow = x0;
    let selectedData_y0_slow = org_y0_slow.toFixed(2);
    let selectedData_x_okay = x0;
    let selectedData_y0_okay = org_y0_okay.toFixed(2);
    let selectedData_x_fast = x0;
    let selectedData_y0_fast = org_y0_fast.toFixed(2);

    circle1.attr("cx", x(org_x0)).attr("cy", y(org_y0_slow)).style("visibility", vis_label1);
    circle2.attr("cx", x(org_x0)).attr("cy", y(org_y0_okay)).style("visibility", vis_label2);
    circle3.attr("cx", x(org_x0)).attr("cy", y(org_y0_fast)).style("visibility", vis_label3);

    focusLabel1
        .html("(" + selectedData_x_slow + ", "  + selectedData_y0_slow+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_slow)+45)
        .style("visibility", 'hidden')

    focusLabel2
        .html("(" + selectedData_x_okay + ", "  + selectedData_y0_okay+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_okay)+45)
        .style("visibility", 'hidden')

    focusLabel3
        .html("(" + selectedData_x_fast + ", "  + selectedData_y0_fast+ ")")
        .attr("x", x(org_x0)+25)
        .attr("y", y(org_y0_fast)+45)
        .style("visibility", 'hidden')

    focuseLine2x
        .attr("x1",x(org_x0) )
        .attr("x2", x(org_x0))
        .attr("y1",y(maxY))
        .attr("y2", y(0))
        .style("visibility", visible)

    focuseLine2y_1
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_slow))
        .attr("y2", y(org_y0_slow))
        .style("visibility", vis_label1)
    focuseLine2y_2
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_okay))
        .attr("y2", y(org_y0_okay))
        .style("visibility", vis_label2)
    focuseLine2y_3
        .attr("x1",x(org_x0) )
        .attr("y1",y(org_y0_fast))
        .attr("y2", y(org_y0_fast))
        .style("visibility", vis_label3)

    foucseYval_1
        .attr("y", y(org_y0_slow))
        .text(selectedData_y0_slow)
        .style("visibility", vis_label1);

    foucseYval_2
        .attr("y", y(org_y0_okay))
        .text(selectedData_y0_okay)
        .style("visibility", vis_label2);

    foucseYval_3
        .attr("y", y(org_y0_fast))
        .text(selectedData_y0_fast)
        .style("visibility", vis_label3);

    foucseXval
        .attr("x", x(org_x0) - 10)
        .text(x0)
        .style("visibility", visible);

    result =
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

///
    if (result>=8){
        describ = 'a large accelaration';
    }
    else if (result<8 && result >=4){
        describ = 'an accelaration';

    }
    else if (result<4 && result >=1.5){
        describ = 'a moderate accelaration';
    }
    else if (result<1.5 && result >-1.5){
        describ = 'almost no speed change';
    }
    else if (result<=-1.5 && result >-4){
        describ = 'a moderate decelaration';
    }
    else if (result<=-4 && result >-8){
        describ = 'a decelaration';
    }
    else{
        describ = 'a large decelaration';
    }
    document.getElementById("describe").innerHTML = describ;
///
    if(x0 >1.5){
        speed_dis = 'is fast';
    }
    else if (x0<1.5 && x0>-1.5){
        speed_dis = 'is the same';
    }
    else{
        speed_dis = 'is slow';
    }
    document.getElementById("speed_dis").innerHTML = speed_dis;


    document.getElementById("acceleration").innerHTML =result.toFixed(2);
    document.getElementById("spd_x1").innerHTML = x0;
    document.getElementById("spd_x2").innerHTML = x0;
    document.getElementById("spd_x3").innerHTML = x0;

    document.getElementById("spd_slow_x1").innerHTML = x0;
    document.getElementById("spd_slow_x2").innerHTML = x0;
    document.getElementById("spd_slow_x3").innerHTML = x0;
    document.getElementById("spd_okay_y").innerHTML = y0_okay.toFixed(2);
    document.getElementById("spd_slow_y").innerHTML = y0_slow.toFixed(2);
    document.getElementById("spd_fst_y").innerHTML = y0_fast.toFixed(2);

    document.getElementById("spd_slow_x1_a").innerHTML = x0;
    document.getElementById("spd_slow_x2_a").innerHTML = x0;
    document.getElementById("spd_slow_y_a").innerHTML = y0_slow.toFixed(2);

    document.getElementById("spd_okay_x1_b").innerHTML = x0;
    document.getElementById("spd_okay_x2_b").innerHTML = x0;
    document.getElementById("spd_okay_y_b").innerHTML = y0_okay.toFixed(2);

    document.getElementById("spd_fst_x1_c").innerHTML = x0;
    document.getElementById("spd_fst_x2_c").innerHTML = x0;
    document.getElementById("spd_fst_y_c").innerHTML = y0_fast.toFixed(2);

    document.getElementById("spd_slow_x1_d").innerHTML = x0;
    document.getElementById("spd_slow_x2_d").innerHTML = x0;
    document.getElementById("spd_slow_y_d").innerHTML = y0_slow.toFixed(2);

    document.getElementById("spd_okay_x1_e").innerHTML = x0;
    document.getElementById("spd_okay_x2_e").innerHTML = x0;
    document.getElementById("spd_okay_y_e").innerHTML = y0_okay.toFixed(2);

    document.getElementById("spd_fst_x1_f").innerHTML = x0;
    document.getElementById("spd_fst_x2_f").innerHTML = x0;
    document.getElementById("spd_fst_y_f").innerHTML = y0_fast.toFixed(2);

    document.getElementById("spd_slow_x1_g").innerHTML = x0;
    document.getElementById("spd_slow_x2_g").innerHTML = x0;
    document.getElementById("spd_slow_y_g").innerHTML = y0_slow.toFixed(2);

    document.getElementById("spd_okay_x1_h").innerHTML = x0;
    document.getElementById("spd_okay_x2_h").innerHTML = x0;
    document.getElementById("spd_okay_y_h").innerHTML = y0_okay.toFixed(2);

    document.getElementById("spd_fst_x1_i").innerHTML = x0;
    document.getElementById("spd_fst_x2_i").innerHTML = x0;
    document.getElementById("spd_fst_y_i").innerHTML = y0_fast.toFixed(2);

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

    document.getElementById("result_1").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_2").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_3").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("result_4").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_5").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_6").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
    document.getElementById("result_7").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
    document.getElementById("result_8").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
    document.getElementById("result_9").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);

}
import { y0_close } from './T1_Fuzzy_exp_dist_drag.js';
import { y0_oky } from './T1_Fuzzy_exp_dist_drag.js';
import { y0_far } from './T1_Fuzzy_exp_dist_drag.js';

document.getElementById("spd_slow_x1").innerHTML = x0;
document.getElementById("spd_slow_x2").innerHTML = x0;
document.getElementById("spd_slow_x3").innerHTML = x0;
document.getElementById("spd_okay_y").innerHTML = y0_okay.toFixed(2);
document.getElementById("spd_slow_y").innerHTML = y0_slow.toFixed(2);
document.getElementById("spd_fst_y").innerHTML = y0_fast.toFixed(2);


document.getElementById("spd_slow_x1_a").innerHTML = x0;
document.getElementById("spd_slow_x2_a").innerHTML = x0;
document.getElementById("spd_slow_y_a").innerHTML = y0_slow.toFixed(2);

document.getElementById("spd_okay_x1_b").innerHTML = x0;
document.getElementById("spd_okay_x2_b").innerHTML = x0;
document.getElementById("spd_okay_y_b").innerHTML = y0_okay.toFixed(2);

document.getElementById("spd_fst_x1_c").innerHTML = x0;
document.getElementById("spd_fst_x2_c").innerHTML = x0;
document.getElementById("spd_fst_y_c").innerHTML = y0_fast.toFixed(2);

document.getElementById("spd_slow_x1_d").innerHTML = x0;
document.getElementById("spd_slow_x2_d").innerHTML = x0;
document.getElementById("spd_slow_y_d").innerHTML = y0_slow.toFixed(2);

document.getElementById("spd_okay_x1_e").innerHTML = x0;
document.getElementById("spd_okay_x2_e").innerHTML = x0;
document.getElementById("spd_okay_y_e").innerHTML = y0_okay.toFixed(2);

document.getElementById("spd_fst_x1_f").innerHTML = x0;
document.getElementById("spd_fst_x2_f").innerHTML = x0;
document.getElementById("spd_fst_y_f").innerHTML = y0_fast.toFixed(2);

document.getElementById("spd_slow_x1_g").innerHTML = x0;
document.getElementById("spd_slow_x2_g").innerHTML = x0;
document.getElementById("spd_slow_y_g").innerHTML = y0_slow.toFixed(2);

document.getElementById("spd_okay_x1_h").innerHTML = x0;
document.getElementById("spd_okay_x2_h").innerHTML = x0;
document.getElementById("spd_okay_y_h").innerHTML = y0_okay.toFixed(2);

document.getElementById("spd_fst_x1_i").innerHTML = x0;
document.getElementById("spd_fst_x2_i").innerHTML = x0;
document.getElementById("spd_fst_y_i").innerHTML = y0_fast.toFixed(2);


document.getElementById("spd_x1").innerHTML = x0;
document.getElementById("spd_x2").innerHTML = x0;
document.getElementById("spd_x3").innerHTML = x0;

let y1 = 0;
let y2 = -5;
let y3 = -10;
let y4 = 3;
let y5 = 0;
let y6 = -3;
let y7 = 10;
let y8 = 5;
let y9 = 0;
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



let result =
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
document.getElementById("acceleration").innerHTML =result.toFixed(2)

///
let describ ='';
if (result>=8){
    describ = 'a large accelaration';
}
else if (result<8 && result >=4){
    describ = 'an accelaration';

}
else if (result<4 && result >=1.5){
    describ = 'a moderate accelaration';
}
else if (result<1.5 && result >-1.5){
    describ = 'almost no speed change';
}
else if (result<=-1.5 && result >-4){
    describ = 'a moderate decelaration';
}
else if (result<=-4 && result >-8){
    describ = 'a decelaration';
}
else{
    describ = 'a large decelaration';
}
document.getElementById("describe").innerHTML = describ;
///
///
let speed_dis ='';
if(x0 >1.5){
    speed_dis = 'is fast';
}
else if (x0<1.5 && x0>-1.5){
    speed_dis = 'is the same';
}
else{
    speed_dis = 'is slow';
}
document.getElementById("speed_dis").innerHTML = speed_dis;
///

document.getElementById("result_1").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
document.getElementById("result_2").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
document.getElementById("result_3").innerHTML = (Number(y0_close.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
document.getElementById("result_4").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
document.getElementById("result_5").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
document.getElementById("result_6").innerHTML = (Number(y0_oky.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);
document.getElementById("result_7").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_slow.toFixed(2))).toFixed(2);
document.getElementById("result_8").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_okay.toFixed(2))).toFixed(2);
document.getElementById("result_9").innerHTML = (Number(y0_far.toFixed(2)) * Number(y0_fast.toFixed(2))).toFixed(2);

export { y0_slow };
export { y0_okay };
export { y0_fast };
export { result };
export { describ };

export{y1,y2,y3,y4,y5,y6,y7,y8,y9};