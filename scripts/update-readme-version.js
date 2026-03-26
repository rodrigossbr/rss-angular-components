const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const libPackageJsonPath = path.join(rootDir, 'projects', 'rss-state-store', 'package.json');

const readmePaths = [
  path.join(rootDir, 'README.md'),
  path.join(rootDir, 'README.pt-br.md'),
  path.join(rootDir, 'projects', 'rss-state-store', 'README.md'),
  path.join(rootDir, 'projects', 'rss-state-store', 'README.pt-br.md')
];

try {
  // Read library version
  const libPackageJson = JSON.parse(fs.readFileSync(libPackageJsonPath, 'utf8'));
  const libVersion = libPackageJson.version;

  const updateReadmeFile = (filePath, version) => {
    let readmeContent = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Logic for main project READMEs (table format)
    if (filePath.includes(path.join(rootDir, 'README.md')) || filePath.includes(path.join(rootDir, 'README.pt-br.md'))) {
      const libVersionRegex = /\| \*\*`rss-state-store`\*\* \| `(\d+\.\d+\.\d+)` \|/g;
      if (readmeContent.match(libVersionRegex)) {
        readmeContent = readmeContent.replace(libVersionRegex, `| **\`rss-state-store\`** | \`${version}\` |`);
        updated = true;
      }
    }
    // Logic for library project READMEs (version badge)
    else if (filePath.includes(path.join('projects', 'rss-state-store'))) {
      const badgeRegex = /!\[npm version\]\(https:\/\/img\.shields\.io\/badge\/version-(\d+\.\d+\.\d+)-blue\)/;
      const titleRegex = /^(# @rss-state-store 🚀)/m;

      if (readmeContent.match(badgeRegex)) {
        // Update existing badge
        readmeContent = readmeContent.replace(badgeRegex, `![npm version](https://img.shields.io/badge/version-${version}-blue)`);
        updated = true;
      } else if (readmeContent.match(titleRegex)) {
        // Insert new badge after title if it doesn't exist
        readmeContent = readmeContent.replace(titleRegex, `$1\n\n![npm version](https://img.shields.io/badge/version-${version}-blue)`);
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, readmeContent, 'utf8');
      console.log(`${path.basename(filePath)} updated with rss-state-store version: ${version}`);
    } else {
      console.warn(`Could not find a suitable place to update rss-state-store version in ${path.basename(filePath)}.`);
    }
  };

  readmePaths.forEach(filePath => updateReadmeFile(filePath, libVersion));

} catch (error) {
  console.error('Error updating README versions:', error);
  process.exit(1);
}
