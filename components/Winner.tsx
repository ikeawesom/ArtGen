import postsDB from "@/supabase/database/handlePosts";
import { SectionImage } from "./Sections";
import { useEffect, useState } from "react";
import LoadingIcon from "./utilities/LoadingIcon";
import mainStorage from "@/supabase/storage/handleStorage";
import { FeatureDB } from "@/supabase/database/handleFeatures";

export function Winner() {
  const [winnerDetails, setWinnerDetails] = useState<any>();
  const [imageLink, setImageLink] = useState<any>();

  async function handleLink(name: string) {
    const res = await FeatureDB.getSpecific("link", "name", name);
    if (res) {
      const anchor = res[0];
      window.location.href = `/features/${anchor.link}`;
    }
  }

  function handleIndex(res: Array<any>) {
    var highest_likes = -1;
    var highest_index = [-1];

    res.forEach((item, index) => {
      if (item.category === process.env.NEXT_PUBLIC_COMP_KEY) {
        if (item.likes.length > highest_likes) {
          highest_likes = item.likes.length;
          highest_index = [index];
        } else if (item.likes.length === highest_likes) {
          highest_index.push(index);
        }
      }
    });

    if (highest_index.length > 1) {
      return Math.floor(Math.random() * highest_index.length);
    }
    return 0;
  }

  useEffect(() => {
    async function getWinner() {
      const res = await getPosts();
      if (res) {
        const winnerIndex = handleIndex(res);
        setWinnerDetails(res[winnerIndex]);
        setImageLink(getImageLink(res[winnerIndex].images_links[0]));
      }
    }

    function getImageLink(name: string) {
      const res = mainStorage.getUrl("competition_entries", name);
      return res;
    }

    async function getPosts() {
      const res = await postsDB.getAll();
      return res;
    }

    // getWinner();
  }, []);

  // if (winnerDetails) {
  return (
    <div className="winner my-10 text-center">
      {winnerDetails && (
        <div className="">
          <h4 className="md:text-2xl text-xl font-semibold text-violet-50">
            Winner of July's Competition
          </h4>
          <h1 className="md:text-4xl text-2xl font-bold mt-3">
            <span className="gradient">@{winnerDetails.username}</span>
          </h1>
        </div>
      )}

      {imageLink && <SectionImage img={imageLink.publicUrl} full={true} />}
      {winnerDetails && (
        <div className="my-10">
          <h4 className="text-violet-100 text-lg font-semibold">
            Tools used from <span className="gradient font-bold">ArtGen</span>
          </h4>
          <ul className="flex gap-x-5 items-center justify-center flex-wrap">
            {winnerDetails.tools_used.map((item: string) => (
              <a
                key={item}
                onClick={() => handleLink(item)}
                className="cursor-pointer"
              >
                <li className="text-violet-100 hover:text-violet-300">
                  {item}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// return <LoadingIcon size={100} />;
// }
