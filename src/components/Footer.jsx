const Footer = ({ footerApi: { titles, links } }) => {
  return (
    <div>
      <footer className="bg-theme pt-7 pb-5 ">
        <div className="nike-container text-slate-200 ">
          <div className="grid grid-cols-3 items-start max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center ">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
