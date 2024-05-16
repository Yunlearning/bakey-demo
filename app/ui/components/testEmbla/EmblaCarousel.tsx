"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import "./base.css";
import "./embla.css";
// 
import Image from 'next/image'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}
const imagesPost = [
    {
        title: "1",
        image_cover: "/bread/bread1.jpg",
        blur_cover: "/bread/bread1.jpg",
        tag: "1",
    },
    {
        title: "2",
        image_cover: "/bread/bread2.jpg",
        blur_cover: "/bread/bread2.jpg",
        tag: "2"
    },
    {
        title: "3",
        image_cover: "/bread/bread3.jpg",
        blur_cover: "/bread/bread3.jpg",
        tag: "3"
    },
    {
        title: "4",
        image_cover: "/bread/bread4.jpg",
        blur_cover: "/bread/bread4.jpg",
        tag: "4"
    },
    {
        title: "5",
        image_cover: "/bread/bread5.jpg",
        blur_cover: "/bread/bread5.jpg",
        tag: "5"
    },
]

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {imagesPost.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                {/* {index + 1} */}
                                <Image

                                    src={image.image_cover}
                                    blurDataURL={image.blur_cover}
                                    layout='fill'
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="cover image"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
