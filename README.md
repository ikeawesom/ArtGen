<a href="art-gen.vercel.app" target="_blank">
   <img src="public/favicon.svg" alt="ArtGen"/>
</a>

# ArtGen

### Get what you need for your digital creatives, all in one place.

[ArtGen](https://art-gen.vercel.app) is a collection of all your digital tools to design and build stunning softwares. Building an open source platform like this allows developers from around the world come to share their stories and ideas, while having efficient workflows.

## Current Features

- Colour Palette
- Gradients
- Page Dividers
- CSS Generator
- Font Pairing
- Theme Generator

You can play a part into building this non-exhaustive list of features!

<i>Last updated: 13 July 2023</i>

## Technologies Used

- ReactJS
- NextJS
- TailwindCSS
- Typescript
- Firebase

## Contributing

NextJS is the main backend framework for this platform. Read the [NextJS docs](https://nextjs.org/docs) before contributing!

<b>Note:</b> This site uses `app` routing, which removes the traditional `pages` and `src` directories.

### How to Run it

First, ensure you have the latest version of [NodeJS](https://nodejs.org/en) installed.
You can check the version by using the `-v` argument.

```console
node -v
```

Once done, clone this repo and run the development server.

```console
git clone <this-repo>
npm install
npm start
```

This should be locally hosted on `http://localhost:3000`.

All static media is managed in the `public` directory. You can easily add more content by uploading them directly in GitHub. The `app` directory includes the general pages of the website. Within the recursive `(public)` directories, `page.tsx` is the main HTML body of each page.

When editing, make sure to utilise `components` onto the page as much as possible instead of flooding the page with plain HTML. This is to improve readability and promote code reusability for other developers as well.

<b>Important:</b> Firebase will not allow access to the backend services due to undisclosed environment variables.

## Developing Components

All `component` files are located in the `root/components` directory. Create a new Typescript component with `.tsx`.

<b>Tip:</b> If necessary, add your components to relevant exisiting directories or create new ones for better organisation.

```typescript {class="blue large" data-filename="NewFeature.tsx"}
export default function NewFeature() {
  return <h1>This is my new feature</h1>;
}
```

## Feedback

Feel free to make general comments on the project in the [Discussions](https://github.com/ikeawesom/ArtGen/discussions/categories/general) page. If you would like to see something new by the community, post them in the [Feature Suggestions](https://github.com/ikeawesom/ArtGen/discussions/categories/feature-suggestions) page.

Being open source, we welcome all feedback and contributions to make ArtGen a more conducive environment for all developers!

```

```
