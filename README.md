# DrupalX Theme Starter Kit

[![Cypress](https://github.com/drupalninja/drupalx_theme/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/drupalninja/drupalx_theme/actions/workflows/cypress-tests.yml)
[![Percy](https://github.com/drupalninja/drupalx_theme/actions/workflows/percy.yml/badge.svg)](https://github.com/drupalninja/drupalx_theme/actions/workflows/percy.yml)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/62f323f4/DrupalX-Theme)

The DrupalX theme starter kit is intended to be used with the [DrupalX distribution](https://github.com/drupalninja/drupalx-project).

This starter kit includes [Bootstrap 5](https://getbootstrap.com/), [Storybook](https://storybook.js.org/) and full template integration with the DrupalX install profile.

Public Storybook: https://drupalx.netlify.app/

## Generating the theme

The following command will generate the new custom theme using the DrupalX starter as the template:

```bash
ddev exec --dir /var/www/html/web core/scripts/drupal generate-theme --starterkit=drupalx_theme nameoftheme
```

Enable the new theme:
```bash
ddev . drush theme:en nameoftheme
ddev . drush config-set system.theme default -y nameoftheme
ddev . drush cr
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

Run Cypress tests (requires Storybook running):
```bash
npm run cypress
```

### Managing the 'dist' Folder

By default, the .gitignore file does not ignore the dist folder for demonstration purposes. However, in most projects, you will want to ignore this folder.

To do this, you can uncomment the relevant lines in the .gitignore file to ignore the dist folder and its contents. Here are the steps:

#### Update .gitignore:
* Open the .gitignore file.
* Find the lines related to the dist folder, which are commented out.
* Uncomment these lines to ensure the dist folder is ignored by Git.

#### Deploying Your Application:
* If you choose to ignore the dist folder, you will need to incorporate an npm build process when you deploy your application. This ensures that the necessary assets are generated and included in your deployment package.
