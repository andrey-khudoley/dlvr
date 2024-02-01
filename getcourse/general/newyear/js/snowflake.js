/**
 * Создает и добавляет снежинки на страницу.
 */
function createSnowflakes() {
  const snowflakesContainer = `<div class="snowflakes-container">${'<div class="snowflake"></div>'.repeat(100)}</div>`;
  document.body.insertAdjacentHTML('afterbegin', snowflakesContainer);
}

document.addEventListener('DOMContentLoaded', createSnowflakes);
