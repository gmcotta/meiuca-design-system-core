import { browserName } from './browserNameHelper';

export function hostContextHelper(el) {
  const userAgent = browserName();

  if(userAgent === 'firefox' || userAgent === 'safari') {
    const element = el.closest('[brand]');
    const brand = element.getAttribute('brand');
    const theme = element.getAttribute('theme');
    const mode = element.getAttribute('mode');

    el.setAttribute('brand', brand);
    el.setAttribute('theme', theme);
    el.setAttribute('mode', mode);

    let observer = new MutationObserver(function(mutations) {
      console.log({ mutations });
      mutations.forEach(function(mutation) {
        if(mutation.type === 'attributes') {
          const brand = element.getAttribute('brand');
          const theme = element.getAttribute('theme');
          const mode = element.getAttribute('mode');
          el.setAttribute('brand', brand);
          el.setAttribute('theme', theme);
          el.setAttribute('mode', mode);
        }
      })
    });
    observer.observe(element, {
      attributes: true
    });
  }
}