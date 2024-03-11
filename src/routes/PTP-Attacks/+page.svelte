<head>
   <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
   import Attacks from "./attacks.svelte";
   import CyberSecurity from "$lib/assets/CyberSecurity.png";
   import { onMount } from 'svelte';
   
   	let LottiePlayer;
   
   	onMount(async () => {
   		const module = await import('@lottiefiles/svelte-lottie-player');
   		LottiePlayer = module.LottiePlayer;
   	});
   
   
</script>
<div id="doc" class="content" data-hard-breaks="true">
   <h1 id="Potential-risks-in-a-PTP-network" data-id="Potential-risks-in-a-PTP-network">
      <span>Potential risks in a PTP network</span>
   </h1>
   <span
      >Since PTP operates by exchanging timing messages, certain risks may arise in this process. If
   a message is deliberately modified by a third party, or if unwanted incorrect messages are
   generated, a PTP network may fail to maintain its accuracy. It is crucial to remain vigilant
   against such attacks to prevent our digital devices from falling prey to them. In the
   following section, we will introduce some common PTP attacks and share tips on how to avoid
   them.</span
      >
   <h3 id="PTP-attack-types" data-id="PTP-attack-types"><span>PTP attack types</span></h3>
   <span
      >A simple way to classify PTP attack types is to separate them into internal ones and external
   ones.</span
      >
   <h4 id="Internal-PTP-attack" data-id="Internal-PTP-attack"><span>Internal PTP attack</span></h4>
   <span
      >As for internal PTP attacks, attackers can be classified into two levels based on their
   abilities and their access to a device.</span
      >
   <h5 id="Simple-attacks" data-id="Simple-attacks"><span>Simple attacks</span></h5>
   <span
      >This level of attackers operates within a trusted network, either through a secretly-added
   untrusted device or a legitimate trusted device, but WITHOUT having access to cryptographic
   keys. Some attacking movements at this level include packet removal, packet delaying, traffic
   generation and Denial of Service (DoS) attacks.</span
      >
   <h5 id="Advanced-attacks" data-id="Advanced-attacks"><span>Advanced attacks</span></h5>
   <span
      >The advanced attackers, who gain FULL access to a device, including access to
   encryption/authentication keys through malware infection or manipulated firmware upgrades, are
   capable of controlling the device's behavior or configuration. They can alter clock properties
   or manipulate packet content in transit to deceive the BMCA and disrupt the time exchange
   process. Additionally, they have the capability to generate new legitimate-looking packets to
   disrupt accurate time alignment.</span
      >
   <h4 id="External-PTP-attacks" data-id="External-PTP-attacks">
      <span>External PTP attacks</span>
   </h4>
   <span
      >External PTP attackers operate from outside the trusted network and do not have access to
   secret network encryption or authentication keys. These attackers may attempt to disrupt the
   time synchronization process by exploiting vulnerabilities of devices or connections in the
   network. Their lack of access to cryptographic keys does not hinder their ability to target
   the network, as they employ various techniques to intercept, generate or modify PTP packets,
   thus disrupting time synchronization process.</span
      >
   <h3 id="PTP-attacker-types" data-id="PTP-attacker-types"><span>PTP attacker types</span></h3>
   <h4 id="Man-in-the-middle-attacker" data-id="Man-in-the-middle-attacker">
      <span>Man-in-the-middle attacker</span>
   </h4>
   <span
      >A man-in-the-middle attacker focuses on intercepting and manipulating messages within a PTP
   network. This attacker can intercept and modify PTP packets while they are in transit. They
   typically achieve this by gaining physical access to a node within the network or by gaining
   full control of a device within the network.</span
      >
   <h4 id="Packet-injector-attacker" data-id="Packet-injector-attacker">
      <span>Packet injector attacker</span>
   </h4>
   <span
      >A packet injector attacker disrupts the time exchange system by flooding the network with
   excessive network traffic. Despite having limited attack capabilities in an untrusted network,
   it can still render a PTP network out of function by overwhelming it with a high volume of
   packets, causing congestion and hindering the synchronization process.</span
      >
   <h3 id="Attacking-scenario" data-id="Attacking-scenario"><span>Attacking scenario</span></h3>
   <span
      >Below is an interactive computer network where you can experiment with adding various
   attackers to examine their abilities to disrupt the network.</span
      >
   <div>
      <Attacks/>
   </div>
   <h2 id="How-can-we-ensure-our-safety" data-id="How-can-we-ensure-our-safety">
      <span>How can we ensure our safety</span>
   </h2>
   <span
      >While cybersecurity in PTP or computer networks is primarily the responsibility of software
   engineers, there are steps we can take to protect ourselves. Installing a firewall, exercising
   caution with suspicious emails or links, and avoiding visiting abnormal websites are all
   measures that can help prevent potential invasions by PTP attackers. By taking these
   precautions, we can safeguard ourselves and lower the risk of financial loss, especially when
   engaging in activities such as stock speculation. Ultimately, these measures allow us to fully
   enjoy the convenience brought by 5G technology!</span
      >
   <center><img src={CyberSecurity} width="600px"/> </center>
 </div>
