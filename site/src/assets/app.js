(() => {
  const root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  // Copy buttons for code blocks.
  document.querySelectorAll('.prose pre').forEach((pre) => {
    const code = pre.querySelector('code');
    if (!code) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    button.addEventListener('click', async () => {
      const text = code.innerText;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const area = document.createElement('textarea');
          area.value = text;
          area.setAttribute('readonly', '');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          area.remove();
        }
        button.textContent = 'Copied';
        window.setTimeout(() => {
          button.textContent = 'Copy';
        }, 1600);
      } catch {
        button.textContent = 'Select & copy';
        window.setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }
    });
    pre.classList.add('has-copy');
    pre.appendChild(button);
  });

  // Print edition button.
  document.querySelectorAll('[data-print]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  const dialog = document.getElementById('search-dialog');
  if (!dialog) return;

  const input = document.getElementById('search-input');
  const list = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const openers = document.querySelectorAll('[data-search-open]');
  const closers = document.querySelectorAll('[data-search-close]');
  const data = window.GUIDE_SEARCH;
  const entries = data && Array.isArray(data.entries) ? data.entries : [];

  if (!input || !list || !status) return;

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const appendHighlighted = (parent, text, terms) => {
    if (!terms.length) {
      parent.appendChild(document.createTextNode(text));
      return;
    }
    const pattern = terms
      .filter(Boolean)
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join('|');
    if (!pattern) {
      parent.appendChild(document.createTextNode(text));
      return;
    }
    const matcher = new RegExp(`(${pattern})`, 'gi');
    let last = 0;
    let match = matcher.exec(text);
    while (match) {
      if (match.index > last) {
        parent.appendChild(document.createTextNode(text.slice(last, match.index)));
      }
      const mark = document.createElement('mark');
      mark.textContent = match[0];
      parent.appendChild(mark);
      last = match.index + match[0].length;
      if (match[0].length === 0) matcher.lastIndex += 1;
      match = matcher.exec(text);
    }
    if (last < text.length) {
      parent.appendChild(document.createTextNode(text.slice(last)));
    }
  };

  const makeSnippet = (text, term) => {
    const index = text.toLowerCase().indexOf(term);
    if (index < 0) return text.slice(0, 170) + (text.length > 170 ? '…' : '');
    const start = Math.max(0, index - 55);
    const end = Math.min(text.length, start + 190);
    return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${
      end < text.length ? '…' : ''
    }`;
  };

  const render = (query) => {
    const clean = query.trim();
    list.replaceChildren();

    if (!clean) {
      status.textContent = entries.length
        ? `${entries.length} chapters and sections ready. Start typing a word.`
        : 'Search index did not load. Use the chapter list to browse.';
      return;
    }

    const terms = clean.toLowerCase().split(/\s+/).filter(Boolean).slice(0, 6);
    const matches = [];

    entries.forEach((entry) => {
      const title = String(entry.title || '').toLowerCase();
      const short = String(entry.short || '').toLowerCase();
      const headings = Array.isArray(entry.headings) ? entry.headings : [];
      const headingText = headings.map((heading) => heading.text.toLowerCase()).join(' ');
      const text = String(entry.text || '');
      const lowerText = text.toLowerCase();
      const haystack = `${title} ${short} ${headingText} ${lowerText}`;

      if (!terms.every((term) => haystack.includes(term))) return;

      let score = 0;
      let firstIndex = -1;
      terms.forEach((term) => {
        if (title.includes(term)) score += 12;
        if (short.includes(term)) score += 8;
        if (headingText.includes(term)) score += 4;
        const count = lowerText.split(term).length - 1;
        score += Math.min(5, count);
        const index = lowerText.indexOf(term);
        if (index >= 0 && (firstIndex === -1 || index < firstIndex)) firstIndex = index;
      });

      const heading =
        headings.find((item) => terms.some((term) => item.text.toLowerCase().includes(term))) ||
        null;

      matches.push({ entry, heading, score, firstIndex: firstIndex >= 0 ? firstIndex : 0 });
    });

    matches.sort((a, b) => b.score - a.score);

    if (!matches.length) {
      status.textContent = `No matches for “${clean}”. Try a broader word.`;
      const empty = document.createElement('li');
      empty.className = 'search-empty';
      empty.textContent = 'No chapters matched. Try “invoice”, “email”, “training”, “EIN”, or “AI”.';
      list.appendChild(empty);
      return;
    }

    const shown = matches.slice(0, 12);
    status.textContent =
      matches.length > shown.length
        ? `Showing ${shown.length} of ${matches.length} matches. Refine the search for more.`
        : `${matches.length} match${matches.length === 1 ? '' : 'es'}.`;

    shown.forEach(({ entry, heading, firstIndex }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `${entry.slug}${heading ? `#${heading.id}` : ''}`;

      const meta = document.createElement('span');
      meta.className = 'r-meta';
      meta.textContent = entry.number
        ? `Chapter ${entry.number} · ${entry.group}`
        : 'Guide overview';

      const title = document.createElement('span');
      title.className = 'r-title';
      appendHighlighted(title, entry.short || entry.title, terms);

      const snippet = document.createElement('span');
      snippet.className = 'r-snippet';
      const text = String(entry.text || '');
      const start = Math.max(0, firstIndex - 55);
      const end = Math.min(text.length, start + 190);
      const slice = `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${
        end < text.length ? '…' : ''
      }`;
      appendHighlighted(snippet, slice || makeSnippet(text, terms[0]), terms);

      link.append(meta, title, snippet);
      item.appendChild(link);
      list.appendChild(item);
    });
  };

  const openSearch = () => {
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    input.value = '';
    render('');
    window.setTimeout(() => input.focus(), 0);
  };

  openers.forEach((button) => button.addEventListener('click', openSearch));
  closers.forEach((button) =>
    button.addEventListener('click', () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    })
  );

  input.addEventListener('input', () => render(input.value));

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const first = list.querySelector('a');
      if (first) {
        event.preventDefault();
        window.location.href = first.getAttribute('href');
        if (typeof dialog.close === 'function') dialog.close();
      }
    }
    if (event.key === 'ArrowDown') {
      const first = list.querySelector('a');
      if (first) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  });

  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const typing =
      target &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable);
    const slash = event.key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey;
    const commandK =
      (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';

    if (slash || commandK) {
      event.preventDefault();
      openSearch();
    }
  });

  render('');
})();
