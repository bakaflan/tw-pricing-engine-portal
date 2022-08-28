import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});
