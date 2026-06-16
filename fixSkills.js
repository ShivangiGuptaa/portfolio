const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Skills.tsx', 'utf8');
content = content.replace('import { GitBrand } from "lucide-react";', '');
fs.writeFileSync('src/components/sections/Skills.tsx', content);
