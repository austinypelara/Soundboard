<script>
    import {base} from "$app/paths";
    import { createEventDispatcher } from "svelte";

    export let id = 0;
    export let isPlaying = false;
    export let name = "";
    export let source = "anime-wow.mp3";

    $: baseSource = base + "/" + source;

    let buttonImage = base + "/button_normal.png";
    let player;

    const dispatch = createEventDispatcher();
    
    export const toggle = (keepHover = false) => {
        isPlaying = !isPlaying;
        //console.log("Click: " + id);
        if(isPlaying){
            turnOn();
            return;
        } 
        
        turnOff();

        if(keepHover){
            onHover();
        }
        
    }
    
    export const turnOff = () => {
        isPlaying = false;
        player.pause();
        player.currentTime = 0;
        buttonImage = base + "/button_normal.png";
    }

    export const turnOn = () => {
        isPlaying = true;
        player.play();
        buttonImage = base + "/button_pressed.png";
    }

    function onHover(){
        if(isPlaying) return;
        buttonImage = base + "/button_hover.png";
    }

    function onExit(){
        if(isPlaying) return;
        buttonImage = base + "/button_normal.png";
    }
</script>

<style>
    .soundButton {
        padding: 1rem;
        background-color: rgba(255, 80, 80, 0.1);
        border-radius: 0.5rem;
    }

    img {
        display: block;
        width: 100%;
        cursor: pointer;
        margin-bottom: 2rem;
    }

    p {
        text-align: center;
    }
</style>

<div class="soundButton">
    <img alt="Sound Button" src="{buttonImage}" on:mouseenter={onHover} on:mouseleave={onExit} on:click={() => {dispatch("click", {id: id, callback: toggle})}} />
    <p>{name}</p>
    <audio bind:this={player} src={baseSource} on:ended={() => {turnOff(); dispatch("complete", id)}}></audio>
</div>