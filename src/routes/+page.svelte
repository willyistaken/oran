
<script lang="ts">
  import Test from './interective_test.svelte';
  import CT from "$lib/assets/celltower.svg";
</script>
<html lang = "en">
<div class="content">
<img src={CT}/>
<center>
  <h1>Website Title</h1>
  <h2>8th YTP 壹伍伍捌</h2>
</center> 
<h1>Purpose of this website</h1>
    In the era of 5G technology, computers have become an integral part of human life. We chat with others, watch various videos, or even purchase items online. People do almost anything on the internet! Consequently, it is crucial for us to understand how the digital world works. To this end, we have created this website to provide an overview of O-RAN and PTP (Precision Time Protocol), both of which are related to 5G technology.


<center><h1>O-RAN</h1></center>

<h2>What exactly is RAN?</h2>
    RAN or Radio Access Network is one of the major component of the mobile data network. It is responsible for connecting User Equipments (UE) with the Central Network (CN) wirelessly.

<!-- pic -->
<h5>RAN can be devided into 2 different parts:</h5>
<br>

<h6>Baseband Unit (BBU):</h6>
  In the era of 5G technology, computers have become an integral part of human life. We chat with others, watch various videos, or even purchase items online. People do almost anything on the internet! Consequently, it is crucial for us to understand how the digital world works. To this end, we have created this website to provide an overview of O-RAN and PTP (Precision Time Protocol), both of which are related to 5G technology.
<br>
<h6>Remote Radio Unit (RRU):</h6>
  In the era of 5G technology, computers have become an integral part of human life. We chat with others, watch various videos, or even purchase items online. People do almost anything on the internet! Consequently, it is crucial for us to understand how the digital world works. To this end, we have created this website to provide an overview of O-RAN and PTP (Precision Time Protocol), both of which are related to 5G technology.
<br>
-----
These 2 components communicate with each other via optical fiber or simply a electrical wire. The interface of such connection is called CPRI (Common Public Radio Interface). You can think of it as the USB port on various devices.
 
<!--- interactive -->
 
  The basic structure of a mobile network is that of cellular network, where land areas are divided into cells and is served by one or more base station.
 
<!--- pic -->
<br>

<h2>Okay so like… what is 5G?</h2>
<!-- meme -->
 
  The fifth-generation technology standard for cellular networks, commonly referred to as 5G, represents the latest advancement in telecommunications. Deployments of 5G began in 2019, heralding a new era with its promise of high speed and low latency. But what makes 5G so important? What's all the buzz about? To answer these questions, we need to take a detour and delve into the history of RAN (Radio Access Network).
 
<br>

<h3>The history of RAN</h3>
<dl>
  <dt>0G</dt>
  <dd>
    After World War II, wireless telephones became available to the general public. The era before cellular networks, often referred to as 0G, marked the advent of commercial wireless communication. Unlike earlier closed telephone systems, 0G represented a significant advancement as it was accessible as a commercial service. These early wireless phones were typically installed in cars or trucks, paving the way for greater mobility and accessibility in telecommunications.
  </dd>
  <!-- pic -->
  <dt>1G</dt>
  <dd>
    1G marks the advent of the first generation of cellular network, commercially deployed in 1979 by Nippon Telephone and Telegraph in Tokyo. This network utilized the cellular structure mentioned earlier and introduced the capability of automatic switching between different base stations, enhancing the efficiency of mobile communication. However, it relied on analog signals to transmit and receive information, making it susceptible to noise and distortion.
  </dd>
  <dt>2G</dt>
  <dd>
    One major difference between 2G and 1G is that 2G transmits signals using digital technology, marking the first generation to do so. Additionally, some 2G systems began to support SMS (Short Message Service) and simple data transmission, expanding the capabilities of mobile communication. However, 2G is now being phased out due to its comparatively low speed and transmission rate.
  </dd>
  <dt>3G</dt>
  <dd>
    3G is characterized by its ability to support high-speed mobile data, typically in the range of a few hundred kilobits per second (kbps). One of its key objectives is to provide standardized internet communication protocols, enabling users to browse the internet and access various data from anywhere in the world. Moreover, 3G combines wireless communication with the internet, creating a new system capable of handling images, music, video, and web browsing, which forms the foundation of the modern mobile network we are familiar with today. It uses a new technique called CDMA (Code Division Multiple Access) to efficiently package data for transmission. 
  </dd>
  <!-- pic -->
  <dt>4G</dt>
  <dd>
    4G represents a significant advancement over 3G, offering speeds up to 10 times faster than 3G. It achieves this through the utilization of Orthogonal Frequency Division Multiple Access (OFDMA) technology. OFDMA effectively converts high-speed signals into multiple parallel lower-speed signals, thereby enhancing the efficiency of frequency spectrum utilization and increasing data transmission rates.  
  </dd>
  <!-- pic -->
  <dt>5G</dt>
  <dd></dd>
</dl>
</div>
</html>
