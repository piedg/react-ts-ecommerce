import { useRouteError } from "react-router-dom"

export function ErrorPage() {
    const error = useRouteError() as Response
    return <div>Errore: {error.status} {error.statusText}</div>

}