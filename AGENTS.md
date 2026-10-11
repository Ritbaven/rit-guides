# Rit Guides contributor instructions

## Project purpose and boundaries

- This repository is a small MkDocs site using the Material theme.
- Keep the site simple, responsive, and easy to extend with additional game guides.
- Do not deploy, add GitHub Actions, change GitHub settings, commit, or push unless the user explicitly requests it.
- Do not add dependencies unless they are necessary for a requested feature. Keep `requirements.txt` minimal.
- Never edit the generated `site/` directory. Edit files under `docs/` and `mkdocs.yml`, then rebuild.

## Canonical structure

- `mkdocs.yml`: site configuration and navigation.
- `docs/index.md`: homepage.
- `docs/games.md`: visual directory containing every game card.
- `docs/<game-slug>.md`: one page per game.
- `docs/assets/images/<game-slug>-hero.webp`: local hero background.
- `docs/assets/images/<game-slug>-logo.png`: transparent game logo.
- `docs/stylesheets/extra.css`: shared hero, tag, card, and responsive styles.

Use lowercase kebab-case slugs, for example `mario-vs-luigi`.

## Navigation rules

- Keep the top navigation limited to `Home` and `Games` so it does not become cluttered.
- Add individual game pages only beneath the existing `Games` section in `mkdocs.yml`.
- Every game must appear in both the nested `Games` navigation and `docs/games.md`.
- Keep game ordering consistent between `mkdocs.yml` and `docs/games.md`.
- Preserve Material search; do not replace it with a custom search implementation.

Navigation shape:

```yaml
nav:
  - Home: index.md
  - Games:
      - All Games: games.md
      - Game Name: game-slug.md
```

## Adding a game

1. Choose a stable kebab-case slug.
2. Add the hero and clear-logo assets using the filenames described above.
3. Create `docs/<game-slug>.md` from the page template below.
4. Add one card to `docs/games.md` using the card template below.
5. Add the page beneath `Games` in `mkdocs.yml`.
6. Run the strict build and visually verify the page and card.

### Asset rules

- Prefer SteamGridDB for hero and clear-logo artwork. Use LaunchBox or IGDB as fallbacks or supporting metadata sources.
- Store images locally; do not hotlink third-party image URLs.
- Use a wide hero suitable for cropping and a transparent PNG logo when available.
- Optimize assets before adding them. As a guideline, keep heroes at no more than 1600 px wide as WebP and logos at no more than 900 px wide as optimized PNG.
- Record the artwork and metadata source links in the game page.
- Do not add covers, screenshots, icons, or duplicate artwork unless the user requests them.

### Game page template

```html
<div class="game-hero">
  <img class="game-hero__background" src="../assets/images/game-slug-hero.webp" alt="" aria-hidden="true">
  <img class="game-hero__logo" src="../assets/images/game-slug-logo.png" alt="Game Name logo">
</div>

# Game Name

<div class="game-tags" aria-label="Game tags">
  <span class="game-tag">Relevant Tag</span>
</div>

One short, factual paragraph describing the game.

<p class="game-sources"><strong>Sources:</strong> <a href="STEAMGRIDDB_URL" target="_blank" rel="noopener">SteamGridDB artwork</a> · <a href="METADATA_URL" target="_blank" rel="noopener">Metadata source</a></p>

Guide coming soon.
```

- Paraphrase descriptions; do not copy long database descriptions verbatim.
- Do not invent release details, features, or player counts. Verify factual metadata from the cited sources.
- Place applicable tags immediately beneath the title. The approved tag vocabulary is `Decompiled`, `Emulator`, `Online Capable`, `PC`, and `Android`.
- Use only tags that have been verified for that specific game. Do not display every available tag by default, and do not invent alternate spellings.
- Keep placeholder pages short until the user asks for the actual tutorial.
- The hero background is decorative, so it uses an empty `alt`. The logo needs descriptive alt text.

### Games card template

```html
<a class="game-card" href="../game-slug/">
  <span class="game-card__media">
    <img class="game-card__image" src="../assets/images/game-slug-hero.webp" alt="" aria-hidden="true">
    <img class="game-card__logo" src="../assets/images/game-slug-logo.png" alt="" aria-hidden="true">
  </span>
  <span class="game-card__title">Game Name</span>
</a>
```

The visible title supplies the card's accessible name, so both decorative card images retain empty alt text.

## Modifying an existing game

- Reuse the existing page, card, asset names, and shared CSS classes.
- If a slug changes, update the Markdown filename, both asset filenames, the `mkdocs.yml` entry, the card link, and all image paths together.
- If artwork changes, replace the existing local asset rather than keeping numbered or duplicate variants.
- Keep source attribution accurate when descriptions or artwork change.

## Shared styling rules

- Reuse `.game-hero`, `.game-tags`, `.game-tag`, `.game-card`, and their existing child classes. Do not create per-game CSS for ordinary entries.
- Keep hero backgrounds and logos centered. Backgrounds use `object-fit: cover`; logos use `object-fit: contain`.
- Preserve the `.md-typeset` specificity on image selectors. Material applies `height: auto` to content images, and weaker selectors cause empty space or clipped logos on mobile.
- Only change `docs/stylesheets/extra.css` when the improvement should apply to every game.
- Keep mobile behavior intact, including the existing narrow-screen media query.

## Verification

Use the repository virtual environment when available:

```powershell
.\.venv\Scripts\mkdocs.exe build --strict
.\.venv\Scripts\mkdocs.exe serve --dev-addr 127.0.0.1:8000
```

Before finishing:

- Confirm the strict build exits successfully.
- Confirm the new page, `/games/`, and local image URLs return successfully.
- Visually check the game page and card at desktop and narrow/mobile widths.
- Check that the hero fills its container with no blank strip beneath it.
- Check that both page and card logos are centered, fully contained, and not clipped.
- Leave an already-running development server running when practical.
