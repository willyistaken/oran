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
   <h1 style="white-space:nowrap;"><span>O-RAN & PTP: An Interactive Guide</span></h1>
   <h2 id="Purpose-of-Our-Website" data-id="Purpose-of-Our-Website">
      <span>Purpose of This Website</span>
   </h2>
   <span
      >In the era of 5G technology, computers have become an integral part of human life. We chat
   with others, watch various videos, or even purchase items online. People do almost anything on
   the Internet! Consequently, it is crucial for us to understand how the digital world works. To
   this end, we have created this website to provide an overview of O-RAN and PTP, both of which
   play a vital role in 5G technology.</span
      >
	<center>
	<h3 style="margin:10%;color:#666666;">
	Please Clicked On The Topics You Are Interested In To Learn More About It
	</h3>	
	</center>
   <h2 id="Acknowledgements" data-id="Acknowledgements"><span>Acknowledgements</span></h2>
   This Website is created by <a href="https://github.com/willyistaken">WillyChan</a> , <a href="https://github.com/ANCuber">AnsonLai</a> and <a href="https://github.com/BrineYT">EricCheng</a> as an entry for the 8th Young Turing Program contest.
   Special thanks to <a href="https://www.tw-ytp.org/">Young Turing Program</a>, SysteX and Prof.Ray-Guang Cheng for their time and assistance.
   <h2 id="References" data-id="References"><span>References</span></h2>
   <div style="white-space:nowrap">
      <li><a href="https://www.lumenci.com/research-articles/evolution-of-ran-the-road-from-1g-to-5g" target="_blank" rel="noopener"><span>https://www.lumenci.com/research-articles/evolution-of-ran-the-road-from-1g-to-5g</span></a></li>
      <li><a href="https://www.ipcb.tw/rf-tech/531.html%EF%BC%89" target="_blank" rel="noopener"><span>https://www.ipcb.tw/rf-tech/531.html）</span></a></li>
      <li><a href="https://www.macnica.com/apac/galaxy/en/products-support/technical-articles/5g-o-ran/" target="_blank" rel="noopener"><span>https://www.macnica.com/apac/galaxy/en/products-support/technical-articles/5g-o-ran/</span></a></li>
      <li><a href="https://hackmd.io/@thc1006/BkWvmGlJi" target="_blank" rel="noopener"><span>https://hackmd.io/@thc1006/BkWvmGlJi</span></a></li>
      <li><a href="https://youtu.be/MGDDvnGRDFE" target="_blank" rel="noopener"><span>https://youtu.be/MGDDvnGRDFE</span></a></li>
      <li><a href="https://www.o-ran.org/blog/the-o-ran-alliance-security-work-group-continues-defining-o-ran-security-solutions" target="_blank" rel="noopener"><span>https://www.o-ran.org/blog/the-o-ran-alliance-security-work-group-continues-defining-o-ran-security-solutions</span></a></li>
      <li><a href="http://www.cie.org.tw/cms/JournalFiles/11106_chapter13.pdf" target="_blank" rel="noopener"><span>http://www.cie.org.tw/cms/JournalFiles/11106_chapter13.pdf</span></a></li>
      <li><a href="https://hackmd.io/@cnsrl/ryCxkuwYD" target="_blank" rel="noopener"><span>https://hackmd.io/@cnsrl/ryCxkuwYD</span></a></li>
      <li><a href="https://zhuanlan.zhihu.com/p/551560380" target="_blank" rel="noopener"><span>https://zhuanlan.zhihu.com/p/551560380</span></a></li>
      <li><a href="https://www.ufispace.com/tw/company/blog/application-scenarios-for-5g-fronthaul-gateways" target="_blank" rel="noopener"><span>https://www.ufispace.com/tw/company/blog/application-scenarios-for-5g-fronthaul-gateways</span></a></li>
      <li><a href="https://community.fs.com/blog/cpri-vs-ecpri-differences-and-meanings-to-5g.html" target="_blank" rel="noopener"><span>https://community.fs.com/blog/cpri-vs-ecpri-differences-and-meanings-to-5g.html</span></a></li>
      <li><a href="https://www.docomo.ne.jp/english/binary/pdf/corporate/technology/rd/technical_journal/bn/vol21_1/vol21_1_007en.pdf" target="_blank" rel="noopener"><span>https://www.docomo.ne.jp/english/binary/pdf/corporate/technology/rd/technical_journal/bn/vol21_1/vol21_1_007en.pdf</span></a></li>
      <li><a href="https://github.com/richardcochran/linuxptp" target="_blank" rel="noopener"><span>https://github.com/richardcochran/linuxptp</span></a></li>
      <li><a href="https://blog.amathjourney.com/cute-edges" target="_blank" rel="noopener"><span>https://blog.amathjourney.com/cute-edges</span></a></li>
      <li><a href="https://ethanuppal.github.io/physics/action" target="_blank" rel="noopener"><span>https://ethanuppal.github.io/physics/action</span></a></li>
      <li><a href="https://www.morespinach.xyz/some-gossip.html" target="_blank" rel="noopener"><span>https://www.morespinach.xyz/some-gossip.html</span></a></li>
      <li><a href="https://yizhe-ang.github.io/matrix-explorable/" target="_blank" rel="noopener"><span>https://yizhe-ang.github.io/matrix-explorable/</span></a></li>
      <li><a href="https://youtu.be/P-LS5rwklZY?si=Er6zxVPYwGZMuknP" target="_blank" rel="noopener"><span>https://youtu.be/P-LS5rwklZY?si=Er6zxVPYwGZMuknP</span></a></li>
      <li><a href="https://www.lumenci.com/research-articles/evolution-of-ran-the-road-from-1g-to-5g" target="_blank" rel="noopener"><span>https://www.lumenci.com/research-articles/evolution-of-ran-the-road-from-1g-to-5g</span></a></li>
      <li><a href="https://www.researchgate.net/publication/342455193_The_Evolution_of_Radio_Access_Network_Towards_Open-RAN_Challenges_and_Opportunities" target="_blank" rel="noopener"><span>https://www.researchgate.net/publication/342455193_The_Evolution_of_Radio_Access_Network_Towards_Open-RAN_Challenges_and_Opportunities</span></a></li>
      <li><a href="https://www.ipcb.tw/rf-tech/531.html" target="_blank" rel="noopener"><span>https://www.ipcb.tw/rf-tech/531.html</span></a></li>
      <li><a href="https://hackmd.io/FZMOF27cRdSCsGVgMcxmNA" target="_blank" rel="noopener"><span>https://hackmd.io/FZMOF27cRdSCsGVgMcxmNA</span></a></li>
      <li><a href="https://michaelgolomb.medium.com/the-road-to-5g-a-brief-history-of-mobile-networks-172e50d44c2d" target="_blank" rel="noopener"><span>https://michaelgolomb.medium.com/the-road-to-5g-a-brief-history-of-mobile-networks-172e50d44c2d</span></a></li>
      <li><a href="https://ejournal.stpi.narl.org.tw/sd/download?source=10409-11.pdf&amp;vlId=23BE2E23-AAB9-4155-9661-A394DCFE427D&amp;nd=1&amp;ds=1" target="_blank" rel="noopener"><span>https://ejournal.stpi.narl.org.tw/sd/download?source=10409-11.pdf&amp;vlId=23BE2E23-AAB9-4155-9661-A394DCFE427D&amp;nd=1&amp;ds=1</span></a></li>
      <li><a href="https://en.m.wikipedia.org/wiki/Precision_Time_Protocol" target="_blank" rel="noopener"><span>https://en.m.wikipedia.org/wiki/Precision_Time_Protocol</span></a></li>
      <li><a href="https://youtu.be/P-LS5rwklZY?si=cYoZEjsS9w23vw-3" target="_blank" rel="noopener"><span>https://youtu.be/P-LS5rwklZY?si=cYoZEjsS9w23vw-3</span></a></li>
      <li><a href="https://cybersecurity.springeropen.com/articles/10.1186/s42400-021-00080-y" target="_blank" rel="noopener"><span>https://cybersecurity.springeropen.com/articles/10.1186/s42400-021-00080-y</span></a></li>
      <li><a href="https://blog.meinbergglobal.com/2022/02/01/bmca-deep-dive-part-1/" target="_blank" rel="noopener"><span>https://blog.meinbergglobal.com/2022/02/01/bmca-deep-dive-part-1/</span></a></li>
      <li><a href="https://hackmd.io/xO68lmQWQ1SClpjnn7i_tA" target="_blank" rel="noopener"><span>https://hackmd.io/xO68lmQWQ1SClpjnn7i_tA</span></a></li>
      <li><a href="https://www.wikiwand.com/en/Cellular_network" target="_blank" rel="noopener"><span>https://www.wikiwand.com/en/Cellular_network</span></a></li>
      <li><a href="https://medium.com/@Matt.Bartlett/the-evolution-of-mobile-wireless-technology-from-0g-to-5g-cf98c80e2323" target="_blank" rel="noopener"><span>https://medium.com/@Matt.Bartlett/the-evolution-of-mobile-wireless-technology-from-0g-to-5g-cf98c80e2323</span></a></li>
      <li><a href="https://map.o-ran.org/" target="_blank" rel="noopener"><span>https://map.o-ran.org/</span></a>
         <a href="https://www.5gtechnologyworld.com/open-ran-functional-splits-explained/" target="_blank" rel="noopener"><span>https://www.5gtechnologyworld.com/open-ran-functional-splits-explained/</span></a>
      </li>
   </div>
</div>
