"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";
import AmericanPsyco from "@/books/AmericanPsyco.webp";
import JustStories from "@/books/JustSoStories.jpg";
import TheInverntor from "@/books/TheInverntor.jpg";
import TwilightLovers from "@/books/TwilightLovers.jpg";
import Woodsman from "@/books/Woodsman.jpg";
import castle from "@/images/—Pngtree—hohenzollern castle illustration_4543192.png";

import shareImage from "@/images/share.png";
import pointImage from "@/images/point.png";
import infoImage from "@/images/info.png";

export const LeftPanel = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row flex-2">
                <div className="flex flex-col justify-center space-y-4 p-4 flex-1 lg:items-start sm:items-center">
                    <div className="space-y-0.5 text-center lg:text-left">
                        <h1 className="text-4xl font-bold sm:text-3xl">Happy Reading,</h1>
                        <h1 className="text-4xl font-bold sm:text-3xl">Mrigank</h1>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 text-center lg:text-left">
                        Discover the enchanting world of reading, where every page turns into a journey of imagination, adventure, and endless possibilities. Dive in and explore!
                    </p>
                    <Button
                        className="bg-gray-800 rounded-3xl text-white py-2 px-10 text-sm w-full lg:w-1/2 sm:w-1/3"
                        variant="outline"
                    >
                        Start Reading
                        <Image className="mx-1" src={shareImage} alt="share" width={18} />
                    </Button>
                </div>
                <div className="hidden lg:flex flex-1">
                    <div className="flex flex-col font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                        <Image className="pb-1 mx-0" src={castle} alt="castle" width={370} />
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col mt-2">
                <div className="p-4">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="font-bold text-lg mb-2">Popular</h1>
                        <Image className="mx-6 pb-1" src={pointImage} alt="point" width={25} />
                    </div>

                    <div>
                        <Carousel>
                            <CarouselContent className="ml-2 md:ml-1">
                                <CarouselItem className="pl-1 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-start p-2">
                                    <div className="flex flex-col space-y-2 font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                                        <Image
                                            src={TheInverntor}
                                            alt="The Inventor"
                                            className="book-image shadow-[8px_8px_12px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[12px_12px_16px_rgba(0,0,0,0.4)]"
                                            width={100}
                                        />
                                        <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                                            Inventor
                                        </p>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="pl-1 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-start p-2">
                                    <div className="flex flex-col space-y-2 font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                                        <Image
                                            src={JustStories}
                                            alt="Just Stories"
                                            className="book-image shadow-[8px_8px_12px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[12px_12px_16px_rgba(0,0,0,0.4)]"
                                            width={100}
                                        />
                                        <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                                            Stories
                                        </p>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="pl-1 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-start p-2">
                                    <div className="flex flex-col space-y-2 font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                                        <Image
                                            src={TwilightLovers}
                                            alt="Twilight Lovers"
                                            className="book-image shadow-[8px_8px_12px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[12px_12px_16px_rgba(0,0,0,0.4)]"
                                            width={100}
                                        />
                                        <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                                            Twilight
                                        </p>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="pl-1 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-start p-2">
                                    <div className="flex flex-col space-y-2 font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                                        <Image
                                            src={Woodsman}
                                            alt="Woodsman"
                                            className="book-image shadow-[8px_8px_12px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[12px_12px_16px_rgba(0,0,0,0.4)]"
                                            width={100}
                                        />
                                        <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                                            Woodsman
                                        </p>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="pl-1 md:pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-start p-2">
                                    <div className="flex flex-col space-y-2 font-englebert text-left bg-transparent transition-transform transform hover:scale-105">
                                        <Image
                                            src={AmericanPsyco}
                                            alt="American Psycho"
                                            className="book-image shadow-[8px_8px_12px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[12px_12px_16px_rgba(0,0,0,0.4)]"
                                            width={100}
                                        />
                                        <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                                            American
                                        </p>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className="mt-8 flex flex-row items-center space-x-1">
                        <Image className="mx-1 mb-1/2" src={infoImage} alt="info" width={15} />
                        <p className="font-semibold">
                            Check out the latest collection of{" "}
                            <span className="text-amber-900 font-bold hover:text-amber-700">
                                Hogwarts Mysteries
                            </span>{" "}
                            A must-read for any fan of the series. Dive into the magic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
