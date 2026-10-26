<div class="game-hero">
  <img class="game-hero__background" src="../assets/images/super-smash-bros-ultimate-hero.webp" alt="" aria-hidden="true">
  <img class="game-hero__logo" src="../assets/images/super-smash-bros-ultimate-logo.png" alt="Super Smash Bros. Ultimate logo">
</div>

# Super Smash Bros. Ultimate

<div class="game-tags" aria-label="Game tags">
  <span class="game-tag">Online Capable</span>
  <span class="game-tag">PC</span>
</div>

<p class="game-last-edited">Last edited: {{ git_revision_date_localized }}</p>

OpenSmash-Ultimate turns Super Smash Bros. Ultimate into a native Windows program through static recompilation instead of emulation. The installer builds the port on your PC from the game files you provide.

## Before you start

- A 64-bit Windows 10 or 11 PC with a Vulkan 1.3-capable graphics driver
- The Super Smash Bros. Ultimate base game and the 13.0.4 or 13.0.5 update
- A `prod.keys` file
- DLC files if you want to use them (optional)
- Firmware if you want the original system fonts (optional)
- A controller

This guide does not include the game, updates, DLC, keys or firmware. You must get these files yourself.

## Install it on Windows

1. Open the official [OpenSmash-Ultimate repository](https://github.com/OpenSmash-Ultimate/ssbu-recomp).
2. Use the **Download ZIP** link in the README, or choose **Code → Download ZIP**, then extract the downloaded folder. Do not download the files under **Releases**; the installer fetches the build tools it needs.
3. Open the extracted folder and run `Install SSBU.bat`.
4. Check the files the installer found automatically, or browse to your base game, update and `prod.keys`. Add firmware and DLC only if you want to use them.
5. Choose an install location, then click **Install**.
6. Leave the installer open while it builds the game. The first build can take around an hour or longer depending on your PC. If it stops, run `Install SSBU.bat` again to resume.
7. When the build finishes, click **Play**.

<figure class="guide-screenshot">
  <img src="../assets/images/super-smash-bros-ultimate-installer.webp" alt="OpenSmash-Ultimate installer fields for the base game, update, prod.keys, optional firmware and optional DLC">
  <figcaption>Add the required game files, then choose any optional firmware or DLC that you own.</figcaption>
</figure>

An Xbox controller was detected automatically in our test. Press **F1** in the game to open the recompilation settings, where you can change graphics, window, audio and controller options.

After the first setup, start the game with `Play SSBU.bat` or the shortcut created by the installer. You do not need to run the installer again unless you are updating or repairing the build.

## Play online

Online play is experimental and uses the game's **Local Wireless** menu rather than its regular Online menu.

1. Press **F1**, open **Experimental**, and make sure **Online play** is on.
2. Leave **Lobby server** selected for the simplest setup, then choose **Restart the game now**.
3. The host opens **Local Wireless** and creates a room.
4. The other player opens **Local Wireless**, chooses **Rooms List**, and joins the room.
5. The host accepts the join request. Both players vote on a stage, select their fighters, and the host starts the match with **L + R**.

Both players need the same game update and the same mods. Online play currently has no encryption or authentication, so play only with people you know. The official [online-play documentation](https://github.com/OpenSmash-Ultimate/ssbu-recomp/blob/main/docs/ONLINE.md) also covers LAN, room codes, lobby settings and experimental rollback netcode.

## Unlock every character with a save file

The optional [all-characters-unlocked save](https://gamebanana.com/mods/download/707758#FileInfo_1824713) lets you skip unlocking the roster yourself.

1. Close Super Smash Bros. Ultimate completely.
2. Download and extract the save. The extracted folder should be named `save_data`.
3. Open `ssbu-recomp-main\build\saves\` for a default installation, or `<your install location>\saves\` if you chose a custom location.
4. Rename the existing `save` folder to `save_old` so you have a backup.
5. Create a new folder named `save`.
6. Copy the downloaded `save_data` folder into it.

The finished path should contain `save\save_data\system_data.bin`. Start the game after the files are in place.

<p class="game-sources"><strong>Sources:</strong> <a href="https://github.com/OpenSmash-Ultimate/ssbu-recomp" target="_blank" rel="noopener">OpenSmash-Ultimate project and installation guide</a> · <a href="https://github.com/OpenSmash-Ultimate/ssbu-recomp/blob/main/docs/ONLINE.md" target="_blank" rel="noopener">Online-play documentation</a> · <a href="https://gamebanana.com/mods/download/707758#FileInfo_1824713" target="_blank" rel="noopener">All-characters-unlocked save</a> · <a href="https://www.steamgriddb.com/game/5245293" target="_blank" rel="noopener">SteamGridDB artwork</a> · <a href="https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-switch/" target="_blank" rel="noopener">Nintendo game details</a></p>
