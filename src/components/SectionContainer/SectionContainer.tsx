import type { ReactNode } from "react"

type SectionContainerProps = {
    children: ReactNode,
    isFlexRow?: boolean
    isFlexColumn?: boolean
}

export function SectionContainer({ children, isFlexRow, isFlexColumn }: SectionContainerProps) {

    const flexRow = isFlexRow ? "flex flex-row" : ""
    const flexColumn = isFlexColumn ? "flex flex-col" : ""

    return (
        <div className={`m-5 md:m-20 ${flexRow} ${flexColumn}`}>
            {children}
        </div>
    )
}