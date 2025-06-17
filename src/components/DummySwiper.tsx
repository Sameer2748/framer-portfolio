"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

const DummySwiper = ({images}:{images:any}) => {
  const dummyImages = [
    "https://imgs.search.brave.com/XzZVM56lpLvbkYx6Zs3LZ6sltUtz9zG_1XBNlWqiyGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGVua0xhd2c1MUVB/cmFHaHNXazFRekF5/bEIyNURQQS1QTy10/dlVRamZROXluaWVs/TEZPUzY3cjBCYXlS/d3pDYlh6c3A0VEJ6/S3NJbmY3TlRYUmFE/UDAtb2J5ZzdrNC1h/b2szTlhNQ2VscE1f/SkNBd0F4bDZaWWI5/TEhlWWhNSE01RVhs/NWhFNU9oblFjb3g4/MmRsMzR5cnI1dz9r/ZXk9MWxuYm44LUF6/MnF5b2pzblpGcDFE/UQ",
    "https://imgs.search.brave.com/XzZVM56lpLvbkYx6Zs3LZ6sltUtz9zG_1XBNlWqiyGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGVua0xhd2c1MUVB/cmFHaHNXazFRekF5/bEIyNURQQS1QTy10/dlVRamZROXluaWVs/TEZPUzY3cjBCYXlS/d3pDYlh6c3A0VEJ6/S3NJbmY3TlRYUmFE/UDAtb2J5ZzdrNC1h/b2szTlhNQ2VscE1f/SkNBd0F4bDZaWWI5/TEhlWWhNSE01RVhs/NWhFNU9oblFjb3g4/MmRsMzR5cnI1dz9r/ZXk9MWxuYm44LUF6/MnF5b2pzblpGcDFE/UQ",
    "https://imgs.search.brave.com/XzZVM56lpLvbkYx6Zs3LZ6sltUtz9zG_1XBNlWqiyGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGVua0xhd2c1MUVB/cmFHaHNXazFRekF5/bEIyNURQQS1QTy10/dlVRamZROXluaWVs/TEZPUzY3cjBCYXlS/d3pDYlh6c3A0VEJ6/S3NJbmY3TlRYUmFE/UDAtb2J5ZzdrNC1h/b2szTlhNQ2VscE1f/SkNBd0F4bDZaWWI5/TEhlWWhNSE01RVhs/NWhFNU9oblFjb3g4/MmRsMzR5cnI1dz9r/ZXk9MWxuYm44LUF6/MnF5b2pzblpGcDFE/UQ",

  ];
  console.log(images);
  

  return (
    <div className="w-full max-w-3xl mx-auto my-10">

      <Swiper
        modules={[ Pagination, Autoplay]}

        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        
        slidesPerView={1}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-full h-auto  object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DummySwiper;
