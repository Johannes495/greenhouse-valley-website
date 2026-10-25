const {regions,caption} = JSON.parse(document.querySelector('#page-data').textContent);
const regionImage = document.querySelector('#region-image');
document.querySelectorAll('[data-region]').forEach(button => button.addEventListener('click', () => {
  const region = regions[button.dataset.region];
  document.querySelectorAll('[data-region]').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  regionImage.src = region.image;
  regionImage.alt = region.alt;
  document.querySelector('#region-number').textContent = region.number;
  document.querySelector('#region-title').replaceChildren(...region.title.split('\n').flatMap((line,index) => index ? [document.createElement('br'),document.createTextNode(line)] : [document.createTextNode(line)]));
  document.querySelector('#region-description').textContent = region.description;
  document.querySelector('#region-crops').textContent = region.crops;
}));
const dialog = document.querySelector('#lightbox');
document.querySelector('#enlarge').addEventListener('click', () => {
  dialog.querySelector('img').src = regionImage.src;
  dialog.querySelector('img').alt = regionImage.alt;
  dialog.querySelector('p').textContent = caption;
  dialog.showModal();
  document.body.classList.add('modal-open');
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog) dialog.close();});
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
const picker = document.querySelector('.language-picker');
document.addEventListener('click',event=>{if(!picker.contains(event.target)) picker.open=false;});
picker.addEventListener('keydown',event=>{if(event.key==='Escape'){picker.open=false;picker.querySelector('summary').focus();}});
