# Spell VFX Test Range — Build Log

## Scope
One self-contained HTML file using Three.js core from a CDN. No image textures, models, audio, external assets, or effect libraries are used by the runtime scene.

## Timeline beats
1. Procedural circular stone arena and slow camera arc.
2. Gold/teal summoning circle drawn stroke-by-stroke with geometry draw ranges and real point-light spill.
3. Instanced leaf vortex with a deterministic seeded curl-like field and procedural energy spirals.
4. Twelve procedural ice shards condense from mist, pause, launch, and stick briefly into a stone golem.
5. Detonation with flash light, additive sparks, smoke puffs, and ballistic stone debris.
6. Calm-after material showcase with hand-written GLSL WATER, FIRE, and ICE spheres.

## Reproducibility
- SEED: 43127
- Replay API: window.__replay()
- Scrub helper used for validation: window.__setTime(seconds)

## Validation
Rendered key frames in headless Google Chrome at 1448×1086 with WebGL enabled. This verifies that the scene loads and renders across the requested beats. The implementation targets 60 fps on an ordinary desktop GPU; headless screenshot mode is not a trustworthy real-time FPS benchmark, so no measured 60-fps claim is made.

## Timelapse frames
- 001-platform.png
- 002-summoning-circle.png
- 003-leaf-vortex.png
- 004-ice-volley.png
- 005-detonation.png
- 006-material-spheres.png
- 007-final-polish.png

These are assembled at 2 fps (0.5 s per frame) in the delivered MP4.

## Tool calls used
- ChatGPT file/container tools for source editing and packaging
- GitHub connector for branch, commits, source persistence, and timelapse frames
- Remote Desktop Commander for local preview, screenshots, and shell validation
- Headless Google Chrome for WebGL frame validation
- ffmpeg/ffprobe for the 2 fps timelapse video

## Corrections made during validation
- Recovered from a local preview-port collision by moving the preview server to port 9876.
- Fixed the material-sphere reveal so GLSL alpha is driven by a uReveal uniform rather than ShaderMaterial.opacity.
- Increased environment exposure and spell-local lighting after the first render was too dark.
- Added visible star-field placement after the initial spherical cap sat mostly above the camera frustum.
- Raised the three material spheres above pedestal tops to avoid geometry intersections.
- Moved the ice-volley light along the shot so the golem receives blue impact illumination.
- Tuned camera framing, leaf emissive response, shard fade, explosion readability, and final material exposure.

## Wall-time honesty
The prompt suggested a target wall time of about one hour. This build was completed across multiple assistant turns and tool sessions, and this runtime does not provide a reliable continuous stopwatch for the entire effort. I am therefore not claiming that exactly one hour elapsed.
