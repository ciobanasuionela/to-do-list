export const COLOR = "#bcd1f1";

export const htmlMaker = (title, order) => {
  return `
    <div class="task-box" order=${order}>
      <div class="task-title">${title}</div>
      <button class="done-button">
          <i class="fas fa-check"></i>
      </button>
      <button class="delete-button">
          <i class="fas fa-times"></i>
      </button>
    </div>`;
};
