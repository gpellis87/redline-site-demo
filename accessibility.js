(function () {
  const root = document.documentElement;
  const settings = {
    text: localStorage.getItem('redlineA11yText') === '1',
    contrast: localStorage.getItem('redlineA11yContrast') === '1',
    motion: localStorage.getItem('redlineA11yMotion') === '1'
  };

  function applySettings() {
    root.classList.toggle('a11y-large-text', settings.text);
    root.classList.toggle('a11y-high-contrast', settings.contrast);
    root.classList.toggle('a11y-reduce-motion', settings.motion);
    localStorage.setItem('redlineA11yText', settings.text ? '1' : '0');
    localStorage.setItem('redlineA11yContrast', settings.contrast ? '1' : '0');
    localStorage.setItem('redlineA11yMotion', settings.motion ? '1' : '0');
  }

  function buildPanel() {
    const toggle = document.createElement('button');
    toggle.className = 'a11y-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'a11y-panel');
    toggle.textContent = 'Accessibility';

    const panel = document.createElement('div');
    panel.className = 'a11y-panel';
    panel.id = 'a11y-panel';
    panel.setAttribute('aria-label', 'Accessibility options');
    panel.innerHTML = `
      <h2>Accessibility Options</h2>
      <div class="a11y-controls">
        <button type="button" data-a11y="text">Larger text</button>
        <button type="button" data-a11y="contrast">High contrast</button>
        <button type="button" data-a11y="motion">Reduce motion</button>
        <button type="button" data-a11y="reset">Reset options</button>
      </div>
      <p class="a11y-note">These settings are saved on this device.</p>
    `;

    document.body.append(toggle, panel);

    function syncButtons() {
      panel.querySelector('[data-a11y="text"]').setAttribute('aria-pressed', String(settings.text));
      panel.querySelector('[data-a11y="contrast"]').setAttribute('aria-pressed', String(settings.contrast));
      panel.querySelector('[data-a11y="motion"]').setAttribute('aria-pressed', String(settings.motion));
    }

    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    panel.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-a11y]');
      if (!button) return;
      const action = button.dataset.a11y;
      if (action === 'text') settings.text = !settings.text;
      if (action === 'contrast') settings.contrast = !settings.contrast;
      if (action === 'motion') settings.motion = !settings.motion;
      if (action === 'reset') {
        settings.text = false;
        settings.contrast = false;
        settings.motion = false;
      }
      applySettings();
      syncButtons();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && panel.classList.contains('open')) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    syncButtons();
  }

  applySettings();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPanel);
  } else {
    buildPanel();
  }
})();
