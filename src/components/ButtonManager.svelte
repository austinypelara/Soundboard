<script>
    import {audioData} from "../audioData.js";
    import SoundButton from "../components/SoundButton.svelte";

    let currentId = -1;

    let soundButtons = audioData;
    soundButtons = soundButtons.map((val, idx) => { val.id = idx; return val; });

    function handleClick(e){
        const oldId = currentId;
        currentId = e.detail.id;
        //console.log("Old: " + oldId + " New: " + currentId)

        if(currentId == oldId){
            soundButtons[currentId].toggle(true);
            if(!soundButtons[currentId].isPlaying) 
                currentId = -1;
            return;
        }

        if(oldId != -1)
            soundButtons[oldId].toggle();

        soundButtons[currentId].toggle();

    }

    function resetButtons(e){
        currentId = -1;
    }
</script>

<style>
    .buttonGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.5rem;
    }

    p {
        margin-bottom: 1rem;
    }

    p > strong {
        color: lightcoral;
    }
</style>

<p>Now Playing <strong>{currentId > -1 ? soundButtons[currentId].name : "Nothing"}</strong></p>

<div class="buttonGrid">
    {#each soundButtons as soundButton, index (soundButton.id)}
        <SoundButton id={index} bind:name={soundButton.name} on:click={handleClick} on:complete={resetButtons} bind:toggle={soundButton.toggle} bind:isPlaying={soundButton.isPlaying} source={soundButton.url}></SoundButton>
    {/each}
</div>