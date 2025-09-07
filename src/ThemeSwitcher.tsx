import { useState, useEffect } from "react";
import "./ThemeSwitcher.scss";

type Theme = "system" | "light" | "dark";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    // Get saved theme from localStorage or default to system
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const htmlRoot = document.documentElement;
    const reactRoot = document.getElementById("root");

    if (selectedTheme === "system") {
      htmlRoot.removeAttribute("data-theme");
      reactRoot?.removeAttribute("data-theme");
    } else {
      htmlRoot.setAttribute("data-theme", selectedTheme);
      reactRoot?.setAttribute("data-theme", selectedTheme);
    }

    localStorage.setItem("theme", selectedTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <fieldset className="theme-switcher">
      <legend className="sr-only">Select a display theme:</legend>

      <div className="theme-option">
        <input
          type="radio"
          value="system"
          checked={theme === "system"}
          onChange={() => handleThemeChange("system")}
          id="theme-switch-system"
          aria-label="system"
        />
        <label htmlFor="theme-switch-system">
          <span className="sr-only">system</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V11C1.5 11.8284 2.17157 12.5 3 12.5H13C13.8284 12.5 14.5 11.8284 14.5 11V3C14.5 2.17157 13.8284 1.5 13 1.5H3ZM0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V11C16 12.6569 14.6569 14 13 14H3C1.34315 14 0 12.6569 0 11V3ZM4 3.5C3.72386 3.5 3.5 3.72386 3.5 4V8H12.5V4C12.5 3.72386 12.2761 3.5 12 3.5H4ZM7.5 10.5H12.5V9.5H7.5V10.5Z"
            />
          </svg>
        </label>
      </div>

      <div className="theme-option">
        <input
          type="radio"
          value="light"
          checked={theme === "light"}
          onChange={() => handleThemeChange("light")}
          id="theme-switch-light"
          aria-label="light"
        />
        <label htmlFor="theme-switch-light">
          <span className="sr-only">light</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1V0H7V1V2H8V1ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM8 14V15H7V14V13H8V14ZM14 7H15V8H14H13V7H14ZM2 7H1V8H2H3V7H2ZM11.7782 3.80761L12.4853 3.10051L11.7782 2.39341L11.071 3.10051L10.7175 3.45399L11.4246 4.16109L11.7782 3.80761ZM3.80761 11.7782L3.10051 12.4853L2.39341 11.7782L3.10051 11.071L3.45399 10.7175L4.16109 11.4246L3.80761 11.7782ZM3.80761 4.22183L3.10051 3.51472L2.39341 4.22183L3.10051 4.92893L3.45399 5.28241L4.16109 4.57531L3.80761 4.22183ZM11.7782 12.1924L12.4853 12.8995L11.7782 13.6066L11.071 12.8995L10.7175 12.546L11.4246 11.8389L11.7782 12.1924Z"
            />
          </svg>
        </label>
      </div>

      <div className="theme-option">
        <input
          type="radio"
          value="dark"
          checked={theme === "dark"}
          onChange={() => handleThemeChange("dark")}
          id="theme-switch-dark"
          aria-label="dark"
        />
        <label htmlFor="theme-switch-dark">
          <span className="sr-only">dark</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 0V1V1.5H11L11.75 1.5V3H11H10.5V3.5V4.25H9V3.5V3H8.5H7.75V1.5H8.5H9V1V0H10.5ZM5.50514 4.75496C4.58413 5.53491 4 6.69972 4 8C4 10.3472 5.90279 12.25 8.25 12.25C9.55029 12.25 10.7151 11.6659 11.495 10.7448C11.4138 10.7483 11.3321 10.75 11.25 10.75C8.07436 10.75 5.5 8.17563 5.5 5C5.5 4.91792 5.50172 4.83623 5.50514 4.75496ZM2.5 8C2.5 5.51072 4.08142 3.39271 6.292 2.59219L7.25256 3.55275C7.08933 4.00347 7 4.49047 7 5C7 7.3472 8.90279 9.25 11.25 9.25C11.7595 9.25 12.2465 9.16065 12.6973 8.99743L13.6578 9.95798C12.8573 12.1686 10.7393 13.75 8.25 13.75C5.07436 13.75 2.5 11.1756 2.5 8Z"
            />
          </svg>
        </label>
      </div>
    </fieldset>
  );
};

export default ThemeSwitcher;
