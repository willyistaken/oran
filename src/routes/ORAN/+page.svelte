<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Katex from 'svelte-katex';
   import VendorLock from "$lib/assets/VendorLock.png";
   import { onMount } from 'svelte';
   import Functional from "./functional.svelte";
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
   
   
</script>
<div id="doc" class="content" data-hard-breaks="true">

   <h1 id="This-is-where-O-RAN-comes-in" data-id="This-is-where-O-RAN-comes-in" style="white-space:nowrap">
      <span>This is where O-RAN comes in</span>
   </h1>
   <span
      >As discussed earlier, the C-RAN model in 5G has enabled numerous innovations. However, a
   fundamental challenge in the actual implementation of these ideas arises:
   vendor lock-in.</span
      >
   <img src="{VendorLock}" width="400px" style="margin-left:10%;" />
   <h3 id="Vendor-Lock-In" data-id="Vendor-Lock-In"><span>Vendor Lock-In</span></h3>
   <span
      >Vendor lock-in occurs due to poorly defined and unstandardized communication protocols
   between different components of the network. This lack of standardization leads manufacturers
   to employ their own proprietary protocols in their products. Consequently, components from
   different manufacturers are unable to communicate effectively. This issue is rather serious as
   it prevents the mixing and matching of BBUs and RRUs, thereby undermining the effectiveness of
   the entire C-RAN architecture.</span
      >
   <h3 id="The-solution" data-id="The-solution"><span>The solution?</span></h3>
   <span
      >To address this problem, the O-RAN ALLIANCE has proposed the Open-RAN specification and
   initiated the development of open-source software for <span class="tooltip" data-tooltip="Radio Access Network">RAN</span>.</span
      >
   <h3 id="O-RAN-Specification" data-id="O-RAN-Specification"><span>O-RAN Specification</span></h3>
   <span
      >But how exactly did the O-RAN specification define the component of RAN? And how did they
   managed to seperate <span class="tooltip" data-tooltip="Base Band Unit">BBU</span> and <span class="tooltip" data-tooltip="Remote Radio Unit">RRU</span>? Well, O-RAN splits the component bases on their function in
   RAN. This is called
   </span><strong><span>Functional Splits</span></strong><span>.</span><br>
   <div style="padding:50px;scale:1.2;">
      <Functional />
   </div>
   <span
      >As demonstrated above, 5G divides the functionality of RRU and BBU into three distinct parts:
   Radio Unit(RU), Distributed Unit(DU), and Centralized Unit(CU). In this architecture, the DU
   and CU are software components that run on servers, while the RU consists of the radio
   hardware responsible for transmitting and receiving signals. Each option for splitting up
   functions into these components has its own advantages and disadvantages, and the suitability
   of each can vary depending on specific environmental needs. Notebly, the splits option 7.2, is
   the one chosen by the O-RAN Alliances, thus becoming a popular choice within the industry.</span
      >
   <h2
      id="A-Bridge-from-O-RAN-to-its-security-concern-and-into-PTP"
      data-id="A-Bridge-from-O-RAN-to-its-security-concern-and-into-PTP"
      >
      <span>A Bridge from O-RAN to its security concern, and into PTP.</span>
   </h2>
   <span
      >Now that we understand the structure of O-RAN and 5G, there's still one important aspect to
   consider:
   Security. With the added complexity that comes from allowing 	interoperability between component providers.
   The security concern about the O-RAN architecture is of upmost importance and one of the major hurdle we need to
   overcome on the road of 5G. <br>
   This problem is multifaceted and complex. In this post however, we will only be discussing PTP, which is one of the protocol used in the O-RAN specification.</span>
</div>
