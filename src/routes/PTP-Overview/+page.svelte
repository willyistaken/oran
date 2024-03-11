<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Katex from 'svelte-katex';
   import { onMount } from 'svelte';
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
   
   
</script>
<div id="doc" class="content" data-hard-breaks="true">

   <h1> PTP </h1>
   <span>
   the need for precise time alignment in 5G network. Ensuring accurate time alignment
   among RU, DU, CU and 5G devices is crucial for optimal operation. This is where Precision Time
   Protocol(PTP) comes into play. PTP enables accurate time synchronization throughout a computer
   network, ensuring that all components of the network are precisely aligned in time.</span
      >
   <span
      >However, if time alignment fails to work properly, it can render 5G out of function.
   Cyberattacks can be employed by hackers to disrupt the process of time synchronization, posing
   a significant security threat to 5G users.</span
      >
   <span
      >To understand such concerns, it's essential to first examine how PTP operates and how
   attackers can disrupt its proper functioning.</span
      >
   <h3 id="PTP-overview" data-id="PTP-overview"><span>PTP overview</span></h3>
   <span
      >Simply speaking, the Precision Time Protocol (PTP) aims to synchronize the timing of all
   digital devices within a single computer network. The protocol achieves this through a two-way
   exchange of PTP messages to synchronize timing accurately.</span
      >
   <h3 id="Firstly-what-is-a-computer-network" data-id="Firstly-what-is-a-computer-network">
      <span>Firstly, what is a computer network?</span>
   </h3>
   <span
      >A computer network brings together a collection of computers, allowing them to share
   information with each other through digital interconnections. These interconnections consist
   of physical wires, optical technologies, and wireless radio-frequency devices, facilitating
   the rapid exchange of messages over vast distances. For example, when an event occurs in the
   USA, individuals living in Japan can be promptly informed through this interconnected network.</span
      ><br />
   <center>
      <span class = "tooltip" data-tooltip="Computer Network">
         <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/Computer_Network.json" background="transparent" speed="1" style="width: 1500px; height: 600px;" loop autoplay class="anime"></lottie-player>
      </span>
   </center>
   <span
      >Indeed, a computer network shares similarities with the structure of 5G technology. In both
   cases, various components such as RU, DU, CU, and different devices continuously exchange
   messages, facilitating seamless communication and data transmission within the network.</span
      ><br />
   <h3
      id="What-role-does-time-accuracy-play-in-a-network"
      data-id="What-role-does-time-accuracy-play-in-a-network"
      >
      <span>What role does time accuracy play in a network?</span>
   </h3>
   <span
      >Firstly, let's consider an example from the stock market, where time accuracy is paramount.
   It's clear that even a minor discrepancy in timing can result in substantial financial losses.
   For instance, if the trading computer and your own computer are not synchronized, purchasing
   stocks at the wrong moment could lead to disparities in stock prices and significant financial
   losses. This underscores the necessity for precise time alignment and low latency within a
   computer network.</span
      >
   <span
      >Recognizing the critical importance of time accuracy, let's now delve deeper into the
   intricacies of this crucial protocol.</span
      >
</div>
