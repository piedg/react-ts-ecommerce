import { ButtonCTA } from "../ButtonCTA/ButtonCTA"

type HeroBannerProps = {
    title?: string,
    subTitle?: string,
    backgroundImg?: string,
}

export function HeroBanner(props: HeroBannerProps) {
    return (
        <>
            <main>
                <h1>{props.title}</h1>
                <p>{props.subTitle}</p>
                <ButtonCTA title="SHOP NOW" />
            </main>
        </>
    )
}