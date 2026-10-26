<div class="game-hero">
  <img class="game-hero__background" src="../assets/images/sm64coopdx-hero.webp" alt="" aria-hidden="true">
  <img class="game-hero__logo" src="../assets/images/sm64coopdx-logo.png" alt="Super Mario 64 Coop Deluxe logo">
</div>

# SM64CoopDX

<div class="game-tags" aria-label="Game tags">
  <span class="game-tag">Online Capable</span>
  <span class="game-tag">PC</span>
</div>

<p class="game-last-edited">Last edited: {{ git_revision_date_localized }}</p>

SM64CoopDX, also called Super Mario 64 Coop Deluxe, is an online multiplayer version of the Super Mario 64 PC port. It lets players explore the game together, supports up to 16 players, and includes widescreen, uncapped frame rates, customization, and Lua mods.

## Before you start

- A Windows PC
- Your own clean Super Mario 64 `.z64` ROM
- An internet connection for online play
- A controller if you want to use one

This guide does not include a Super Mario 64 ROM. Make the `.z64` file from your own game cartridge.

## Install it on Windows

1. Open the official [SM64CoopDX website](https://sm64coopdx.com/).
2. Follow its download link to the [latest GitHub release](https://github.com/coop-deluxe/sm64coopdx/releases/latest).
3. Expand **Assets** and download `sm64coopdx_Windows.zip`.
4. Unzip the downloaded folder.
5. Open the game's `.exe` file.
6. When the game asks for your ROM, drag your Super Mario 64 `.z64` file into the window.
7. Wait for setup to finish, then start playing.

An Xbox controller should be detected automatically. If it is not, open **Options** and check the controller settings.

<figure class="guide-screenshot">
  <img src="../assets/images/sm64coopdx-main-menu.webp" alt="SM64CoopDX main menu showing Host, Join, Options, and Quit">
  <figcaption>The main menu has separate options for hosting and joining online games.</figcaption>
</figure>

## Join an online game

1. Select **Join** on the main menu.
2. Choose one of these connection types:
   - **Public Lobbies** shows open CoopNet games that anyone can join.
   - **Private Lobbies** lets you join a password-protected CoopNet game or use a Discord invite.
   - **Direct Connection** lets you enter a host's IP address and port.
3. Choose the lobby or enter the connection details, then follow the prompts to join.

## Host your own lobby

1. Select **Host** on the main menu.
2. Choose **CoopNet** or **Direct Connection**.
3. Pick your lobby settings and start the game.

### CoopNet (recommended)

CoopNet is the easiest choice for most people because it helps other players find and connect to your lobby without requiring you to share your IP address or configure port forwarding.

- Leave the password empty to make a public lobby that appears in **Join → Public Lobbies**.
- Set a password to make a private lobby that friends can join with the password or a Discord invite.

### Direct Connection

Direct Connection hosts the game from your PC. Your friends connect with your public IP address and port. The default port is `7777` using UDP.

You may need to forward the port in your router and allow the game through your firewall. Router settings and NAT restrictions can prevent a direct connection from working, so use CoopNet unless it is unavailable or you specifically want to connect by IP.

## Customize the game and use mods

The **Options** menu includes a palette editor for changing character colors. The **Mods** menu lets you browse, enable, and manage compatible mods.

<div class="guide-screenshot-grid">
  <figure class="guide-screenshot">
    <img src="../assets/images/sm64coopdx-palette.webp" alt="SM64CoopDX palette editor changing Mario to blue and black colors">
    <figcaption>The palette editor can save custom character color presets.</figcaption>
  </figure>
  <figure class="guide-screenshot">
    <img src="../assets/images/sm64coopdx-mods.webp" alt="SM64CoopDX Mods menu with a list of available mods">
    <figcaption>The Mods menu can browse and enable compatible mods.</figcaption>
  </figure>
</div>

<p class="game-sources"><strong>Sources:</strong> <a href="https://sm64coopdx.com/" target="_blank" rel="noopener">Official website and setup instructions</a> · <a href="https://github.com/coop-deluxe/sm64coopdx" target="_blank" rel="noopener">Official project and features</a> · <a href="https://github.com/coop-deluxe/sm64coopdx/releases/latest" target="_blank" rel="noopener">Latest release</a> · <a href="https://github.com/coop-deluxe/sm64coopdx/wiki/Hosting-and-joining" target="_blank" rel="noopener">Hosting and joining guide</a> · <a href="https://www.steamgriddb.com/collection/16948" target="_blank" rel="noopener">SteamGridDB artwork</a></p>
