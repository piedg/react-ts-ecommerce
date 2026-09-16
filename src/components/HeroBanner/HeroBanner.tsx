import { ButtonCTA } from "../ButtonCTA/ButtonCTA"

type HeroBannerProps = {
    title?: string,
    subTitle?: string,
    backgroundImg?: string,
}

export function HeroBanner({ title, subTitle }: HeroBannerProps) {
    return (
        <div className="relative flex flex-col gap-5 justify-center items-center text-amber-50 h-screen">
            <img className="absolute inset-0 w-full h-full object-cover -z-10" src="https://dummyjson.com/image/1920x1080" alt="Hero Banner image" />
            <div className="text-center">
                <h1 className="sm:text-2xl lg:text-5xl w-200 whitespace-pre-line">{title}</h1>
                <p className="whitespace-pre-line">{subTitle}</p>
            </div>
            <ButtonCTA title="SHOP NOW" />
        </div>
    )
}