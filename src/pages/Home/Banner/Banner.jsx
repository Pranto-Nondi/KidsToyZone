import { useEffect, useRef } from "react";

const Banner = () => {
    const buttons = (
        <>
            <button className="btn btn-secondary mr-2">Explore Now</button>
            <button className="btn btn-outline btn-info">Playtime Fun</button>
        </>
    );

    const carouselRef = useRef(null);
    const slideButtonsRef = useRef([]);

    useEffect(() => {
        const carousel = carouselRef.current;
        const slides = carousel.querySelectorAll('.carousel-item');
        const slideButtons = slideButtonsRef.current;

        let currentIndex = 0;
        let timer;

        const slideInterval = () => {
            timer = setTimeout(() => {
                slides[currentIndex].classList.remove('active');
                slideButtons[currentIndex].classList.remove('show');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add('active');
                slideButtons[currentIndex].classList.add('show');
                slideInterval();
            }, 5000);
        };

        slideInterval();

        const resetTimer = () => {
            clearTimeout(timer);
            slideInterval();
        };

        slideButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                slides[currentIndex].classList.remove('active');
                slideButtons[currentIndex].classList.remove('show');
                currentIndex = index;
                slides[currentIndex].classList.add('active');
                slideButtons[currentIndex].classList.add('show');
                resetTimer();
            });
        });

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="carousel w-full h-[600px]" ref={carouselRef}>
                <div id="slide1" className="carousel-item relative w-full active">
                    <img src="https://images.unsplash.com/photo-1596066190600-3af9aadaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" className="w-full" />
                    <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="space-y-8 text-center">
                            <h1 className="text-6xl text-white font-semibold">Explore the Wonderful World of Kids' Toys</h1>
                            <p className="text-2xl text-white font-semibold">Discover a wide range of toys that ignite imagination and bring joy to children</p>
                            <div className="flex justify-center">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle mr-4">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1560859251-d563a49c5e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="space-y-8 text-center">
                            <h1 className="text-6xl text-white font-semibold">
                                Explore the Wonderful World of Kids' Toys</h1>
                            <p className="text-2xl text-white font-semibold">Discover a wide range of toys that ignite imagination and bring joy to children</p>
                            <div className="flex justify-center">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide3" className="btn btn-circle mr-4">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1509781827353-fb95c262fc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80" className="w-full" />
                    <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="space-y-8 text-center">
                            <h1 className="text-6xl text-white font-semibold">
                                Explore the Wonderful World of Kids' Toys</h1>
                            <p className="text-2xl text-white font-semibold">Discover a wide range of toys that ignite imagination and bring joy to children</p>
                            <div className="flex justify-center">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide4" className="btn btn-circle mr-4">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1505692069463-edfaea445fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="space-y-8 text-center">
                            <h1 className="text-6xl text-white font-semibold">
                                Explore the Wonderful World of Kids' Toys</h1>
                            <p className="text-2xl text-white font-semibold">Discover a wide range of toys that ignite imagination and bring joy to children</p>
                            <div className="flex justify-center">
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide1" className="btn btn-circle mr-4">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
