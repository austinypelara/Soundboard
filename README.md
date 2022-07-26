# Elara Soundboard

This is a simple Soundboard with all your favorite sounds. Deployed [here](https://austinypelara.github.io/Soundboard/)

## Getting Started

Start by first cloning the repository:

```bash
git clone https://github.com/austinypelara/Soundboard.git
```

Or,

```bash
gh repo clone austinypelara/Soundboard
```

## Dependencies

Next install the dependencies:

```bash
npm install
```

## Running

Run a development server for hot reloading and fast development using

```bash
npm run dev
```

The site is hosted at [https://localhost:5173/Soundboard](https://localhost:5173/Soundboard). By default, it is not hosting at the root simply because it helps avoid issues with hosting on [Github Pages](https://pages.github.com/). You can change this by modifying the `svelte.config.js` file:

```js
// Change
const dev = false;

// To
const dev = true;
```

## Building

To build the project, just run:

```bash
npm run build
```

The default folder for the static folders will be in `/docs`. Again, this is because of [Github Pages](https://pages.github.com/).

## Google Doc

Sound requests are shared using a [Google Doc](https://docs.google.com/document/d/11wCm-20Ir14VRIptK9lP7PltSVHJ6vWGuFAXpoEYHXA/edit)

## Adding Sounds

To add a sound file, put it in the folder `static/audio/`. Then register the file by adding an entry in `src/audioData.js`. Follow the object format:

```js
{
    name: "<DISPLAY_NAME>",
    url: "audio/<FILE_NAME>"
}
```