const models = {
  lun: {
    name: 'Lun', category: 'DEN KOMPAKTE',
    description: 'Tenk deg en rolig stund i din egen hage. Lun er et eksempel på en mindre badstue med et enkelt uttrykk, for deg som ønsker et eget sted å koble av uten å sette av mye plass.',
    advice: 'Tenk gjennom hvor badstuen skal stå, hvor mange som vanligvis skal bruke den, og hvordan du ønsker å bruke uteområdet rundt.'
  },
  ro: {
    name: 'Ro', category: 'DEN SOSIALE',
    description: 'Noen pauser er best når de deles. Ro illustrerer en badstue med fellesskapet i sentrum — et sted for lange samtaler og varme kvelder med familie eller venner.',
    advice: 'Ta utgangspunkt i hvor mange dere ønsker å være samtidig. Vurder også plass til avkjøling, sitteplasser ute og enkel adkomst fra huset.'
  },
  utsyn: {
    name: 'Utsyn', category: 'TETT PÅ NATUREN',
    description: 'En stille morgen på hytta. Luft som kjennes frisk, og en varm pause å glede seg til. Utsyn er et eksempelkonsept inspirert av nærheten til naturen og livet i et roligere tempo.',
    advice: 'Se etter en plassering som tar hensyn til både utsikt og privatliv. Tenk også gjennom adkomst, terreng og hvordan stedet brukes gjennom året.'
  }
};

const dialog = document.querySelector('#model-dialog');
let trigger = null;

document.querySelectorAll('[data-model]').forEach(button => {
  button.addEventListener('click', () => {
    const model = models[button.dataset.model];
    trigger = button;
    document.querySelector('#dialog-title').textContent = model.name;
    document.querySelector('#dialog-category').textContent = model.category;
    document.querySelector('#dialog-description').textContent = model.description;
    document.querySelector('#dialog-advice').textContent = model.advice;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => trigger?.focus({ preventScroll: true }));
document.querySelector('#dialog-contact').addEventListener('click', event => {
  event.preventDefault();
  dialog.close();
  const contactHeading = document.querySelector('#contact-title');
  contactHeading.setAttribute('tabindex', '-1');
  contactHeading.focus({ preventScroll: true });
  document.querySelector('#kontakt').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
document.querySelector('#year').textContent = new Date().getFullYear();
