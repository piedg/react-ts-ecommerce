import { ButtonCTA } from "../ButtonCTA/ButtonCTA"

type HeroBannerProps = {
    title?: string,
    subTitle?: string,
    backgroundImg?: string,
}

export function HeroBanner(props: HeroBannerProps) {
    return (
        <div className="flex flex-col gap-5 justify-center items-center text-amber-50">
            <div className="text-center">
                <h1 className="text-5xl">{props.title}</h1>
                <p>{props.subTitle}</p>
            </div>
            <ButtonCTA title="SHOP NOW" />
        </div>
    )
}