<svelte:head>
    <title>Elara Soundboard</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            min-height: 100vh;
            font-family: 'Poppins', sans-serif;
        }

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }
    </style>
</svelte:head>

<script>
    import ButtonManager from "../components/ButtonManager.svelte";
</script>

<style>
    h1 {
        padding: 2rem 0;
    }
</style>

<main class="ctn">
    <h1>Elara Soundboard</h1>

    <ButtonManager></ButtonManager>
</main>