<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Katex from 'svelte-katex';
   import CRAN from "$lib/assets/CRAN.svg";
   import DRAN from "$lib/assets/DRAN.svg";
   import Traffic from "./traffic.svelte";
   import What5GIs from "$lib/assets/What5GIs.png";
   import { onMount } from 'svelte';
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
</script>

<div id="doc" class="content" data-hard-breaks="true">
   <h1 id="Okay-so-like…-what-is-5G" data-id="Okay-so-like…-what-is-5G">
      <span>Okay so like</span><span class="smartypants">…</span><span> what is 5G?</span>
   </h1>
   <center><img src={What5GIs} width="400px"/></center>
   <span
      >The fifth-generation technology standard for cellular networks, commonly referred to as 5G,
   represents the latest advancement in telecommunications. Deployments of 5G began in 2019,
   heralding a new era with its promise of high speed and low latency. But what makes 5G so
   important? What's all the buzz about? To answer these questions, we need to take a detour and
   delve into the history of <span class="tooltip" data-tooltip="Radio Access Network">RAN</span>.</span
      >
   <h3 id="The-history-of-RAN" data-id="The-history-of-RAN"><span>The history of RAN</span></h3>
   <h4 id="0G" data-id="0G"><span>0G</span></h4>
   <span
      >After World War II, wireless telephones became available to the general public. The era
   before cellular networks is often referred to as 0G, marked the advent of commercial wireless
   communication. Unlike earlier closed telephone systems, 0G represented a significant
   advancement as it was accessible as a commercial service. These early wireless phones were
   typically installed in cars or trucks, paving the way for greater mobility and accessibility
   in telecommunications.</span
      >
   <center>
      <span class="tooltip" data-tooltip="Car Phones (Picture from WikiPedia)">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Motorola_4500X.jpg/1200px-Motorola_4500X.jpg" alt="willychan breaks table" width = 600px />
      </span>
   </center>
   <h4 id="1G" data-id="1G"><span>1G</span></h4>
   <span
      >This marks the advent of the first generation of cellular network, commercially deployed in
   1979 by Nippon Telephone and Telegraph in Tokyo. This network utilized the cellular structure
   mentioned earlier and introduced the capability of automatic switching between different base
   stations. However, it relied on analog signals to transmit and receive information, making it
   susceptible to noise and distortion.</span
      >
   <h4 id="2G" data-id="2G"><span>2G</span></h4>
   <span
      >One major difference between 2G and 1G is that 2G transmits signals using digital signals,
   marking the first generation to do so. Additionally, some 2G systems began to support
   SMS(Short Message Service) and simple data transmission. However, 2G is now being phased out
   due to its comparatively low speed and transmission rate.</span
      >
   <h4 id="3G" data-id="3G"><span>3G</span></h4>
   <span
      >3G is characterized by its ability to support high-speed mobile data, typically in the range
   of a few hundred kilobits per second (kbps). 3G also aims to provide standardized Internet
   communication protocols, enabling users to browse the Internet and access various data from
   anywhere in the world. Moreover, 3G combines wireless communication with the Internet,
   creating a new system capable of handling images, music, video, and web browsing, which forms
   the foundation of the modern mobile network we are familiar with today. It uses a new
   technique called CDMA (Code Division Multiple Access) to efficiently package data for
   transmission.</span
      >
   <center>
      <span class="tooltip" data-tooltip="CDMA algorithm mixes signal together in order to increase trasmission efficiency">
         <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/CDMA.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay class="anime"></lottie-player>
      </span>
   </center>
   <h4 id="4G" data-id="4G"><span>4G</span></h4>
   <span
      >4G represents a significant advancement over 3G, offering speeds up to 10 times faster than
   its predecessor. It achieves this leap in performance by using Orthogonal Frequency Division
   Multiple Access(OFDMA) technology. OFDMA effectively turns high-speed signals into multiple
   parallel lower-speed signals, thereby enhancing the efficiency of frequency spectrum
   utilization and increasing data transmission rates. This technological innovation enables
   smoother and faster mobile internet experiences, catering to the growing demand for high-speed
   data services.</span
      >
   <h4 id="5G" data-id="5G"><span>5G</span></h4>
   <span>Finally, we arrive at 5G, the newest generation of cellular technology.</span><br />
   <span
      >In recent years, the internet and our daily lives have become more entangled than ever
   before. Devices such as autonomous vehicles and various IOT appliances hold the promise of
   changing our lives for the better. However, as the quantity of such devices increases, the
   latency and speed limitations of 4G are proving to be insufficient. Therefore, the primary
   focus of 5G is to provide even faster and lower latency mobile data services.</span
      >
   <span
      >One of the main differences between 5G and 4G is the C-RAN architecture, which stands for
   Centralized RAN. The concept behind C-RAN is to separate the <span class="tooltip" data-tooltip="Base Band Unit">BBU</span> from the <span class="tooltip" data-tooltip="Remote Radio Unit">RRU</span> in a base
   station, allowing the BBU to be shared among multiple RRUs. This is in contrast to the D-RAN
   (Distributed RAN) used in previous generations, where the RRU and BBU are bundled together at
   the cell site.</span
      >
   <div style="display:flex;padding:10%;justify-content:space-evenly;">
      <div>
         <span class="tooltip" data-tooltip="Centralized RAN">
         <img class="CDRAN" src={CRAN} alt="CRAN" style="padding:10%;scale:1.5;"/>
         </span>
      </div>
      <div>
         <span  class="tooltip" data-tooltip="Distributed RAN">
         <img class="CDRAN" src={DRAN} alt="DRAN" style="position:relative;bottom:5px;padding:10%;scale:1.46;"/>
         </span>
      </div>
   </div>
   <span
      >By using C-RAN, 5G can lower costs and increase efficiency by pooling all of the BBU
   resources. Additionally, C-RAN enables the running of BBUs as virtualized software on existing
   cloud computing services, a concept known as V-RAN(Virtualized <span class="tooltip" data-tooltip="Radio Access Network">RAN</span>). Moreover, machine
   learning algorithms are utilized to dynamically allocate resources to different RRUs based on
   internet traffic patterns, a process facilitated by the RAN Intelligent Controller(RIC).</span
      >
   <div>
      <Traffic/>
   </div>
	

</div>
