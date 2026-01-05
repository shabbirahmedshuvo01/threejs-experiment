# Three.js Earth & Sun Visualization

## Overview
This project is an interactive 3D visualization of the Earth, clouds, and a sun using Three.js. It features realistic textures, starfield background, and user controls for exploring the scene.

---

## File Structure

- **index.html**: Main HTML entry point. Loads all scripts and sets up the import map for Three.js and its examples.
- **earthwithsun.js**: Main visualization script. Renders the Earth with textures, clouds, a sun, and a starfield. Handles animation and window resizing.
- **earth.js**: Alternate or experimental Earth rendering script (simpler version).
- **index.js**: Demo of a basic 3D object (icosahedron) with wireframe and hemisphere lighting.
- **src/getStarfield.js**: Generates a 3D starfield as a Points object for the background.
- **src/getFresnelMat.js**: Utility for creating a Fresnel shader material (not currently used in main scene).
- **textures/**: Contains all image assets for Earth, clouds, and stars.

---

## Main Features

### 1. Earth with Sun (`earthwithsun.js`)
- Uses an icosahedron geometry for the Earth, with high subdivision for smoothness.
- Applies high-resolution Earth texture and cloud texture.
- Adds a glowing sun (sphere with emissive material and point light) to the scene.
- Includes a starfield background for realism.
- Animates Earth's rotation and cloud movement.
- Uses OrbitControls for interactive camera movement.
- Handles window resizing responsively.

### 2. Starfield (`src/getStarfield.js`)
- Generates random points on a sphere to simulate distant stars.
- Each star has a random color and uses a circular texture for appearance.

### 3. Fresnel Material (`src/getFresnelMat.js`)
- Provides a custom shader material for rim-lighting effects (not used by default, but available for advanced visuals).

### 4. index.js
- Simple icosahedron mesh with wireframe overlay and hemisphere lighting.
- Demonstrates basic Three.js setup and animation.

---

## How to Run
1. Open `index.html` in a browser that supports ES modules.
2. The main scene will load from `earthwithsun.js`.
3. Use your mouse to orbit, zoom, and pan the camera.

---

## Adding/Modifying Textures
- Place new textures in the `textures/` directory.
- Update the relevant file paths in `earthwithsun.js` if you want to use different images for the Earth or clouds.

---

## Deployment
- You can deploy this project using Surge or any static hosting service.
- All files must be served from the same directory structure for textures to load correctly.

---

## Need to Know More?
Ask about any file, function, or feature, and you'll get a detailed explanation!
