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

    function Attacking(str) {
        
    }
</script>

<body>
<div>
    <center><h6 style="color:rgb(150,150,150); white-space:nowrap; padding:2%">Choose an attack type to observe its execution</h6></center>
</div>
<div class = "wrapper">
{#if LottiePlayer}
    <div style="display:flex; justify-content:space-evenly;">
        <button class="Edgeselect">Delay</button>
        <button class="Edgeselect">Edge Packet Generator</button>
        <button class="Edgeselect">Removal</button>
        <button class="Edgeselect">Replacement</button>
        <button class="Nodeselect">Node Packet Generator</button>
        <button class="Nodeselect">Denial of Service</button>
    </div>
    <div>
    <center>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Norm.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Delay.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/EdgeGenerator.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Removal_O.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Removal_X.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/Replaced.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/NodeGenerator.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
        <div class = "interactive">
            <LottiePlayer
                src = "https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/attack/DoS.json"
                background="transparent"
                speed="1";
                autoplay="{true}"
                loop="{true}"   
            />
        </div>
    </center>
    </div>  
{/if}
</div>
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
        position: relative;
        pointer-events:none;
        scale: 1.35;
        padding: 0%;
        width: 1000px;
        height: 500px;
    }
    .wrapper{
        position: relative;
    }
</style>