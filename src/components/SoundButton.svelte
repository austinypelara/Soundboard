<script>
    let buttonImage = "button_normal.png";
    let isPlaying = false;
    
    function onHover(){
        if(isPlaying) return;
        buttonImage = "button_hover.png";
    }

    function onExit(){
        if(isPlaying) return;
        buttonImage = "button_normal.png";
    }

    function onClick(){
        isPlaying = !isPlaying;
        console.log("Click");
        if(isPlaying) buttonImage = "button_pressed.png";
        else buttonImage = "button_hover.png";
    }
</script>

<style>
    .soundButton {
        padding: 1rem;
        background-color: lightgrey;
        border-radius: 0.5rem;
    }

    img {
        display: block;
        width: 100%;
        cursor: pointer;
    }
</style>

<div class="soundButton">
    <img alt="Sound Button" src="{buttonImage}" on:mouseenter={onHover} on:mouseleave={onExit} on:click={onClick} />
</div>