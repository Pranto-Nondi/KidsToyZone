import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `KidzToyZone | ${title}`
    }, [title])
}
export default useTitle