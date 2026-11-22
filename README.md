# Sunset Courier — the agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jonsonbmth/post-x-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jonsonbmth/post-x-agent-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt in, one game out. My AI agent built **Sunset Courier** — a tiny 3D
browser game — from a single prompt, and filmed itself doing it for the
make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).
The video is posted natively on X from [@wwwwenwenwin](https://x.com/wwwwenwenwin);
this repository hands in that post's address.

## The one prompt

> "Build a tiny 3D browser game: Sunset Courier — a courier on a glowing
> hover-scooter races down a neon sunset boulevard, steering between traffic
> barriers, collecting golden parcels, with palm trees, a big low sun, and a
> live score HUD. Controls: arrows/WASD to steer, Space to jump."

## The game

Open `game.html` in a browser (it loads three.js from a CDN) and ride:

- **Arrows / WASD** — switch lanes
- **Space / Up** — jump the barriers
- **R** — restart after a wipeout

Steer the courier down the boulevard, dodge the red barriers, grab the golden
parcels to build a combo, and watch the score climb as the scooter gets
faster. Three hits and the run ends. `?auto=1` lets the courier ride itself
(handy for watching), `?seed=N` fixes the road layout, and `?noshadow=1`
turns shadows off for slow machines.

## The video

The entry is the X post itself: a ~37-second vertical video — the prompt on
screen, the agent working, the finished game actually running (real gameplay
captured headless, no staged screenshots), a call to come build on
[make.fun](https://make.fun), and make.fun's referral end card last. The video
file is not in this repository; it lives on the post.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`, which is all the program has to do. `POST.json` names
the X post; the house reads the post's views and interactions from X itself.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Bounty

- Competition: [post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
- Places go by the post's score: views + 10 × (likes + reposts + quotes + replies)
- Top 10 share $20; the video ends with make.fun's referral end card
