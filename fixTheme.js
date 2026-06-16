const fs = require('fs');
let content = fs.readFileSync('src/components/ThemeProvider.tsx', 'utf8');
content = content.replace('import { type ThemeProviderProps } from "next-themes/dist/types";', 'import type { ThemeProviderProps } from "next-themes";');
fs.writeFileSync('src/components/ThemeProvider.tsx', content);