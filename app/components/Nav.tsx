import { APP_NAME } from "../globals";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex w-full justify-center items-center  sticky top-0 left-0 z-20 bg-[#f9f2ffa2] shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between p-5 max-w-[1800px] w-full">
        <a href="#" className="flex gap-3 items-center">
          <img src="../favicon.ico" alt="" className="h-10 aspect-square" />
          <h1 className="text-xl font-bold text-indigo-950">{APP_NAME}</h1>
        </a>

        {/* Utility Buttons */}
        <ul className="flex gap-4 justify-center items-center text-indigo-950">
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

        {/* Account Buttons */}
        <ul className="flex gap-2 justify-center items-center">
          <li>
            <Button
              text="Sign Up"
              link="/account"
              tab={false}
              color="bg-violet-700"
              textcolor="text-blue-50"
              hovercolor="hover:bg-violet-500"
            />
          </li>
          <li>
            <Button
              textcolor="text-violet-700"
              text="Login"
              link="/account"
              tab={false}
              color="transparent"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
