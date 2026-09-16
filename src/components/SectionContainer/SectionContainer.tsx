import type { ReactNode } from "react"

type SectionContainerProps = {
    children: ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
    return (
        <div className="m-20">
            {children}
        </div>
    )
}