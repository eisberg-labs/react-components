export const projects = [{
  "name": "@eisberg-labs/google-maps-leaflet-tile-layer",
  "version": "4.0.0",
  "description": "Google Maps tile layer for react leaflet.",
  "keywords": [
    "react-leaflet",
    "google",
    "maps"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/google-maps-leaflet-tile-layer",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": "https://github.com/eisberg-labs/react-components",
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "sideEffects": false,
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "@types/leaflet": "1.9.0",
    "leaflet": "^1.9.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.2.0"
  },
  "peerDependencies": {
    "leaflet": "^1.9.3",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0",
    "react-leaflet": "^4.2.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "gitHead": "1ba37d085031a3cafd6e3629c7114d9ddd73c64b",
  "documentation": {
    "title": "Google Maps Leaflet Layer",
    "thumbnail": "demo.gif"
  }
}
,{
  "name": "@eisberg-labs/mui-copy-field",
  "version": "4.0.0",
  "description": "Material-UI text field with copy to clipboard functionality.",
  "keywords": [
    "react",
    "material-ui",
    "copy",
    "field",
    "input",
    "mui"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/mui-copy-field",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "sideEffects": false,
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.10.0",
    "@mui/material": "^5.10.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.10.0",
    "@mui/material": "^5.10.0",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "gitHead": "1ba37d085031a3cafd6e3629c7114d9ddd73c64b",
  "documentation": {
    "title": "Copy to Clipboard Text Field",
    "thumbnail": "demo.gif"
  }
}
,{
  "name": "@eisberg-labs/mui-next-cookie-consent",
  "version": "4.0.0",
  "description": "React Material Ui cookie consent dialog, lightweight, compatible with nextjs cookies and tailwind css.",
  "keywords": [
    "react",
    "material-ui",
    "mui",
    "cookie",
    "consent"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/mui-next-cookie-consent",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "@mui/base": "^5.0.0-alpha.115",
    "cookies-next": "^2.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "@mui/base": "^5.0.0-alpha.115",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "gitHead": "1ba37d085031a3cafd6e3629c7114d9ddd73c64b",
  "documentation": {
    "title": "Simple Cookie Consent"
  }
}
,{
  "name": "@eisberg-labs/next-google-adsense",
  "version": "4.0.1",
  "description": "NextJS React Component for Google Adsense.",
  "keywords": [
    "nextjs",
    "adsense",
    "google",
    "autoads"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/next-google-adsense",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "next": "12.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "next": "^12.0.0 || ^13.0.0",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "documentation": {
    "title": "Next Google Adsense"
  }
}
,{
  "name": "@eisberg-labs/next-google-analytics",
  "version": "4.0.0",
  "description": "NextJS React Component for Google universal analytics.",
  "keywords": [
    "nextjs",
    "google-analytics",
    "universal",
    "google",
    "analytics"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/next-google-analytics",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "next": "12.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "next": "^12.0.0 || ^13.0.0",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "documentation": {
    "title": "Next Google Analytics"
  }
}
,{
  "name": "@eisberg-labs/next-image-section",
  "version": "4.0.0",
  "description": "Image as background, React section with lazy loaded nextjs image as background and tailwind compatible",
  "keywords": [
    "react",
    "nextjs",
    "background",
    "image",
    "lazy",
    "tailwind"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/next-image-section",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "sideEffects": false,
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "style.css",
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "devDependencies": {
    "next": "13.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "next": "^12.0.0 || ^13.0.0",
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "documentation": {
    "title": "Next Image Background Section",
    "thumbnail": "demo.png"
  }
}
,{
  "name": "@eisberg-labs/use-google-charts",
  "version": "4.0.0",
  "description": "Google charts context loader for React components, loosely typed.",
  "keywords": [
    "google-charts",
    "react",
    "google",
    "charts"
  ],
  "homepage": "https://www.amarjanica.com/projects/react-components/use-google-charts",
  "bugs": {
    "url": "https://github.com/eisberg-labs/react-components/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eisberg-labs/react-components.git"
  },
  "license": "MIT",
  "author": {
    "name": "Ana Bujan - Eisberg Labs",
    "email": "ana@eisberg-labs.com",
    "url": "https://www.eisberg-labs.com"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "dist",
    "test": "__tests__"
  },
  "files": [
    "dist/**",
    "package.json",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "prebuild": "npm run test && npm run lint && npm run prettier",
    "build": "rollup -c ../../rollup.config.js",
    "lint": "eslint {src,__tests__}/**/*",
    "prettier": "prettier --write \"./(src|__tests__)/**/*.(ts|tsx)\"",
    "test": "jest -c ../../jest.config.js"
  },
  "dependencies": {
    "@charlietango/use-script": "^2.3.0"
  },
  "devDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "documentation": {
    "title": "React Google Charts"
  }
}
];