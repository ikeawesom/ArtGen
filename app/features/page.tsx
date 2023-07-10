import { Metadata } from "next";

const metadata: Metadata = {
  title: "Features | ArtGen",
};

export default function Page() {
  return (
    <div>
      <h1 className="heading m-5">Features at ArtGen</h1>

      <ul className="flex gap-4 justify-center items-center text-indigo-950">
        <li>
          <a href="/features/theme_generator">Theme Generator</a>
        </li>
        <li>
          <a href="/features/color_palette">Color Palette</a>
        </li>
        <li>
          <a href="/features/gradients">Gradients</a>
        </li>
        <li>
          <a href="/features/page_dividers">Page Dividers</a>
        </li>
        <li>
          <a href="/features/font_pairing">Font Pairs</a>
        </li>
        <li>
          <a href="/features/icons">Icons</a>
        </li>
        <li>
          <a href="/features/blob_generator">Blob Generator</a>
        </li>
      </ul>
    </div>
  );
}
