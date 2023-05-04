## Description

I was tasked to create a Nextjs application for GitHub search using GitHub Search APIs. The application needed to have three screens, including a main screen with a search bar in the center, a user listing page, and a repository-listing page. I used ReactJs, Typescript, NextJS, and Tailwindcss for this project and incorporated Atomic design principles.

I started by breaking down the app into five levels: Atoms, Molecules, Organisms, Templates, and Pages. Atoms specified the smallest components of the project, such as Input, Select, StargazersCount, etc. Molecules included coupled simple components like SearchHeader with title and image, UserCard, RepositoryCard, and so on. Organisms specified more meaningful components like the user/repo cards listing components. Templates handled search results on two different pages and shared the same template to layout the organisms’ components, such as the UserList component and RepositoriesList component. Finally, Pages did HTTP requests and passed the data to Lists. In my implementation, I haven't used global state manager or any kind of Providers.

Repositories page is using client-sided request and rendering, while users page is using SSR. In addition, I faced with a difficulty that GitHib Rest Api doesn't provide all necessary information, that's why I decided to use GraphQL api for this particular request to meet the requirements of the task on the user's card. api is a separate folder that requires GitHub personal access token.

I tried to implement clean types and interfaces throughout the project to ensure better maintainability and readability of the code. I also utilized both client and server-side rendering using NextJS. To further enhance reliability and constancy of the project I included a Storybook with at least one default story for each component and Search tests via Cypress.

I also tried to follow a logical and structured approach for committing changes (sometimes I committed too much, it happens when you start a project).

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

---

Run the storybook server:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

---

Run cypress server:

```bash
npm run cypress
```

Your development server must be working and use http://localhost:3000.
Cypress window will open, select E2E testing and then select your browser.
It will open specs page.
