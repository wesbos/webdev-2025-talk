const titles = document.querySelectorAll<HTMLHeadingElement>('.wrap');



function wrapLettersInSpans(title: HTMLHeadingElement) {
  const text = title.innerText;
  title.innerHTML = '';
  for(const letter of text) {
    const span = document.createElement('span');
    span.classList.add('letter');
    const innerSpan = document.createElement('span');
    innerSpan.innerText = letter;
    span.appendChild(innerSpan);
    // span.style.display = 'inline-block';
    span.style.rotate = `${Math.random() * 10 - 5}deg`;
    title.appendChild(span);
  }
}

setInterval(() => {

for (const title of titles) {
  wrapLettersInSpans(title);
}

  }, 500);
