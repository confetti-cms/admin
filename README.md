# FormKit Vue Starter Project

This template should help get you started using FormKit with Vue 3 in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
to learn more.

## Installation from Github

**During the Alpha and Beta phases of development, FormKit packages will be hosted on
Github**. In order to `npm install` FormKit you will need to be:

1. Added as a collaborator to the `@formkit/formkit` repo on Github.
2. Authenticated with Github via an `~/.npmrc` entry or via `npm` on the command line.
3. Have an `.npmrc` file for the `@formkit` scope in the root of your project directory.

### 1) Joining the `@formkit/formkit` repo

All active Alpha and Beta members will be added as collaborators to the repo. If you
have not been added and believe this is in error, then please message us via the
community Discord in the `#formkit-general-chat` channel: https://discord.gg/NZ6nchBDGx

### 2) Authenticating with Github Packages

In order to download private Github packages via `npm` you will need to [create a
personal access token (PAT)](https://github.com/settings/tokens) in your Github
account with at least the `repo` and `read:packages` scopes enabled.

Next, you can either add the token to your global `~/.npmrc` file:

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Or sign in via the command line with the `@formkit` scope flag set:

```bash
$ npm login --scope=@formkit --registry=https://npm.pkg.github.com

> Username: GITHUB_USERNAME
> Password: PERSONAL_ACCESS_TOKEN
> Email: PUBLIC_EMAIL_ADDRESS
```

### 3) Adding a `.npmrc` file to your project.

Lastly, you will need to create an `.npmrc` file in your project adjacent to your
`package.json` file that sets the `@formkit` scope to Github Packages.
For this starter project, the `.npmrc` file already exists.

```bash
@formkit:registry=https://npm.pkg.github.com
```

## Local Development

Once the above setup is complete you can install and start your dev! The
`@formkit/vue` package is already added to the `package.json` file for this project.

```bash
npm install
npm run dev
```