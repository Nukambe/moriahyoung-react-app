import "@testing-library/jest-dom/vitest";

// jsdom implements neither media playback nor IntersectionObserver, both of
// which the site uses for the audio player and scroll reveals.
Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  value: () => Promise.resolve(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: () => {},
});

Object.defineProperty(window.HTMLMediaElement.prototype, "load", {
  configurable: true,
  value: () => {},
});

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

globalThis.IntersectionObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};

// jsdom defines window.scrollTo but throws "not implemented" when called.
Object.defineProperty(window, "scrollTo", { configurable: true, value: () => {} });
