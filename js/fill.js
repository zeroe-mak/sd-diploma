const container = document.querySelector('.app-table__body-content');
const emptyDot = document.querySelector('.app-table__body-dot._empty');

for (let i = 0, j = 5; i < 4680 - 4; i++, j++) {
  const copy = emptyDot.cloneNode();
  container.appendChild(copy);

  if (!(j % 52)) {
    j = 0;
  } else if (!(j % 10)) {
    copy.style.marginRight = '7px';
  }
}

// 52 * 90 = 4680 - 4 года в index.html
