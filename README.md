## Preparations
Your nodejs version should be 16.20.0 or higher.
Firstly, install npm modules:
```bash
npm i
```
After modules installation, you need to set up your `.env` file.
It should look like this:
```bash
GITHUB_API_ACCESS_TOKEN={your token}
```
where your token is your [github personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic).

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

___
Run the storybook server:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
___
Run cypress server:

```bash
npm run cypress
```

Your development server must be working and use http://localhost:3000. 
Cypress window will open, select E2E testing and then select your browser.
It will open specs page.
