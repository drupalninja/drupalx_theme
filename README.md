# DrupalX Theme Starter Kit

The DrupalX theme starter kit is intended to be used with the [DrupalX distribution](https://github.com/drupalninja/drupalx-project).

This starter kit includes [Bootstrap 5](https://getbootstrap.com/), [Storybook](https://storybook.js.org/) and full template integration with the DrupalX install profile.

Public Storybook: https://drupalx.netlify.app/

## Generating the theme

The following command will generate the new custom theme using the DrupalX starter as the template:

```bash
ddev exec --dir /var/www/html/web core/scripts/drupal generate-theme --starterkit=drupalx_theme nameoftheme
```

## Compiling Theme Assets

If you haven't yet, install nvm:
https://github.com/creationix/nvm

Use the right version of node with the following:
```bash
nvm use
```

_This command will look at your `.nvmrc` file and use the
version node.js specified in it. This ensures all developers
use the same version of node for consistency._

If that version of node isn't installed, install it with the following command:
```bash
nvm install
```

Install npm dependencies:
```bash
npm install
```

Build all required theme assets:
```bash
npm run build
```

Compile SASS as files are updated:
```bash
npm run watch
```

Run Storybook:
```bash
npm run storybook
```
