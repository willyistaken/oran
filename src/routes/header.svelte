<script lang="ts">
             import * as config from '$lib/config'
             import {base} from '$app/paths';
const setTheme = () => {
    var cn = document.documentElement.className;
	 var text = document.getElementById("theme-btn");
    if(cn.includes('light')) {
        document.documentElement.className = 'dark';
		text.innerHTML = "D";
    } else {
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
