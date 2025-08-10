const fs = require('fs');
const path = require('path');

// Function to check if required directories exist
function checkRequiredDirs() {
  const dirs = [
    'app',
    'components',
    'public',
    'styles',
    'lib',
    'redux'
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Function to check if required files exist
function checkRequiredFiles() {
  const files = [
    'next.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'tsconfig.json',
    '.gitignore',
    'app/globals.css'
  ];

  files.forEach(file => {
    if (!fs.existsSync(file)) {
      console.error(`Missing required file: ${file}`);
    }
  });
}

// Run checks
checkRequiredDirs();
checkRequiredFiles();

console.log('Setup verification complete. Please ensure all missing files are added.');
