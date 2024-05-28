// compile.js
const sass = require('sass');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const compileSass = (file) => {
  const result = sass.renderSync({ file });

  // Directory to output compiled CSS files
  const outputDir = path.join('dist', 'css');

  // Ensure the output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Get the file name without directory path
  const fileName = path.basename(file, '.scss');

  // Change the extension from .scss to .css and place it in the output
  // directory
  const outputFile = path.join(outputDir, `${fileName}.css`);

  // Write the compiled CSS to the output file
  fs.writeFileSync(outputFile, result.css);
  console.log(`Compiled ${file} to ${outputFile}`);
};

const compileJS = (file) => {
  // Directory to output compiled JavaScript files
  const outputDir = path.join('dist', 'js');

  // Ensure the output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Get the file name without directory path
  const fileName = path.basename(file, '.behavior.js');

  // Copy the file
  const outputFile = path.join(outputDir, `${fileName}.behavior.js`);

  // Write the JS to the output file
  fs.writeFileSync(outputFile, fs.readFileSync(file));
  console.log(`Compiled ${file} to ${outputFile}`);
};

const file = process.argv.slice(2).join(' '); // Get the file path from command line arguments

console.log(`Compiling ${file}`);

if (file) {
  // Determine the file type and compile accordingly
  if (file.endsWith('.scss')) {
    compileSass(file);

    // We need to update bootstrap again.
    if (!file.endsWith('bootstrap.scss')) {
      compileSass('src/stories/global/bootstrap.scss');
    }
  }
  else if (file.endsWith('.behavior.js')) {
    compileJS(file);
  }
}
else {
  // Compile all .scss files
  const sassFiles = glob.sync('src/**/*.scss');
  sassFiles.forEach(compileSass);

  // Compile all .behavior.js files
  const jsFiles = glob.sync('src/**/*.behavior.js');
  jsFiles.forEach(compileJS);
}
