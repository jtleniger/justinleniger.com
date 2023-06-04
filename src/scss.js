import fs from 'fs';
import { render } from 'node-sass';

export function buildSCSS() {
  const inputDir = 'scss';
  const outputFile = 'dist/style.css';

  render({
        data: "@import 'main';",
        includePaths: [inputDir],
        outputStyle: 'compressed'
    }, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    const sourceFiles = res.stats.includedFiles.map(p => p.slice(p.indexOf('scss/') + 5));

    sourceFiles.forEach(file => {
        console.log(`compile ${file}`);
    });

    fs.writeFileSync(outputFile, res.css);
  });
}
