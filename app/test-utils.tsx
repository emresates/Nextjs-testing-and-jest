import { render } from "@testing-library/react";
import { RenderOptions } from "@testing-library/react";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <div className="theme-provider">{children}</div>;
}

function I18nProvider({ children }: { children: React.ReactNode }) {
  return <div className="i18n-provider">{children}</div>;
}

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}

export const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};
