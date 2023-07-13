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

ReactJS and NextJS are the main development frameworks for this platform. Read about [NextJS](https://nextjs.org/docs) and [ReactJS](https://react.dev/learn) before contributing!

<b>Note:</b> This site uses `app` routing, which removes the traditional `pages` and `src` dirs.

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
npm run dev
```

This should be locally hosted on `http://localhost:3000`.

All static media is managed in the `public` dir. You can easily add more content by uploading them directly in GitHub. The `app` dir includes the general pages of the website. Within its recursive dirs, `page.tsx` is the main HTML body of each page. Where necessary `layout.tsx` can be added to create general layouts for all of the `page.tsx` within that dir. Typos can also be edited directly in GitHub.

When editing, make sure to utilise `components` onto the `page.tsx` as much as possible instead of flooding the page with plain HTML. This is to improve readability and promote code reusability for other developers as well.

<b>Important:</b> Firebase will not allow access to the backend services due to undisclosed environment variables. Avoid modifying the backend Typescript files (i.e. `firebase/config.js`, `firebase/auth/*`, etc.)

## Developing Basic Components

All `component` files are located in the `root/components` dir. Create a new Typescript component with `.tsx`.

<b>Tip:</b> If necessary, add your components to relevant exisiting dirs or create new ones for better organisation.

```typescript
export default function NewFeature() {
  return <h1>This is my new feature</h1>;
}
```

If you are creating multiple sub components, avoid the `default` keyword when exporting. This way you can ustilise multiple exports within the same `<component-name>.tsx` file.

```typescript
export function FeatureHeader() {
  return (
   // Your component details
  )
}

export function FeatureBody() {
  return (
    <div>
      // Your component details
    </div>
  );
}
```

Import your new components into the `page.tsx` you are modifying like this.

```typescript
import {
  FeatureHeader,
  FeatureBody,
} from "@/components/<component-dir>/<component-name>";
```

When using `export default` in your `<component-name>.tsx`, you can import without `{}`.

```typescript
import NewFeature from "@/components/<component-dir>/<component-name>";
```

<!-- ## Developing Advanced Components -->

## Styling Components

As much as possible, [TailwindCSS](https://tailwindcss.com/docs/configuration) was used to create the styling for the project to reduce compiling of CSS in `globals.css`.

Note the use of `className` for Typescript instead of the traditional `class` in HTML.

```typescript
export default function NewFeature() {
  return (
    <div className="w-full p-10">
      <h1 className="my-10 text-center">Hello World</h1>
      <p className="text-sm">This is my feature!</p>
    </div>
  );
}
```

If a custom CSS is required, create a new `<component-name>.module.css` in the `root/components/<component-name>` dir.

```css
.block {
  background-color: linear-gradient(to bottom, black, red);
}
.heading {
  margin: 5px 0;
  text-align: center;
}
.subtitle {
  font-size: 5pt;
}
```

Import the CSS file into `<component-name>.tsx`.

```typescript
import styles from "./<component-name>.module.css";

export default function NewFeature() {
  return (
    <div className={styles.block}>
      <h1 className={styles.heading}>Hello World</h1>
      <p className={styles.subtitle}>This my feature!</p>
    </div>
  );
}
```

<b>Note:</b> Only modify `app/global.css` when styling inside the relevant `page.tsx` instead of components.

## Feedback

Feel free to make general comments on the project in the [Discussions](https://github.com/ikeawesom/ArtGen/discussions/categories/general) page. If you would like to see something new by the community, post them in the [Feature Suggestions](https://github.com/ikeawesom/ArtGen/discussions/categories/feature-suggestions) page.

Being open source, we welcome all feedback and contributions to make ArtGen a more conducive environment for all developers!
