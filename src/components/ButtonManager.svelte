<script>
    import SoundButton from "../components/SoundButton.svelte";

    let soundButtons = [...Array(20)];
    soundButtons.fill({});
</script>

<style>
    .buttonGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.5rem;
    }
</style>

<div class="buttonGrid">
    {#each soundButtons as soundButton }
        <SoundButton></SoundButton>
    {/each}
</div>