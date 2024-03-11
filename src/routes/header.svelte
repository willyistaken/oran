<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
<script lang="ts">
             import * as config from '$lib/config'
             import {base} from '$app/paths';
const setTheme = () => {
    var cn = document.documentElement.className;
	 var text = document.getElementById("theme-btn");
	 var img1 = document.getElementById("ytp1");
	 var img2 = document.getElementById("ytp2");
	 img1.style.visibility="hidden";
	 img2.style.visibility="hidden";
    if(cn.includes('light')) {
	 	img1.style.visibility="visible";
        document.documentElement.className = 'dark';
		text.innerHTML = "D";
    } else {
	 	img2.style.visibility="visible";
        document.documentElement.className = 'light';
		text.innerHTML = "L";
    }
}
</script>

<nav>
<!-- Title -->
<a href="{base}" class="title">
                           <b> {config.title}</b>
</a>

<a href="{base}/RAN" class="navi">RAN</a>
<a href="{base}/5G" class="navi">5G</a>
<a href="{base}/ORAN" class="navi">ORAN</a>
<a href="{base}/PTP-Overview" class="navi">Overview of PTP</a>
<a href="{base}/How-Does-PTP-Work" class="navi">How Does PTP Work?</a>
<a href="{base}/PTP-Attacks" class="navi">Attacks</a>

<!-- Theme -->
<button id="theme-btn" class = "theme-btn" on:click= {()=>setTheme()} ><span>L</span></button>
</nav>
<div style="display:grid">
<img id="ytp1" src="https://www.tw-ytp.org/wp-content/uploads/2018/06/2018-logo_ytp_rgb_w.png" width="500px" height="200px" style="visibility:hidden; "/>
<img id="ytp2" src="https://www.tw-ytp.org/wp-content/uploads/2022/03/logo_ytp.png" width="500px" height="200px" style="position:absolute;"/>
</div>


<style>
nav {
padding-block:
    var(--size-7);
}

.navi:hover{
	border-radius:5px;
	border-width:2px;
	height:80%;
	font-weight:"bold";
}

.links {
margin-block:
    var(--size-7);
}

a {
color:
    inherit;
text-decoration:
    none;
}

@media (min-width: 768px) {
    nav {
display:
        flex;
justify-content:
        space-between;
    }

    .links {
display:
        flex;
gap:
        var(--size-7);
        margin-block: 0;
    }
}
</style>
