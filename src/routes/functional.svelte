<script>
import { onMount } from 'svelte';

onMount(() => {
    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");
    const options = document.getElementById("options");
    const CU = document.getElementById("cu");
    const DU = document.getElementById("du");
    const RU = document.getElementById("ru");
	const functions = ["<span class=\"tooltip\" data-tooltip=\"Radio Resource Control\">RRC<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"Packet Data Convergence Protocol\">PDCP<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"High Radio Link Control\">HIGH-RLC<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"Low Radio Link Control\">LOW-RLC<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"High Medium Access Control\">HIGH-MAC<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"Low Medium Access Control\">LOW-MAC<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"High Physical Layer\">HIGH-PHY<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"Low Physical Layer\">LOW-PHY<br><\span>",
					   "<span class=\"tooltip\" data-tooltip=\"Radio frequency\">RF<br><\span>"];
	function update(){
		options.innerHTML = "Splits at: "+slider1.value+" , "+slider2.value;
		CU.style.height = 50*slider1.value+"px";
		DU.style.height = 50*(slider2.value-slider1.value)+"px";
		RU.style.height = 50*(9-slider2.value)+"px";
		CU.innerHTML = "";
		DU.innerHTML = "";
		RU.innerHTML = "";
		for(var i=0;i<slider1.value;i++){
			CU.innerHTML += functions[i];
		}
		for(var i=slider1.value;i<slider2.value;i++){
			DU.innerHTML += functions[i];
		}
		for(var i=slider2.value;i<9;i++){
			RU.innerHTML += functions[i];
		}
		console.log(CU.innerHTML);
	}
	update();
// Display initial value
	
// Update the current slider value (each time you drag the slider handle)
    slider1.addEventListener("input", function() {
		if(slider1.value>=slider2.value){
			slider1.value=slider2.value-1;
		}
		update();
    });
    slider2.addEventListener("input", function() {
		if(slider1.value>=slider2.value){
			slider2.value=slider1.value+1;
		}
	update();
	});

});
</script>

<body>
   <div style="height:150px;display:flex;flex-direction:row;justify-content:center;align-items:flex-end;">
   	<h3 style="margin:45px;"> CU </h3>
   	<h3 style="margin:45px;"> DU </h3>
   	<h3 style="margin:45px;"> RU </h3>
   </div>
   <div style="height:350px;display:flex;flex-direction:row;justify-content:center;align-items:flex-end;">
      <div id="cu" class="condiv">
      </div>
      <div id="du" class="condiv">
      </div>
      <div id="ru" class="condiv">
      </div>
   </div>
   <center>
   <div class="range-slider">
   <center>
  <input value="2" min="1" max="8" step="1" type="range" class="slider" id="slider1">
  <input value="6" min="1" max="8" step="1" type="range" class="slider" id="slider2">
  </center>
	</div>



	<h5 id="options">k</h5>
	</center>



</body>

<style>
body{
    padding:10px;
}
/* Styles for the slider */
.slider {
  -webkit-appearance: none;
  width:40%;
  height: 20px; /* Change this to adjust the height */
  background: #d3d3d3;
  outline: none;
  opacity: 1;
  -webkit-transition: .2s;
   pointer-events: none;
   position: absolute;
   overflow: hidden;
   outline: none;
   left:30%;
}

/* Thumb styles */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px; /* Change this to adjust the width of the thumb */
  height: 50px; /* Change this to adjust the height of the thumb */
  background: #4CAF50;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 10;
  outline: 0;
}

.slider::-moz-range-thumb {
  width: 50px; /* Change this to adjust the width of the thumb */
  height: 50px; /* Change this to adjust the height of the thumb */
  background: #4CAF50;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 10;
  outline: 0;
}

.range-slider {
    position: relative;
	width:100%;
    height: 35px;
    text-align: center;
}






#ru{
margin:10px;
width:11%;
background:
#8E9DCC;
border-radius:4px;
}
#du{
margin:10px;
width:11%;
height:50px;
background:
#F9F9ED;
border-radius:4px;

}
#cu{
margin:10px;
width:11%;
height:50px;
background:
#DBF4A7;
border-radius:4px;

}
.condiv{
	color:#000000;
	text-align:center;
	font-weight:bold;
	 line-height: 50px;
white-space: nowrap;
}
</style>
