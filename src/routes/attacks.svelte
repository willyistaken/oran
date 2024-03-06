<head>
    <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>

<script>    
    import Katex from "svelte-katex";
    import { onMount } from 'svelte';

    let LottiePlayer;

    onMount(async () => {
        const module = await import("@lottiefiles/svelte-lottie-player");
        LottiePlayer = module.LottiePlayer;
        
        
    });
    function CHGAttacks(ope) {
        const Norm = document.getElementById("norm");
        const Delay = document.getElementById("delay");
        const Egen = document.getElementById("egen");
        const Rem = document.getElementById("remove");
        const Rep = document.getElementById("replace");
        const Ngen = document.getElementById("ngen");
        const DoS = document.getElementById("dos");

        Norm.style.opacity = "0";
        Delay.style.opacity = "0";
        Egen.style.opacity = "0";
        Rem.style.opacity = "0";
        Rep.style.opacity = "0";
        Ngen.style.opacity = "0";
        DoS.style.opacity = "0";

        if (ope == "1") {
            Delay.style.opacity = "1";
            console.log("pass")
        } else if (ope == "2") {
            Egen.style.opacity = "1";
        } else if (ope == "3") {
            Rem.style.opacity = "1";
        } else if (ope == "4") {
            Rep.style.opacity = "1";
        } else if (ope == "5") {
            Ngen.style.opacity = "1";
        } else if (ope == "6") {
            DoS.style.opacity = "1";
        }
    }
    
</script>

<body>
<div>
    <center><h6 style="color:rgb(150,150,150); white-space:nowrap; padding:2%">Choose an attack type to observe its execution</h6></center>
</div>
<div style="display:flex; justify-content:space-evenly;">
    <button class="Edgeselect" on:click = {() => CHGAttacks(1)}>Delay</button>
    <button class="Edgeselect" on:click = {() => CHGAttacks(2)}>Edge Packet Generator</button>
    <button class="Edgeselect" on:click = {() => CHGAttacks(3)}>Removal</button>
    <button class="Edgeselect" on:click = {() => CHGAttacks(4)}>Replacement</button>
    <button class="Nodeselect" on:click = {() => CHGAttacks(5)}>Node Packet Generator</button>
    <button class="Nodeselect" on:click = {() => CHGAttacks(6)}>Denial of Service</button>
</div>

{#if LottiePlayer}
    <center>
    <div class = "wrapper">
        <div class = "interactive" id = "norm" style="opacity:1">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Norm.json"
                background="transparent"
                speed="1"
                autoplay="{true}"
                loop="{true}"
            />
        </div>
        <div class = "interactive" id = "delay" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Delay.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive" id = "egen" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/EdgeGenerator.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}" 
            />
        </div>
        <div class = "interactive" id = "remove" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Removal_X.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive" id = "replace" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Replaced.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive" id = "ngen" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/NodeGenerator.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive" id = "dos" style="opacity:0">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/DoS.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
    </div>
    </center>
{/if}

</body>



<style>
    .Edgeselect {
        padding: 2%;
        height: 50px;
        background-color: #D9DBF1;
    }
    .Nodeselect {
        padding: 2%;
        height: 50px;
        background-color: #F9F9ED;
    }
    .interactive{
        pointer-events:none;
        scale: 1.35;
        padding: 0%;
        width: 1000px;
        height: 520px;
        position: absolute;
    }
   
    .wrapper{
        height:600px;
        display: grid;
        place-items: center;
    }
</style>