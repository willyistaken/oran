<script lang="ts">
             import * as config from '$lib/config'
             import {base} from '$app/paths';
const setTheme = () => {
    var cn = document.documentElement.className;
    if(cn=='light') {
        document.documentElement.className = 'dark';
    } else {
        document.documentElement.className = 'light';
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
<button class = "theme-btn" on:click= {()=>setTheme()} >Toggle</button>
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
