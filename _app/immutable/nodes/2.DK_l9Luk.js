import{s as Y,n as k,q as H}from"../chunks/scheduler.DNouHSdf.js";import{S as z,i as D,e as d,s as x,c as f,f as y,y as P,o as v,g as b,d as u,u as L,a as $,v as E,h as l,w as j,n as O,l as S,x as X}from"../chunks/index.k-V2XkiO.js";import"../chunks/paths.D1P0TzCh.js";function A(w){let e,i,a,g='<script src="https://cdn.jsdelivr.net/npm/d3@7"><\/script>',n,o,m=`<svg id="dataviz_area" height="600" width="400"></svg> <script>var svg = d3.select("#dataviz_area");
  width = +svg.node().getBoundingClientRect().width,
  height = +svg.node().getBoundingClientRect().height;

// svg objects
var link, node;
// the data - an object with nodes and links
var graph;

// load the data
d3.json("miserables.json", function(error, _graph) {
  if (error) throw error;
  graph = _graph;
  initializeDisplay();
  initializeSimulation();
});



//////////// FORCE SIMULATION //////////// 

// force simulator
var simulation = d3.forceSimulation();

// set up the simulation and event to update locations after each tick
function initializeSimulation() {
  simulation.nodes(graph.nodes);
  initializeForces();
  simulation.on("tick", ticked);
}

// values for all forces
forceProperties = {
    center: {
        x: 0.5,
        y: 0.5
    },
    charge: {
        enabled: true,
        strength: -30,
        distanceMin: 1,
        distanceMax: 2000
    },
    collide: {
        enabled: true,
        strength: .7,
        iterations: 1,
        radius: 5
    },
    forceX: {
        enabled: false,
        strength: .1,
        x: .5
    },
    forceY: {
        enabled: false,
        strength: .1,
        y: .5
    },
    link: {
        enabled: true,
        distance: 30,
        iterations: 1
    }
}

// add forces to the simulation
function initializeForces() {
    // add forces and associate each with a name
    simulation
        .force("link", d3.forceLink())
        .force("charge", d3.forceManyBody())
        .force("collide", d3.forceCollide())
        .force("center", d3.forceCenter())
        .force("forceX", d3.forceX())
        .force("forceY", d3.forceY());
    // apply properties to each of the forces
    updateForces();
}

// apply new force properties
function updateForces() {
    // get each force by name and update the properties
    simulation.force("center")
        .x(width * forceProperties.center.x)
        .y(height * forceProperties.center.y);
    simulation.force("charge")
        .strength(forceProperties.charge.strength * forceProperties.charge.enabled)
        .distanceMin(forceProperties.charge.distanceMin)
        .distanceMax(forceProperties.charge.distanceMax);
    simulation.force("collide")
        .strength(forceProperties.collide.strength * forceProperties.collide.enabled)
        .radius(forceProperties.collide.radius)
        .iterations(forceProperties.collide.iterations);
    simulation.force("forceX")
        .strength(forceProperties.forceX.strength * forceProperties.forceX.enabled)
        .x(width * forceProperties.forceX.x);
    simulation.force("forceY")
        .strength(forceProperties.forceY.strength * forceProperties.forceY.enabled)
        .y(height * forceProperties.forceY.y);
    simulation.force("link")
        .id(function(d) {return d.id;})
        .distance(forceProperties.link.distance)
        .iterations(forceProperties.link.iterations)
        .links(forceProperties.link.enabled ? graph.links : []);

    // updates ignored until this is run
    // restarts the simulation (important if simulation has already slowed down)
    simulation.alpha(1).restart();
}



//////////// DISPLAY ////////////

// generate the svg objects and force simulation
function initializeDisplay() {
  // set the data and properties of link lines
  link = svg.append("g")
        .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

  // set the data and properties of node circles
  node = svg.append("g")
        .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

  // node tooltip
  node.append("title")
      .text(function(d) { return d.id; });
  // visualize the graph
  updateDisplay();
}

// update the display based on the forces (but not positions)
function updateDisplay() {
    node
        .attr("r", forceProperties.collide.radius)
        .attr("stroke", forceProperties.charge.strength > 0 ? "blue" : "red")
        .attr("stroke-width", forceProperties.charge.enabled==false ? 0 : Math.abs(forceProperties.charge.strength)/15);

    link
        .attr("stroke-width", forceProperties.link.enabled ? 1 : .5)
        .attr("opacity", forceProperties.link.enabled ? 1 : 0);
}

// update the display positions after each simulation tick
function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    d3.select('#alpha_value').style('flex-basis', (simulation.alpha()*100) + '%');
}<\/script>`;return{c(){e=d("!DOCTYPE"),i=x(),a=d("head"),a.innerHTML=g,n=x(),o=d("body"),o.innerHTML=m,this.h()},l(t){e=f(t,"!DOCTYPE",{html:!0}),i=y(t),a=f(t,"HEAD",{"data-svelte-h":!0}),P(a)!=="svelte-1u1955w"&&(a.innerHTML=g),n=y(t),o=f(t,"BODY",{"data-svelte-h":!0}),P(o)!=="svelte-bzkh0c"&&(o.innerHTML=m),this.h()},h(){v(e,"html","")},m(t,c){b(t,e,c),b(t,i,c),b(t,a,c),b(t,n,c),b(t,o,c)},p:k,i:k,o:k,d(t){t&&(u(e),u(i),u(a),u(n),u(o))}}}class I extends z{constructor(e){super(),D(this,e,null,A,Y,{})}}function B(w){let e,i,a='音龍宛在<span class="tooltip" data-tooltip="完成所有有可能完成的任務或問題">破台</span>',g,n,o="接下來我不太確定要怎麼做",m,t,c,C,p,T="做專題",M,h,_;return h=new I({}),{c(){e=d("center"),i=d("h1"),i.innerHTML=a,g=x(),n=d("h2"),n.textContent=o,m=x(),t=d("img"),C=x(),p=d("button"),p.textContent=T,M=x(),L(h.$$.fragment),this.h()},l(s){e=f(s,"CENTER",{});var r=$(e);i=f(r,"H1",{"data-svelte-h":!0}),P(i)!=="svelte-1t0n0r2"&&(i.innerHTML=a),g=y(r),n=f(r,"H2",{"data-svelte-h":!0}),P(n)!=="svelte-18b43nl"&&(n.textContent=o),m=y(r),t=f(r,"IMG",{src:!0,alt:!0,width:!0,height:!0}),C=y(r),p=f(r,"BUTTON",{class:!0,"data-svelte-h":!0}),P(p)!=="svelte-1b0zgg6"&&(p.textContent=T),M=y(r),E(h.$$.fragment,r),r.forEach(u),this.h()},h(){H(t.src,c="https://avatars.worldcubeassociation.org/uploads/user/avatar/2018LAIH01/1687415701.jpeg")||v(t,"src",c),v(t,"alt","ancuber breaks table"),v(t,"width","300"),v(t,"height","200"),v(p,"class","demo")},m(s,r){b(s,e,r),l(e,i),l(e,g),l(e,n),l(e,m),l(e,t),l(e,C),l(e,p),l(e,M),j(h,e,null),_=!0},p:k,i(s){_||(O(h.$$.fragment,s),_=!0)},o(s){S(h.$$.fragment,s),_=!1},d(s){s&&u(e),X(h)}}}class N extends z{constructor(e){super(),D(this,e,null,B,Y,{})}}export{N as component};
