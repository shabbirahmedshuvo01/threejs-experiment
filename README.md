# Three.js Earth & Sun Visualization

**Live Demo:** [my-earth-sun-demo.surge.sh](http://my-earth-sun-demo.surge.sh)

## Overview
This project is an interactive 3D visualization of the Earth, clouds, and a sun using Three.js. It features realistic textures, a starfield background, and user controls for exploring the scene.

---

## File Descriptions & Function Purposes

### index.html
- **Purpose:** Main HTML entry point. Loads all scripts and sets up the import map for Three.js and its examples.

### earthwithsun.js
- **Purpose:** Main visualization script. Renders the Earth with textures, clouds, a sun, and a starfield. Handles animation and window resizing.
- **Key Functions/Sections:**
  - `animate()`: Main animation loop, rotates Earth and clouds, renders the scene.
  - Sun creation: Adds a glowing sun mesh and point light.
  - Starfield: Adds a background of stars using `getStarfield`.
  - Handles window resize events.

### earth.js
- **Purpose:** Alternate or experimental Earth rendering script (simpler version).
- **Key Functions/Sections:**
  - Similar structure to `earthwithsun.js` but may have fewer features or different experiments.

### index.js
- **Purpose:** Demo of a basic 3D object (icosahedron) with wireframe and hemisphere lighting.
- **Key Functions/Sections:**
  - `animate()`: Rotates the mesh and renders the scene.
  - Adds a wireframe overlay and hemisphere light for visual effect.

### src/getStarfield.js
- **Purpose:** Generates a 3D starfield as a Points object for the background.
- **Key Function:**
  - `getStarfield({ numStars })`: Returns a THREE.Points object with randomly placed colored stars.

### src/getFresnelMat.js
- **Purpose:** Utility for creating a Fresnel shader material (rim-lighting effect, not used by default).
- **Key Function:**
  - `getFresnelMat({ rimHex, facingHex })`: Returns a custom THREE.ShaderMaterial for rim-lighting effects.

### textures/
- **Purpose:** Contains all image assets for Earth, clouds, and stars. Used by the main scripts for realistic rendering.

---

## How to Run
1. Open `index.html` in a browser that supports ES modules.
2. The main scene will load from `earthwithsun.js`.
3. Use your mouse to orbit, zoom, and pan the camera.

---

## Deployment
- You can deploy this project using Surge or any static hosting service.
- All files must be served from the same directory structure for textures to load correctly.

---

## Need to Know More?
Ask about any file, function, or feature, and you'll get a detailed explanation!# threejs-experiment
