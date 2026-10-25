const regions = {
  "starter": {
    "image": "assets/greenhouse-starter.webp",
    "alt": "Startergebiet mit Bauernhaus und bepflanzten Gewächshäusern in Greenhouse Valley",
    "number": "01 / STARTERGEBIET",
    "title": "Dein Anfang\nim Grünen.",
    "description": "Rund um das Bauernhaus beginnt dein Leben im Tal. Pflanze deine ersten Samen, pflege die Beete und ernte, was in deinen Gewächshäusern heranwächst.",
    "crops": "Radieschen & Salat",
    "position": "center"
  },
  "mill": {
    "image": "assets/greenhouse-watermill.webp",
    "alt": "Wassermühle und kupferfarbenes Jugendstil-Gewächshaus mit Pflanzen in verschiedenen Wachstumsphasen",
    "number": "02 / DIE MÜHLE",
    "title": "Wo die Mühle\nam Fluss steht.",
    "description": "Zwischen grünen Wiesen und fließendem Wasser liegt die Wassermühle. Daneben wachsen Pflanzen im kupferfarbenen Jugendstil-Gewächshaus – ein neuer Ort für deine nächste Ernte.",
    "crops": "Black-Cherry-Tomaten & Melonen",
    "position": "center"
  },
  "sluice": {
    "image": "assets/greenhouse-sluice.webp",
    "alt": "Holzschleuse zwischen Wasserläufen und ein Woodland-Atelier-Gewächshaus mit Reis und Taro",
    "number": "03 / DIE SCHLEUSE",
    "title": "Neue Wege\nam Wasser.",
    "description": "Holzbrücken, Seerosen und verzweigte Wasserläufe prägen die Landschaft rund um die Schleuse. Hier wachsen Reis und Taro im Woodland-Atelier-Gewächshaus.",
    "crops": "Reis & Taro",
    "position": "center"
  }
};
const regionImage = document.querySelector('#region-image');
document.querySelectorAll('[data-region]').forEach(button => button.addEventListener('click', () => {
  const region = regions[button.dataset.region];
  document.querySelectorAll('[data-region]').forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  regionImage.src = region.image;
  regionImage.alt = region.alt;
  regionImage.style.objectPosition = region.position;
  document.querySelector('#region-number').textContent = region.number;
  const title = document.querySelector('#region-title');
  title.replaceChildren(...region.title.split('\n').flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
  document.querySelector('#region-description').textContent = region.description;
  document.querySelector('#region-crops').textContent = region.crops;
}));
const dialog = document.querySelector('#lightbox');
function openImage(src, alt) {
  dialog.querySelector('img').src = src;
  dialog.querySelector('img').alt = alt;
  dialog.querySelector('p').textContent = 'Spielaufnahme · Spiel in Entwicklung';
  dialog.showModal();
  document.body.classList.add('modal-open');
}
document.querySelector('#enlarge').addEventListener('click', () => openImage(regionImage.src, regionImage.alt));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
