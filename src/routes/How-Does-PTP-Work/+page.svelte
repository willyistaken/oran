<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Katex from 'svelte-katex';
   import RootedTree from "$lib/assets/rooted_tree.svg";
   import { onMount } from 'svelte';
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
   
   
</script>
<div id="doc" class="content" data-hard-breaks="true">

   <h1 id="How-PTP-works" data-id="How-PTP-works"><span>How PTP works</span></h1>
   <span
      >In a computer network, multiple nodes are interconnected by edges (connections) between these
   devices. By employing the Best Master Clock Algorithm (BMCA), a <span class="tooltip" data-tooltip="Precision Time Protocol">PTP</span> network determines the
   hierarchy of clocks in the network. It removes redundant connections and organizes the entire
   network into a hierarchical structure resembling "a tree." This simplifies time
   synchronization, as circular configurations are avoided. Within such a network, a single
   device is designated as the grandmaster (GM), responsible for controlling precise time. Other
   devices receive time messages from the GM.</span
      >
   <span
      >Through the exchange of several messages among the clocks in all devices, the entire network
   can achieve clock accuracy in the sub-microsecond range.</span
      >
   <center>
      <span class = "tooltip" data-tooltip="The process of transforming from a graph to a tree">
         <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/Graph_to_Tree.json" background="transparent" speed="1.2" style="width: 750px; height: 750px;" loop autoplay class="anime"></lottie-player>
      </span>
   </center>
   <ul>
      <li>
         <span
            >BMC Algorithm:
         using some mechanisms to determine which clock is more suitable to be a
         master. You can see more details
         </span><a
            href="https://blog.meinbergglobal.com/2022/02/01/bmca-deep-dive-part-1/"
            target="_blank"
            rel="noopener"><span>here</span></a
            >
      </li>
   </ul>
   <h3 id="Clock-types" data-id="Clock-types"><span>Clock types</span></h3>
   <span
      >In a PTP network, clocks are categorized into several types with varying priorities and
   hierarchies to ensure effective and efficient time synchronization.</span
      >
   <h4 id="Ordinary-ClockOC" data-id="Ordinary-ClockOC"><span>Ordinary Clock(OC)</span></h4>
   <span
      >The most common types of clocks in a PTP network include Ordinary Clocks (OC), which can be
   further divided into four categories:
   masters, slaves, only-slaves, and the grandmaster. These
   classifications are not static, as a clock's role may change depending on its interconnections
   with other clocks.</span
      >
   <span
      >In a network comprised of two nodes connected by a single edge, the master clock serves as
   the time reference, while the slave clock receives time messages from its master. A slave-only
   clock continuously functions as a slave clock, being as a leaf of a tree. Conversely, the
   grandmaster represents the entire PTP network and is always a master, responsible for
   providing the time reference for the entire network.</span
      >
   <h4 id="GrandmasterGM" data-id="GrandmasterGM"><span>Grandmaster(GM)</span></h4>
   <span>As explained above, there is </span><strong><span>ONLY</span></strong><span><space/>  
   one Grand Master (GM) in a single network, serving as the benchmark for time synchronization
   and providing standard time information to other clocks across the network. Unlike other types
   of clocks in the network, the GM typically receives time messages from an external time
   reference. However, in the case of cyberattacks or other emergencies, grandmasters must be
   capable of autonomously maintaining time for a long period and with great accuracy.</span
      >
   <center><img src={RootedTree} width=70% alt="A rooted tree demo of a network"/></center>
   <h4 id="Transparent-ClockTC" data-id="Transparent-ClockTC"><span>Transparent Clock(TC)</span></h4>
   <span
      >To enhance accuracy in time synchronization, PTP introduces the use of Transparent Clocks
   (TC). TCs play a crucial role in preventing congestion in the network by adjusting PTP time
   messages to eliminate packet processing delays, earning them the moniker "Transparent." TCs
   are capable of compensating for delays during message exchange between clocks, thereby
   ensuring precise time alignment.</span
      >
   <div style="scale:1.2;display:flex;padding:10%;justify-content:space-evenly;">
      <div>
         <span class = "tooltip" data-tooltip="Message Exchanging with TC">
            <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/Without_TC.json" background="transparent" speed="1" style="width: 500px; height: 180px; padding-right: 7%;" loop autoplay class="anime"></lottie-player>
         </span>
      </div>
      <div>
         <span class = "tooltip" data-tooltip="Messaeg Exchanging without TC">
            <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/With_TC.json" background="transparent" speed="1" style="width: 500px; height: 180px;  padding-left: 7%" loop autoplay class="anime"></lottie-player>
         </span>
      </div>
   </div>
   <h4 id="Boundary-ClockBC" data-id="Boundary-ClockBC"><span>Boundary Clock(BC)</span></h4>
   <span
      >The Boundary Clock (BC) is another type of clock aimed at achieving greater accuracy in PTP.
   While a master clock is responsible for providing time reference for too many slave clocks,
   latency may increase and time accuracy may decrease. BC addresses this issue by incorporating
   a built-in PTP master clock. As BCs can only communicate with a limited number of slaves,
   adding several BCs between masters and their slaves ensures that PTP masters are not over
   solicited, thereby enhancing time accuracy.</span
      >
   <center>
      <span class = "tooltip" data-tooltip="How boundary clocks work!">
         <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/Boundary_Clock.json" background="transparent" speed="1" style="width: 1000px; height: 600px;" loop autoplay class="anime"></lottie-player>
      </span>
   </center>
   <h3 id="Time-exchanging-process" data-id="Time-exchanging-process">
      <span>Time exchanging process</span>
   </h3>
   <span
      >Above, we mentioned that devices in a PTP network can synchronize each other's clocks through
   exchanging time messages in the form of packets. In this section, we will explain the method
   used for time synchronization.</span
      >
   <span
      >Firstly, we need to understand the terms "Offset" and "Delay" in the synchronization process.
   "Offset" refers to the time difference between the master and slave clock, while "Delay"
   represents the time needed to transfer packets from the master to the slave.</span
      >
   <span
      >
      In the time exchange process, the master clock initially sends a sync message and records the
      actual time this message is sent (
      <Katex>T_1</Katex>
      ). Then, the master clock sends out a follow_up message to convey 
   </span>
   <span
      >. This procedure is required because sync message alone cannot accurately record the time
   when it is sent. The slave clock then records both
   </span>
   <span>
      (from the follow_up message) and the time it receives the sync message (
      <Katex>T_2</Katex>
      ). At this point, the slave clock becomes aware of the time difference between itself and its
      master. However, it cannot adjust its time yet because it doesn't know the duration it takes
      for a message to travel from the master to the slave clock.
   </span>
   <span
      >
      Upon receiving the follow-up message from the master, the slave subsequently sends a
      delay_request message and records the time as 
      <Katex>\,T_3</Katex>
   </span>
   <span
      >. The master clock immideately replies with a delay_response message, including the
   </span>
   <span>
      value 
      <Katex>\,T_4</Katex>
      . With these four timestamps, the slave clock can calculate the Offset and Delay,
      enabling it to synchronize the time accurately.
   </span
      >
   <center>
      <div style="scale:1;border-width:5px;padding:5%;border-radius:2%;">
         <div style="padding:5%;">
            <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/PTP_anime.json" background="transparent" controls speed="0.8" style="width: 70%;"></lottie-player>
            <h5 style="color:rgb(150,150,150)">Press the play button to see how PTP works!</h5>
         </div>
      </div>
   </center>
   <h6>
      Formula:
      Offset = 
      <Katex> \frac{'{(T_2-T_1)-(T_4-T_3)}'} {'{2}'} </Katex>
   </h6>
   <h6>
      Formula:
      Delay = 
      <Katex> \frac{'{(T_2-T_1)+(T_4-T_3)}'} {'{2}'} </Katex>
   </h6>
</div>
