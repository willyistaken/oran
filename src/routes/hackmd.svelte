<script>
  import Katex from 'svelte-katex';
  import CellGraph from "$lib/assets/cellular-graph.svg";
</script>
<div id="doc" class="content" data-hard-breaks="true">
	<h1 id="Website-Title" data-id="Website-Title"><span>Website Title?</span></h1>
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
	
	
		&lt;pic&gt;<span
			>a interactive image of the whole structure of RAN station where it shows a animation of data
			being transfer from UE to the central network. and when you click on a part it stands out and
			shows its name</span
		>&lt;/pic&gt;
	
	
		<span
			>The basic structure of a mobile network is that of a cellular network, where land areas are
			divided into individual cells
			that are each served by one or more base stations.</span
		>
	<center>	
	<span class = "tooltip" data-tooltip="Representation of a Cellular Network">
	<img src={CellGraph} />
	</span>
	</center>
	<h2 id="Okay-so-like…-what-is-5G" data-id="Okay-so-like…-what-is-5G">
		<span>Okay so like</span><span class="smartypants">…</span><span> what is 5G?</span>
	</h2>
	&lt;meme&gt;<span> </span>&lt;/meme&gt;
	
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
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Motorola_4500X.jpg/1200px-Motorola_4500X.jpg" width = 600px />
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
	
	&lt;pic&gt;<span>animation of CDMA</span>&lt;/pic&gt;
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
	
	&lt;pic&gt;<span>animation of OFDMA</span>&lt;/pic&gt;
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
	
	&lt;pic&gt;<span>C-RAN vs D-RAN</span>&lt;/pic&gt;
	
		<span
			>By using C-RAN, 5G can lower costs and increase efficiency by pooling all of the BBU
			resources. Additionally, C-RAN enables the running of BBUs as virtualized software on existing
			cloud computing services, a concept known as V-RAN(Virtualized RAN). Moreover, machine
			learning algorithms are utilized to dynamically allocate resources to different RRUs based on
			internet traffic patterns, a process facilitated by the RAN Intelligent Controller(RIC).</span
		>
	
	
		&lt;pic&gt;<span
			>interective component of V-RAN and resource allocation by having a slider to increase a
			traffic of some places and a cloud to add resources</span
		><span class="smartypants">…</span>&lt;/pic&gt;
	
	<h2 id="This-is-where-O-RAN-comes-in" data-id="This-is-where-O-RAN-comes-in">
		<span>This is where O-RAN comes in</span>
	</h2>
	
		<span
			>As discussed earlier, the C-RAN model in 5G has enabled numerous innovations. However, a
			fundamental challenge in the actual implementation of these ideas arises: vendor lock-in.</span
		>
	
	&lt;meme&gt;&lt;/meme&gt;
	<h3 id="Vendor-Lock-In" data-id="Vendor-Lock-In"><span>Vendor Lock-In</span></h3>
	
		<span
			>Vendor lock-in occurs due to poorly defined and unstandardized communication protocols
			between different components of the network. This lack of standardization leads manufacturers
			to employ their own proprietary protocols in their products. Consequently, components from
			different manufacturers are unable to communicate effectively. This issue is rather serious as
			it prevents the mixing and matching of BBUs and RRUs, thereby undermining the effectiveness of
			the entire C-RAN architecture.</span
		>
	
	&lt;meme&gt;&lt;/meme&gt;
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
		</span><strong><span>Functional Splits</span></strong><span>.</span>
	
	
		&lt;pic&gt;<span
			>Interective element of functional split where a slider control the splits option and three
			component got filled up with function and the difficulty and cost bar changes
		</span>&lt;/pic&gt;
	
	
		<span
			>As you can see from the above demostration, 5G splits RRU and BBU down into 3 parts, RU, DU
			and CU. Where DU and CU are software that runs in servers and RU is the radio hardware the
			send the receive signals. The different option for spliting up functions into these component
			each have its upsides and downsides and can all be use in various environment depends on its
			sepcific needs. (The splits option 7.2, however, is the one chosen by the O-RAN Alliances)</span
		>
	
	
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
			>Now that we understand the structure of O-RAN, there's still one important aspect to
			consider: the need for precise time alignment in 5G networks. Ensuring accurate time alignment
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
		&lt;pic&gt;<span
			>a computer network, the devices of which is sending and receiving messages</span
		>&lt;/pic&gt;
	
	
		<span
			>Indeed, a computer network shares similarities with the structure of 5G technology. In both
			cases, various components such as RU, DU, CU, and different devices continuously exchange
			messages, facilitating seamless communication and data transmission within the network.</span
		><br />
		&lt;pic&gt;<span>a working 5G structure</span>&lt;/pic&gt;
	
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
	
	
		&lt;pic&gt;<span>a short anime showing the transformation from a graph to a tree</span
		>&lt;/pic&gt;
	
	<ul>
		<li>
			<span
				>BMC Algorithm: using some mechanisms to determine which clock is more suitable to be a
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
			further divided into four categories: masters, slaves, only-slaves, and the grandmaster. These
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
	
	
		&lt;pic&gt;<span
			>a tree with directed edges, in which the root is the GM while the non-root nodes is ordinary
			clocks.</span
		>&lt;/pic&gt;
	
	<h4 id="Transparent-ClockTC" data-id="Transparent-ClockTC"><span>Transparent Clock(TC)</span></h4>
	
		<span
			>To enhance accuracy in time synchronization, PTP introduces the use of Transparent Clocks
			(TC). TCs play a crucial role in preventing congestion in the network by adjusting PTP time
			messages to eliminate packet processing delays, earning them the moniker "Transparent." TCs
			are capable of compensating for delays during message exchange between clocks, thereby
			ensuring precise time alignment.</span
		>
	
	
		&lt;pic&gt;<span
			>wo pictures to compare interconnections between MC and OC, with and without transparent clock</span
		>&lt;/pic&gt;
	
	<h4 id="Boundary-ClockBC" data-id="Boundary-ClockBC"><span>Boundary Clock(BC)</span></h4>
	
		<span
			>The Boundary Clock (BC) is another type of clock aimed at achieving greater accuracy in PTP.
			While a master clock is responsible for providing time reference for too many slave clocks,
			latency may increase and time accuracy may decrease. BC addresses this issue by incorporating
			a built-in PTP master clock. As BCs can only communicate with a limited number of slaves,
			adding several BCs between masters and their slaves ensures that PTP masters are not over
			solicited, thereby enhancing time accuracy.</span
		>
	
	&lt;pic&gt;<span>show how a BC works in a network</span>&lt;/pic&gt;
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
			actual time this message is sent(</span
		><span class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="0"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>1</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span>). Then, the master clock sends out a follow_up message to convey </span><span
			class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="1"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>1</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span
			>. This procedure is required because sync message alone cannot accurately record the time
			when it is sent. The slave clock then records both
		</span><span class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="2"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>1</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span>(from the follow_up message) and the time it receives the sync message(</span><span
			class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="3"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>2</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span
			>). At this point, the slave clock becomes aware of the time difference between itself and its
			master. However, it cannot adjust its time yet because it doesn't know the duration it takes
			for a message to travel from the master to the slave clock.</span
		>
	
	
		<span
			>Upon receiving the follow-up message from the master, the slave subsequently sends a
			delay_request message and records the time as
		</span><span class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="4"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>3</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span
			>. The master clock immideately replies with a delay_response message, including the
		</span><span class="mathjax"
			><mjx-container
				class="MathJax CtxtMenu_Attached_0"
				jax="CHTML"
				tabindex="0"
				ctxtmenu_counter="5"
				style="font-size: 119.5%; position: relative;"
				><mjx-math class="MJX-TEX" aria-hidden="true"
					><mjx-msub
						><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi><mjx-script
							style="vertical-align: -0.15em; margin-left: -0.12em;"
							><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c34"></mjx-c></mjx-mn></mjx-script
						></mjx-msub
					></mjx-math
				><mjx-assistive-mml unselectable="on" display="inline"
					><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>T</mi><mn>4</mn></msub></math
					></mjx-assistive-mml
				></mjx-container
			></span
		><span>
			value. With these four timestamps, the slave clock can calculate the Offset and Delay,
			enabling it to synchronize the time accurately.</span
		>
	
	
		<img
			src="https://hackmd.io/_uploads/H1v2gH2VT.png"
			alt="make this image a video"
			loading="lazy"
		/><br />
		&lt;pic&gt;<span>a short video with play buttom</span>&lt;/pic&gt;
	<br>
	<h6>Formula: Offset = <Katex> \frac{'{(T_2-T_1)-(T_4-T_3)}'}{'{2}'} </Katex>	</h6>
	<h6>Formula: Delay = <Katex> \frac{'{(T_2-T_1)+(T_4-T_3)}'}{'{2}'} </Katex>	</h6>

	
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
	
	
		&lt;pic&gt;<span
			>Interactive: here, maybe we can build a computer network, and let users to add different
			attackers themselves.</span
		>&lt;/pic&gt;
	
	<h3 id="How-can-we-ensure-our-safety" data-id="How-can-we-ensure-our-safety">
		<span>How can we ensure our safety</span>
	</h3>
	
		<span
			>While cybersecurity in PTP or computer networks is primarily the responsibility of software
			engineers, there are steps we can take to protect ourselves. Installing a firewall, exercising
			caution with suspicious emails or links, and avoiding visiting abnormal websites are all
			measures that can help prevent potential invasions by PTP attackers. By taking these
			precautions, we can safeguard ourselves and lower the risk of financial loss, especially when
			engaging in activities such as stock speculation. Ultimately, these measures allow us to fully
			enjoy the convenience brought by 5G technology!</span
		>
	
	&lt;meme&gt;&lt;/meme&gt;
	<h2 id="References" data-id="References"><span>References</span></h2>
	<h2 id="Acknowledgements" data-id="Acknowledgements"><span>Acknowledgements</span></h2>
</div>
