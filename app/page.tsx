"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faFacebook, faGit, faGitAlt, faGithub, faHtml5, faJs, faLaravel, faLinkedin, faPhp, faPython, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

// import Swiper bundle with all modules installed
// import {Swiper, SwiperSlide } from 'swiper/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import styles bundle
import 'swiper/css/bundle';

export default function Home() {

  return (
    <main className="min-h-screen p-24">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className='text-left'>
          <div className='text-5xl md:text-6xl'>Jideonwo Felix</div>
          <div className='text-sm md:text-2xl text-[#c1c1c1]'>Web Developer, Computer Hardware Technician, Educator</div>
          <div className='flex gap-2 mt-3'>
            <Link href={'#'} className="w-10">
              <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link href={'#'}  className="w-10">
              <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
            <Link href={'#'}  className="w-10">
              <FontAwesomeIcon icon={faFacebook}/>
            </Link>
            
          </div>
        </div>
        <div className=''>
          <Image width={600} height={300} alt="jideonwo's image" src={'/hero-img-2.png'}/>
        </div>
      </section>
      <section>
        <h2 className='mb-10'>My Stack</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faHtml5}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faCss3}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faJs}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faWordpress}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faReact}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faLaravel}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faPhp}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faPython}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faBootstrap}/></div></SwiperSlide>
          <SwiperSlide className='w-20'><div className="text-6xl"><FontAwesomeIcon icon={faGitAlt}/></div></SwiperSlide>
          {/* illustrator corel django mysql */}
        </Swiper>
      </section>
    </main>
  )
}
