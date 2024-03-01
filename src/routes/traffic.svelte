<head>
  <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
  import Katex from "svelte-katex";
  import {onMount} from "svelte";

  let LottiePlayer;
  var d = 0.5;
  var S = [6,d,d,d,d,d];
  var BBUS = S[0];
  var state = [0,0,0,0,0,0];
  onMount(async () => {
    const module = await import("@lottiefiles/svelte-lottie-player");
    LottiePlayer = module.LottiePlayer;
  });
  function circleclick(n){
  	let st = "circle-"+n;
  	const elem = document.getElementById(st);
  	if(state[n]){
		state[n]=0;
		elem.style.stroke="rgb(177, 215, 140)";
	}else{
		state[n]=1;
		elem.style.stroke="red";
	}
	var cnt = 0;
	for(var i=1;i<=5;i++){
		if(state[i]) {
			cnt+=1;
		}
	}
	for(var i=1;i<=5;i++){
		if(state[i]){
			S[i] = d+(S[0]/(2*cnt));
		}else{
			S[i] = d;
		}
	}
	BBUS = S[0]+(0.3*(cnt*(10-cnt)));
  }
  function circlehover(ID){
  	  const elem = document.getElementById(ID);
	  if(elem.style.fill=="rgb(177, 215, 140)"){
	  	elem.style.fill="rgb(155,195,120)";
	  }else{
	  	elem.style.fill="rgb(177,215,140)";
	  }
  }
</script>

<body>
  {#if LottiePlayer}
  <div class="wrapper">
  	<h4 style="color:rgb(150,150,150);">Click on The Users to Increase It's Usage</h4>
    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_static.json"
        background="transparent"
        speed="1";
        autoplay="{true}"
        loop="{true}"
      />
    </div>


    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_1.json"
        background="transparent"
        speed={S[1]}
        autoplay="{true}"
        loop="{true}"
      />
    </div>
    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_2.json"
        background="transparent"
        speed={S[2]}
        autoplay="{true}"
        loop="{true}"
      />
    </div>
    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_3.json"
        background="transparent"
        speed={S[3]}
        autoplay="{true}"
        loop="{true}"
      />
    </div>
    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_4.json"
        background="transparent"
        speed={S[4]}
        autoplay="{true}"
        loop="{true}"
      />
    </div>
    <div class="content">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/traffic_5.json"
        background="transparent"
        speed={S[5]}
        autoplay="{true}"
        loop="{true}"
      />
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
    >
	 <circle id="circle-0" r="75" cx="466.105" cy="319.132"  
            style="fill: rgb(143,161,205);" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
    >
	 <circle id="circle-1" r="50.26100" cx="731.1870117" cy="134.307" on:mouseover={()=>circlehover("circle-1")} on:mouseout={()=>circlehover("circle-1")} on:click={() => circleclick(1)} 
            style="fill: rgb(177,215,140);stroke-width:8;stroke:rgb(177,215,140);" />
    </svg>

	
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
    >
	 <circle id="circle-2" r="50.26100" cx="411.903" cy="79.511" on:mouseover={()=>circlehover("circle-2")} on:mouseout={()=>circlehover("circle-2")} on:click={() => circleclick(2)} 
            style="fill: rgb(177,215,140);stroke-width:8;stroke:rgb(177,215,140);" />
    </svg>

	
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
   	> 
	 <circle id="circle-3" r="50.26100" cx="168.511" cy="271.21" on:mouseover={()=>circlehover("circle-3")} on:mouseout={()=>circlehover("circle-3")}  on:click={() => circleclick(3)} 
            style="fill: rgb(177,215,140);stroke-width:8;stroke:rgb(177,215,140);" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
   	> 
	 <circle id="circle-4" r="50.26100" cx="367.887" cy="522.388" on:mouseover={()=>circlehover("circle-4")} on:mouseout={()=>circlehover("circle-4")}  on:click={() => circleclick(4)} 
            style="fill: rgb(177,215,140);stroke-width:8;stroke:rgb(177,215,140);" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width:900; height: 600"
	  class="content-point"
   	> 
	 <circle id="circle-5" r="50.26100" cx="699.11" cy="509.021" on:mouseover={()=>circlehover("circle-5")} on:mouseout={()=>circlehover("circle-5")}  on:click={() => circleclick(5)} 
            style="fill: rgb(177,215,140);stroke-width:8;stroke:rgb(177,215,140);" />
    </svg>
	<div class="content" style="scale:0.5;left:50px">
      <LottiePlayer
        src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/BBU.json"
        background="transparent"
		width={900};
		height={600};
        speed={BBUS}
        autoplay="{true}"
        loop="{true}"
		style="left:30px;top:10px;"
      />
	</div>	
  </div>

  {/if}
</body>
<style>
  .wrapper {
    display: grid;
    place-items: center;
  }
  .content {
  	pointer-events:none;
    scale: 1.5;
    padding: 20%;
    grid-area: 1/1;
  }
  .content-point {
  	
  	z-index:0;
    grid-area: 1/1;
  }
  svg{pointer-events:none}
  circle{pointer-events:all}
</style>

