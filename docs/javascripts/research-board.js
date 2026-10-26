(() => {
  const initializeResearchBoard = () => {
    const dialog = document.querySelector("[data-research-modal]");
    if (!dialog || dialog.dataset.initialized === "true") return;

    const title = dialog.querySelector("[data-research-modal-title]");
    const status = dialog.querySelector("[data-research-modal-status]");
    const notes = dialog.querySelector("[data-research-modal-notes]");
    const closeButton = dialog.querySelector("[data-research-modal-close]");
    const triggers = document.querySelectorAll("[data-research-dialog]");

    if (!title || !status || !notes || !closeButton || triggers.length === 0) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        title.textContent = trigger.dataset.researchTitle || "Research update";
        status.textContent = trigger.dataset.researchStatus || "Planned";
        status.dataset.tone = trigger.dataset.researchStatusTone || "planned";

        const details = document.getElementById(trigger.dataset.researchDetails);
        if (details instanceof HTMLTemplateElement) {
          notes.replaceChildren(details.content.cloneNode(true));
        } else {
          const fallback = document.createElement("p");
          fallback.textContent = trigger.dataset.researchNotes || "More details will be added soon.";
          notes.replaceChildren(fallback);
        }

        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
      });
    });

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.dataset.initialized = "true";
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeResearchBoard);
  } else {
    initializeResearchBoard();
  }
})();
