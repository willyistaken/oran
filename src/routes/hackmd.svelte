<head>
<script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<script>
import Katex from 'svelte-katex';
import CellGraph from "$lib/assets/cellular-graph.svg";
import RootedTree from "$lib/assets/rooted_tree.svg";
import CRAN from "$lib/assets/CRAN.svg";
import DRAN from "$lib/assets/DRAN.svg";
import Traffic from "./traffic.svelte";
import Attacks from "./attacks.svelte";
import { onMount } from 'svelte';
import Functional from "./functional.svelte";

	let LottiePlayer;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});


</script>
<div id="doc" class="content" data-hard-breaks="true">
                                    <h1 style="white-space:nowrap;"><span>O-RAN & PTP: An Interective Guide</span></h1>
                                            <h2 id="Purpose-of-Our-Website" data-id="Purpose-of-Our-Website">
                                                    <span>Purpose of Our Website</span>
                                                    </h2>

                                                    <span
                                                    >In the era of 5G technology, computers have become an integral part of human life. We chat
                                                    with others, watch various videos, or even purchase items online. People do almost anything on
                                                        the Internet! Consequently, it is crucial for us to understand how the digital world works. To
                                                        this end, we have created this website to provide an overview of O-RAN and PTP, both of which
                                                        play a vital role in 5G technology.</span
                                                        >

                                                        <h2 id="What-exactly-is-RAN" data-id="What-exactly-is-RAN"><span>What exactly is RAN?</span></h2>

                                                                <span
                                                                >The Radio Access Network (RAN) is one of the major components of the mobile data network. It
                                                                    is responsible for wirelessly connecting User Equipment (UE) with the Central Network (CN).</span
																	>


                                                                        <span>RAN can be devided into 2 different parts:</span><br />
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
                                                                                    Interface), which serves as a standardized method for transmitting digital data between BBU
                                                                                and the RRH. Conceptually, CPRI can be likened to the USB port found on various devices.</span
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
                                             <h2 id="Okay-so-like…-what-is-5G" data-id="Okay-so-like…-what-is-5G">
                                                     <span>Okay so like</span><span class="smartypants">…</span><span> what is 5G?</span>
                                                             </h2>
                                                             &lt;
meme&gt;
<span> </span>&lt;
/meme&gt;

<span
>The fifth-generation technology standard for cellular networks, commonly referred to as 5G,
represents the latest advancement in telecommunications. Deployments of 5G began in 2019,
heralding a new era with its promise of high speed and low latency. But what makes 5G so
important? What's all the buzz about? To answer these questions, we need to take a detour and
delve into the history of RAN.</span
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
                        Centralized RAN. The concept behind C-RAN is to separate the BBU from the RRU in a base
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
cloud computing services, a concept known as V-RAN(Virtualized RAN). Moreover, machine
learning algorithms are utilized to dynamically allocate resources to different RRUs based on
internet traffic patterns, a process facilitated by the RAN Intelligent Controller(RIC).</span
>

<div>
<Traffic/>
</div>



<h2 id="This-is-where-O-RAN-comes-in" data-id="This-is-where-O-RAN-comes-in">
        <span>This is where O-RAN comes in</span>
        </h2>

        <span
        >As discussed earlier, the C-RAN model in 5G has enabled numerous innovations. However, a
        fundamental challenge in the actual implementation of these ideas arises:
        vendor lock-in.</span
        >

        &lt;
meme&gt;
&lt;
/meme&gt;
<h3 id="Vendor-Lock-In" data-id="Vendor-Lock-In"><span>Vendor Lock-In</span></h3>

                                <span
                                >Vendor lock-in occurs due to poorly defined and unstandardized communication protocols
                                between different components of the network. This lack of standardization leads manufacturers
                                to employ their own proprietary protocols in their products. Consequently, components from
                                different manufacturers are unable to communicate effectively. This issue is rather serious as
                                it prevents the mixing and matching of BBUs and RRUs, thereby undermining the effectiveness of
                                the entire C-RAN architecture.</span
                                >

                                &lt;
meme&gt;
&lt;
/meme&gt;
<h3 id="The-solution" data-id="The-solution"><span>The solution?</span></h3>

                              <span
                              >To address this problem, the O-RAN ALLIANCE has proposed the Open-RAN specification and
                              initiated the development of open-source software for RAN.</span
                              >

                              <h3 id="O-RAN-Specification" data-id="O-RAN-Specification"><span>O-RAN Specification</span></h3>

                                      <span
                                      >But how exactly did the O-RAN specification define the component of RAN? And how did they
                                      managed to seperate BBU and RRU? Well, O-RAN splits the component bases on their function in
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
                   <h2> PTP </h2>
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
                                                </span></center>


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

               <h2 id="How-PTP-works" data-id="How-PTP-works"><span>How PTP works</span></h2>

                       <span
                       >In a computer network, multiple nodes are interconnected by edges (connections) between these
                           devices. By employing the Best Master Clock Algorithm (BMCA), a PTP network determines the
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

                                                    <span>As explained above, there is </span><strong><span>ONLY</span></strong><span>
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
            >In the time exchange process, the master clock initially sends a sync message and records the
            actual time this message is sent (<Katex>T_1</Katex>). Then, the master clock sends out a follow_up message to convey </span><span
                >. This procedure is required because sync message alone cannot accurately record the time
                when it is sent. The slave clock then records both
                </span><span>(from the follow_up message) and the time it receives the sync message (<Katex>T_2</Katex>). At this point, the slave clock becomes aware of the time difference between itself and its
                master. However, it cannot adjust its time yet because it doesn't know the duration it takes
                for a message to travel from the master to the slave clock.</span>


                <span
                >Upon receiving the follow-up message from the master, the slave subsequently sends a
                delay_request message and records the time as <Katex>\,T_3</Katex>
                </span><span
                >. The master clock immideately replies with a delay_response message, including the
                </span><span>
                value <Katex>\,T_4</Katex>. With these four timestamps, the slave clock can calculate the Offset and Delay,
                      enabling it to synchronize the time accurately.</span
                      >


                <center>
                        <div style="scale:1;border-width:5px;padding:5%;border-radius:2%;">
                                <div style="padding:5%;">
                                <lottie-player src="https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/PTP_anime.json" background="transparent" controls speed="0.8" style="width: 70%;"></lottie-player>
                                <h5 style="color:rgb(150,150,150)">Press the play button to see how PTP works!</h5>            
                        </div>  </div> 
                </center>
                                         
                        
                                         <h6>Formula:
Offset = <Katex> \frac{'{(T_2-T_1)-(T_4-T_3)}'} {'{2}'} </Katex>	</h6>
<h6>Formula:
Delay = <Katex> \frac{'{(T_2-T_1)+(T_4-T_3)}'} {'{2}'} </Katex>	</h6>


<h2 id="Potential-risks-in-a-PTP-network" data-id="Potential-risks-in-a-PTP-network">
        <span>Potential risks in a PTP network</span>
        </h2>

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

        &lt;
meme&gt;
&lt;
/meme&gt;


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
<a href="https://www.5gtechnologyworld.com/open-ran-functional-splits-explained/" target="_blank" rel="noopener"><span>https://www.5gtechnologyworld.com/open-ran-functional-splits-explained/</span></a></li>
</div>

                                    </div>
