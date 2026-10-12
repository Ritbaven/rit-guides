(() => {
  const initializeGameFilter = (filter) => {
    if (filter.dataset.initialized === "true") return;

    const gameList = document.querySelector("[data-game-list]");
    const options = filter.querySelector("[data-game-filter-options]");
    const clearButton = filter.querySelector("[data-game-filter-clear]");
    const status = filter.querySelector("[data-game-filter-status]");
    const emptyMessage = document.querySelector("[data-game-filter-empty]");

    if (!gameList || !options || !clearButton || !status || !emptyMessage) return;

    const games = [...gameList.querySelectorAll(".game-card[data-tags]")];
    const tags = [];

    games.forEach((game) => {
      game.filterTags = game.dataset.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      game.filterTags.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });

    if (games.length === 0 || tags.length === 0) return;

    tags.forEach((tag, index) => {
      const label = document.createElement("label");
      label.className = "game-filter__option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = tag;
      checkbox.id = `game-filter-${index}`;

      const text = document.createElement("span");
      text.textContent = tag;

      label.append(checkbox, text);
      options.append(label);
    });

    const updateGames = () => {
      const selectedTags = [...options.querySelectorAll("input:checked")].map(
        (checkbox) => checkbox.value,
      );
      let visibleCount = 0;

      games.forEach((game) => {
        const matches = selectedTags.every((tag) => game.filterTags.includes(tag));
        game.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      const hasFilters = selectedTags.length > 0;
      clearButton.disabled = !hasFilters;
      emptyMessage.hidden = visibleCount !== 0;

      if (!hasFilters) {
        status.textContent = `Showing all ${games.length} games.`;
      } else {
        status.textContent = `Showing ${visibleCount} of ${games.length} games.`;
      }
    };

    options.addEventListener("change", updateGames);
    clearButton.addEventListener("click", () => {
      options.querySelectorAll("input:checked").forEach((checkbox) => {
        checkbox.checked = false;
      });
      updateGames();
    });

    filter.hidden = false;
    filter.dataset.initialized = "true";
    updateGames();
  };

  const initializeGameFilters = () => {
    document.querySelectorAll("[data-game-filter]").forEach(initializeGameFilter);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGameFilters);
  } else {
    initializeGameFilters();
  }
})();
