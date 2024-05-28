# DrupalX Theme Starter Kit

The DrupalX theme starter kit is intended to be used with the [DrupalX distribution](https://github.com/drupalninja/drupalx-project).

This starter kit includes Bootstrap 5, Storybook and full template integration with the DrupalX install profile.

## Creating your custom theme
```bash
ddev exec --dir /var/www/html/web core/scripts/drupal generate-theme --starterkit=drupalx_theme nameoftheme
```

## Compiling Theme Assets

If you haven't yet, install nvm:
https://github.com/creationix/nvm

### Use the right version of node with:
```bash
nvm use
```

_This command will look at your `.nvmrc` file and use the
version node.js specified in it. This ensures all developers
use the same version of node for consistency._

### If that version of node isn't installed, install it with the following command:
```bash
nvm install
```

### Install npm dependencies:
```bash
npm install
```

### Run all commands for JS, SASS compilation:
```bash
npm run build
```

### Run Storybook
```bash
npm run storybook
```

_This will start a local server instance of Storybook._
