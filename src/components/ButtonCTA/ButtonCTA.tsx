import styles from "./ButtonCTA.module.css"

type ButtonCTAProps = {
    title?: string,
    url?: string
}

export function ButtonCTA({ title, url }: ButtonCTAProps) {
    return (
        <a className={`${styles.primaryButton} flex max-w-fit p-3`} onClick={() => console.log("Test")} href={url}>
            {title}
        </a>
    )
}