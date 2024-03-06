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
    console.log(document.documentElement.className);
}
</script>

<nav>
<!-- Title -->
<a href="{base}" class="title">
                           <b> {config.title}</b>
</a>


<!-- Theme -->
<button id="theme-btn" class = "theme-btn" on:click= {()=>setTheme()} ><span>L</span></button>
</nav>
<div style="display:grid" height="500px">
<img id="ytp1" src="https://www.tw-ytp.org/wp-content/uploads/2018/06/2018-logo_ytp_rgb_w.png" style="width:67%; visibility:hidden; "/>
<img id="ytp2" src="https://www.tw-ytp.org/wp-content/uploads/2022/03/logo_ytp.png" style="width:50%; position:absolute;"/>
</div>


<style>
nav {
padding-block:
    var(--size-7);
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
