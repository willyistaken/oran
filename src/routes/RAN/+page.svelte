
<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Katex from 'svelte-katex';
   import CellGraph from "$lib/assets/cellular-graph.svg";
   import { onMount } from 'svelte';
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
   
   
</script>


<div id="doc" class="content" data-hard-breaks="true">
   <h1 id="What-exactly-is-RAN" data-id="What-exactly-is-RAN"><span>What exactly is RAN?</span></h1>

   <span
      >The Radio Access Network (RAN) is one of the major components of the mobile data network. It
   is responsible for wirelessly connecting User Equipment (UE) with the Central Network (CN).</span
      >

   <span><span class="tooltip" data-tooltip="Radio Access Network">RAN</span> can be devided into 2 different parts:</span><br />

   <span>1.Baseband Unit (BBU):</span><br />

   <span
      >"Baseband" refers to a range of frequencies used by signals that have not yet been modulated
   or processed by other components. BBU is responsible for processing and managing these
   baseband signals.</span
      ><br />

   <span>2. Remote Radio Unit (RRU)</span><br />

   <span
      >The unit, also known as the Remote Radio Head (RRH), is responsible for transmitting and
   receiving wireless signals to establish connections between wireless devices and the network.</span
      >

   <span
      >These two components communicate with each other via optical fiber or simply an electrical
   wire. The interface facilitating this connection is known as CPRI (Common Public Radio
   Interface), which serves as a standardized method for transmitting digital data between <span class="tooltip" data-tooltip="Base Band Unit">BBU</span>
   and the <span class="tooltip" data-tooltip="Remote Radio Unit">RRU</span>. Conceptually, CPRI can be likened to the USB port found on various devices.</span
      >

   {#if LottiePlayer}
   <div class="inlinebox">
      <div class="celltowerlottie">
         <span class="tooltip" data-tooltip="RRU ">
            <LottiePlayer src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/celltower.json" background="transparent" speed="3"  width="{500}" height="{500}" hover={true} loop={true} style="position:relative;right:130px;"/>
         </span>
      </div>
      <div class="CPRI">
         <h3 style="position:relative;top:50%;border-width:3px;">&lt;=CPRI=&gt;</h3>
      </div>
      <div class="BBUlottie">
         <span class="tooltip" data-tooltip="BBU">
            <LottiePlayer src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/BBU.json" background="transparent" speed="10"  width="{250}" height="{250}" hover={true} loop={true} defaultFrame="4"  style="position:relative;top:220px;"/>
         </span>
      </div>
   </div>
   {/if}

   <span
      >The basic structure of a mobile network is that of a cellular network, where land areas are
   divided into individual cells
   that are each served by one or more base stations.</span
      >

   <center>
      <span class = "tooltip" data-tooltip="Representation of a Cellular Network">
      <img src={CellGraph} alt="Anson Lai breaks table"/>
      </span>
   </center>

</div>
