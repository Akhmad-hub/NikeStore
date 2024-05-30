import { Splide, SplideSlide } from "@splidejs/react-splide";
import Tittle from "./utils/Tittle";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import '@splidejs/splide/css';
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4, //Menentukan jumlah item yang akan ditampilkan per slide.
        perMove: 1, //Menentukan jumlah item yang akan bergerak setiap kali navigasi.
        type: 'loop', //Jenis slider, dalam hal ini 'loop' untuk membuat slider berputar.
        rewind: true, //Memungkinkan slider untuk melompat kembali ke awal setelah mencapai akhir jika diaktifkan.
        keyboard: 'global', //Memungkinkan navigasi menggunakan keyboard; dalam hal ini, 'global' memungkinkan navigasi dari mana saja.

        gap: '1rem', //jarak setiap item    
        pagination: false, // Opsi untuk menampilkan atau menyembunyikan navigasi halaman. Di sini, itu diatur ke false untuk menyembunyikan navigasi halaman.
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <div className="nike-container mb-11">
      <Tittle title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow-md shadow-slate-200 ring-1 ring-slate-100">
                <div>
                  <img src={val.img} alt={`img/story/${i}`} className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500" />
                    <span className="text-xs font-bold">{val.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <ClockIcon className="icon-style w-4 h-4 text-black" />
                    <span  className="text-xs font-bold">{val.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-blue-600 font-bold text-xs">{val.by}</span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4 ">
                  <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                          <p className="text-sm text-justify lg:text-xs">{truncate(val.text, { length: 175 })}</p> 
                          {/* bisa juga menggunakan {val.title.substring(0,177)} */}
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <Link to={val.url} className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-white py-1.5 buttom-theme">{val.btn}</Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
