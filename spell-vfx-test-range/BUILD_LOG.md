# Spell VFX Test Range — Build Log

Build date: 2026-09-24 / 2026-09-25 session boundary.

## Timing

The requested target wall time was about one hour. The actual cumulative wall time cannot be measured honestly from this chat/tool environment because the work was interrupted across multiple user continuation turns and separate tool sessions. No fabricated elapsed-time number is claimed.

## Tools used

- ChatGPT conversation file tools for source/reference handling.
- GitHub connector for branch creation and incremental source commits.
- Remote Desktop Commander on the authorized Mac for local preview, headless rendering, and packaging.
- Google Chrome in headless WebGL mode for validation screenshots.
- FFmpeg for the 2 fps build timelapse.

## Corrections made during the build

1. A preview-server port collision on 8765 was found; the local validation server was moved to port 9876.
2. Material-sphere reveal initially relied on ShaderMaterial opacity; it was corrected to a GLSL uReveal alpha uniform.
3. The first headless render was too dark, so environment exposure, the cool rim light, and spell-local lights were raised.
4. Camera framing and final pedestal placement were adjusted to keep the major beats readable in one continuous arc.
5. Leaf emissive response, spiral trails, ice streak trails, explosion flash/fireballs, and golem readability were strengthened after screenshot review.
6. An ice-volley point light referenced iceOrigin before that constant was initialized; initialization order was corrected.
7. An initial timelapse shell command hit a zsh glob edge case; frames were regenerated with an explicit ordered render script.
8. Final source refinements adjusted stars, ruin visibility, golem material response, mountains, orb presentation, and camera readability.
9. The final eight stage screenshots were regenerated from the final source and assembled at exactly 2 frames per second.

## Runtime notes

- const SEED = 43127 is near the top of index.html and affects procedural runes, leaves, mist, and debris.
- window.__replay() restarts the 20-second sequence.
- window.__BUILD_LOG exposes a compact runtime copy of this build log.
- No image textures, models, audio, or effect libraries are used by the page. Three.js core is loaded from a CDN.
- 60 fps is the performance target; the scene uses instancing and bounded particle counts, but no formal cross-hardware 60 fps certification is claimed.

## 2026-09-24 cinematic quality upgrade

- Rebuilt the arena surface into bevelled wet radial flagstones with procedural puddles, moss, and fallen leaves.
- Added a procedural moon, Milky Way density band, atmospheric cloud forms, distant fortress/ridge silhouettes, denser masonry, ivy, banners, and torch lighting.
- Replaced the prototype golem anatomy with a higher-detail articulated stone construct, armor plates, visor, chest rune, and molten crack detail.
- Added a manual core-Three.js post pass with bright-pass bloom approximation, color grading, shadow lift, vignette, and subtle procedural grain.
- Upgraded ice to layered translucent shards with internal emissive cores and frost motes.
- Upgraded the blast with radial streaks, hotter layered fire volumes, faster smoke onset, and brighter flash response.
- Rebuilt the pedestal presentation with bronze trim, glowing elemental icons, a stronger water spiral, vertical multi-lobe flame, and denser ice crack structure.
- Added a camera-locked moon composition and reworked the cinematic spline camera for stronger wide hero framing.
- Regenerated all eight build frames and the 2 fps timelapse after the quality pass.
