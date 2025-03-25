"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonSecondary, H1, H2, P } from '../ui'
import Link from 'next/link'
import Image from 'next/image'
import { Design, ICall, IDesign, IForm, IPayment, IStoreData } from '@/interfaces'
import { PopupPage } from './PopupPage'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const SliderImages = ({ content, index, style, storeData }: { content: IDesign, index: any, style?: any, storeData?: IStoreData }) => {

  const [popup, setPopup] = useState({ view: 'hidden', opacity: 'opacity-0', mouse: false })
  const [cont, setCont] = useState('')
  const [viewLogo, setViewLogo] = useState(false)
  const [viewLogo2, setViewLogo2] = useState(false)
  const [titleLoaded, setTitleLoaded] = useState(false);
  const [descriptionLoaded, setDescriptionLoaded] = useState(false);
  const [block1Loaded, setBlock1Loaded] = useState(false);
  const [block2Loaded, setBlock2Loaded] = useState(false);
  const [block3Loaded, setBlock3Loaded] = useState(false);
  const [block4Loaded, setBlock4Loaded] = useState(false);
  const [block5Loaded, setBlock5Loaded] = useState(false);
  const [block6Loaded, setBlock6Loaded] = useState(false);
  const [block7Loaded, setBlock7Loaded] = useState(false);
  const [block8Loaded, setBlock8Loaded] = useState(false);
  const [block9Loaded, setBlock9Loaded] = useState(false);
  const [block10Loaded, setBlock10Loaded] = useState(false);

  const refLogo = useRef(null)
  const refLogo2 = useRef(null)
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const block4Ref = useRef(null);
  const block5Ref = useRef(null);
  const block6Ref = useRef(null);
  const block7Ref = useRef(null);
  const block8Ref = useRef(null);
  const block9Ref = useRef(null);
  const block10Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewLogo(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (refLogo.current) {
      observer.observe(refLogo.current);
    }

    return () => {
      if (refLogo.current) {
        observer.unobserve(refLogo.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewLogo2(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (refLogo2.current) {
      observer.observe(refLogo2.current);
    }

    return () => {
      if (refLogo2.current) {
        observer.unobserve(refLogo2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setTitleLoaded(true);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setDescriptionLoaded(true);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock1Loaded(true);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block1Ref.current) {
      observer.observe(block1Ref.current);
    }

    return () => {
      if (block1Ref.current) {
        observer.unobserve(block1Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock2Loaded(true);
          }, 250);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block2Ref.current) {
      observer.observe(block2Ref.current);
    }

    return () => {
      if (block2Ref.current) {
        observer.unobserve(block2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock3Loaded(true);
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block3Ref.current) {
      observer.observe(block3Ref.current);
    }

    return () => {
      if (block3Ref.current) {
        observer.unobserve(block3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock4Loaded(true);
          }, 350);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block4Ref.current) {
      observer.observe(block4Ref.current);
    }

    return () => {
      if (block4Ref.current) {
        observer.unobserve(block4Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock5Loaded(true);
          }, 400);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block5Ref.current) {
      observer.observe(block5Ref.current);
    }

    return () => {
      if (block5Ref.current) {
        observer.unobserve(block5Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock6Loaded(true);
          }, 450);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block6Ref.current) {
      observer.observe(block6Ref.current);
    }

    return () => {
      if (block6Ref.current) {
        observer.unobserve(block6Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock7Loaded(true);
          }, 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block7Ref.current) {
      observer.observe(block7Ref.current);
    }

    return () => {
      if (block7Ref.current) {
        observer.unobserve(block7Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock8Loaded(true);
          }, 550);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block8Ref.current) {
      observer.observe(block8Ref.current);
    }

    return () => {
      if (block8Ref.current) {
        observer.unobserve(block8Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock9Loaded(true);
          }, 600);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block9Ref.current) {
      observer.observe(block9Ref.current);
    }

    return () => {
      if (block9Ref.current) {
        observer.unobserve(block9Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock10Loaded(true);
          }, 650);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block10Ref.current) {
      observer.observe(block10Ref.current);
    }

    return () => {
      if (block10Ref.current) {
        observer.unobserve(block10Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div key={content.content} className={`py-10 md:py-20 w-full flex px-4`} style={{ background: `${content.info.typeBackground === 'Degradado' ? content.info.background : content.info.typeBackground === 'Color' ? content.info.background : ''}` }}>
        <div className="text-center m-auto max-w-[1280px] w-full flex flex-col gap-8">
          {
            content.info.titleForm === 'Logo principal' && storeData?.logo && storeData.logo !== ''
              ? <Link ref={refLogo} href='/' target='_blank' className={`${viewLogo ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500 w-fit m-auto`}><Image src={storeData.logo} alt={`Logo ${storeData.name}`} width={320} height={150} className='w-44 m-auto lg:w-52' /></Link>
              : content.info.titleForm === 'Logo blanco' && storeData?.logoWhite && storeData.logoWhite !== ''
                ? <Link ref={refLogo2} href='/' target='_blank' className={`${viewLogo2 ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500 w-fit m-auto`}><Image src={storeData.logoWhite} alt={`Logo ${storeData.name}`} width={320} height={150} className='w-44 m-auto lg:w-52' /></Link>
                : ''
          }
          <div className='flex gap-4 flex-col'>
            {
              content.info.title && content.info.title !== ''
                ? (
                  <div ref={titleRef} className={`${titleLoaded ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500`}>
                    {
                      index === 0
                        ? <H1 text={content.info.title} color={content.info.textColor} />
                        : <H2 text={content.info.title} color={content.info.textColor} />
                    }
                  </div>
                )
                : ''
            }
            {
              content.info.description && content.info.description !== ''
                ? (
                  <div ref={descriptionRef} className={`${descriptionLoaded ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500`}>
                    <P text={content.info.description} color={content.info.textColor} />
                  </div>
                )
                : ''
            }
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
              >
                {
                  content.info.faq?.map((faq, indn) => (
                    <SwiperSlide key={indn} className='w-96'><Image ref={indn === 0 ? block1Ref : indn === 1 ? block2Ref : indn === 2 ? block3Ref : indn === 3 ? block4Ref : indn === 4 ? block5Ref : indn === 5 ? block6Ref : indn === 6 ? block7Ref : indn === 7 ? block8Ref : indn === 8 ? block9Ref : indn === 9 ? block10Ref : null} className={`${indn === 0 ? block1Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 1 ? block2Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 2 ? block3Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 3 ? block4Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 4 ? block5Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 5 ? block6Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 6 ? block7Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 7 ? block8Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 8 ? block9Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : indn === 9 ? block10Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : ''} transition-all duration-500 mb-8`} src={faq.question!} alt={`Imagen ${indn + 1} de carrusel de imagenes`} width={500} height={500} style={{ boxShadow: style.design === 'Sombreado' ? `0px 3px 20px 3px ${style.borderColor}10` : '', borderRadius: style.form === 'Redondeadas' ? `${style.borderBlock}px` : '', border: style.design === 'Borde' ? `1px solid ${style.borderColor}` : '' }} /></SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
