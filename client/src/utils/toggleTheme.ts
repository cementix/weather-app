export const toggleTheme = (
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
) => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
};
