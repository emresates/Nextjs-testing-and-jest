// Jest DOM: Ek jest matcher'larını yükle
import "@testing-library/jest-dom";

// Mocklar veya global ayarlar eklenebilir
// Örneğin, Next.js Router için mock:
import { jest } from "@jest/globals";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// fetch'in mock'lanması gerekiyorsa:
// global.fetch = jest.fn();
