import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // Next.js projesinin ana dizini
});

const customJestConfig = {
  // Test dosyalarını belirlemek için kullanılan desen
  testMatch: [
    "<rootDir>/app/**/*.test.(js|jsx|ts|tsx)", // Tüm .test uzantılı dosyaları kapsar
    "<rootDir>/app/**/*.spec.(js|jsx|ts|tsx)", // Alternatif olarak .spec dosyaları da
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Jest setup dosyası
  moduleNameMapper: {
    // CSS/SCSS veya asset dosyaları için
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    // Alias'ları Jest ile çalıştırmak için
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom", // React bileşenlerini test etmek için
  collectCoverage: true, // Kapsama raporlarını etkinleştir
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Sadece kaynak dosyaları tarar
    "!src/**/*.d.ts", // TypeScript tanım dosyalarını hariç tutar
    "!src/**/index.ts", // index dosyalarını hariç tutar
    "!src/pages/_*.tsx", // Next.js özel dosyalarını hariç tutar (ör: _app.tsx, _document.tsx)
  ],
  coverageDirectory: "<rootDir>/coverage", // Kapsama raporları için klasör
};

export default createJestConfig(customJestConfig);
