export default function ContactLinks() {
  const contactLinks = [
    { name: "Community", link: "/community", image: "community.svg" },
    { name: "Discord", link: "/", image: "discord.svg" },
    { name: "Instagram", link: "/", image: "instagram.svg" },
  ];
  return (
    <div className="md:mt-7 mt-3 w-full">
      <ul className="flex items-center justify-around gap-4 flex-wrap">
        {contactLinks.map((item) => (
          <a href={item.link}>
            <li className="flex flex-wrap gap-3 items-center justify-center hover:opacity-70 duration-200">
              <span>
                <img
                  src={`/contact/${item.image}`}
                  alt={item.name}
                  height={30}
                  width={30}
                />
              </span>
              <p className="text-indigo-950 font-semibold">{item.name}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
