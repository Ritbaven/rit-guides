---
hide:
  - navigation
  - toc
---

<section class="home-hero">
  <div class="home-hero__content">
    <p class="home-eyebrow">CLUBHOUSE WORLD</p>
    <h1><span>Pick a game.</span><span>Get it running.</span></h1>
    <p class="home-hero__summary">Straightforward setup guides for the games we play together, without the guesswork.</p>
    <div class="home-hero__actions">
      <a class="home-button home-button--primary" href="games/">Browse all games</a>
      <a class="home-button home-button--secondary" href="#featured-guides">See the guides</a>
    </div>
  </div>
  <div class="home-hero__art" aria-hidden="true">
    <span class="home-hero__tile">
      <img src="assets/images/retro-rewind-hero.webp" alt="">
      <img class="home-hero__tile-logo" src="assets/images/retro-rewind-logo.png" alt="">
    </span>
    <span class="home-hero__tile">
      <img src="assets/images/mario-party-hero.webp" alt="">
      <img class="home-hero__tile-logo" src="assets/images/mario-party-logo.png" alt="">
    </span>
    <span class="home-hero__tile">
      <img src="assets/images/mario-vs-luigi-hero.webp" alt="">
      <img class="home-hero__tile-logo" src="assets/images/mario-vs-luigi-logo.png" alt="">
    </span>
    <span class="home-hero__tile">
      <img src="assets/images/sm64coopdx-hero.webp" alt="">
      <img class="home-hero__tile-logo" src="assets/images/sm64coopdx-logo.png" alt="">
    </span>
  </div>
</section>

<section class="research-board" aria-labelledby="research-board-title">
  <div class="research-board__heading">
    <h2 id="research-board-title">Bulletin board</h2>
  </div>

  <div class="research-board__notes">
    <article class="research-note">
      <span class="research-note__pin" aria-hidden="true"></span>
      <h3>Next things I’m looking at</h3>
      <ul>
        <li>
          <button
            class="research-note__item"
            type="button"
            data-research-dialog
            data-research-title="Finish the Mario Party guide"
            data-research-status="Planned"
            data-research-status-tone="planned"
            data-research-details="mario-party-research-details"
            aria-haspopup="dialog"
          >
            <span>Finish the Mario Party guide</span>
            <span class="research-note__arrow" aria-hidden="true">→</span>
          </button>
          <template id="mario-party-research-details">
            <ul class="research-dialog__list">
              <li>Mario Party 1–3 can be played online on PC using <a href="https://github.com/MarioPartyNetplay/Mupen-MPN" target="_blank" rel="noopener">Mupen-MPN</a>. I still need to test how it works and how easy it is to set up.</li>
              <li>Mario Party 4–8 can be played online on PC using <a href="https://github.com/MarioPartyNetplay/Dolphin-MPN" target="_blank" rel="noopener">Dolphin-MPN</a>. I still need to test the games and learn what every player needs.</li>
              <li>Mario Party 4 also has a separate version called <a href="https://github.com/zeranemesis/Marioparty4" target="_blank" rel="noopener">Party Board</a> that supports two to four online players. I want to compare it with Dolphin-MPN.</li>
              <li>After testing everything, I’ll decide which option or options the finished guide should recommend.</li>
            </ul>
          </template>
        </li>
      </ul>
      <p class="research-note__hint">Select an item to see its current status and notes.</p>
    </article>
  </div>
</section>

<dialog class="research-dialog" data-research-modal aria-labelledby="research-dialog-title">
  <div class="research-dialog__header">
    <div>
      <p class="research-dialog__eyebrow">NOTICEBOARD UPDATE</p>
      <h2 id="research-dialog-title" data-research-modal-title></h2>
    </div>
    <button class="research-dialog__close" type="button" data-research-modal-close aria-label="Close update">×</button>
  </div>
  <div class="research-dialog__body">
    <p class="research-dialog__label">Current status</p>
    <p><span class="research-status" data-research-modal-status></span></p>
    <p class="research-dialog__label">What I know so far</p>
    <div class="research-dialog__notes" data-research-modal-notes></div>
  </div>
</dialog>

<div class="home-section-heading">
  <div>
    <p class="home-eyebrow">AVAILABLE GUIDES</p>
    <h2 id="featured-guides">Choose your game</h2>
  </div>
  <a href="games/">View all games <span aria-hidden="true">→</span></a>
</div>

<div class="game-list home-game-list">
  <a class="game-card" href="retro-rewind/">
    <span class="game-card__media">
      <img class="game-card__image" src="assets/images/retro-rewind-hero.webp" alt="" aria-hidden="true">
      <img class="game-card__logo" src="assets/images/retro-rewind-logo.png" alt="" aria-hidden="true">
    </span>
    <span class="game-card__title">Retro Rewind</span>
  </a>
  <a class="game-card" href="mario-party/">
    <span class="game-card__media">
      <img class="game-card__image" src="assets/images/mario-party-hero.webp" alt="" aria-hidden="true">
      <img class="game-card__logo" src="assets/images/mario-party-logo.png" alt="" aria-hidden="true">
    </span>
    <span class="game-card__title">Mario Party</span>
  </a>
  <a class="game-card" href="mario-vs-luigi/">
    <span class="game-card__media">
      <img class="game-card__image" src="assets/images/mario-vs-luigi-hero.webp" alt="" aria-hidden="true">
      <img class="game-card__logo" src="assets/images/mario-vs-luigi-logo.png" alt="" aria-hidden="true">
    </span>
    <span class="game-card__title">Mario vs. Luigi</span>
  </a>
  <a class="game-card" href="sm64coopdx/">
    <span class="game-card__media">
      <img class="game-card__image" src="assets/images/sm64coopdx-hero.webp" alt="" aria-hidden="true">
      <img class="game-card__logo" src="assets/images/sm64coopdx-logo.png" alt="" aria-hidden="true">
    </span>
    <span class="game-card__title">SM64CoopDX</span>
  </a>
  <a class="game-card" href="super-smash-bros-ultimate/">
    <span class="game-card__media">
      <img class="game-card__image" src="assets/images/super-smash-bros-ultimate-hero.webp" alt="" aria-hidden="true">
      <img class="game-card__logo" src="assets/images/super-smash-bros-ultimate-logo.png" alt="" aria-hidden="true">
    </span>
    <span class="game-card__title">Super Smash Bros. Ultimate</span>
  </a>
</div>

<div class="home-callout">
  <strong>Built for quick starts.</strong>
  <span>Find what you need, follow the steps, and get back to playing with friends.</span>
</div>
