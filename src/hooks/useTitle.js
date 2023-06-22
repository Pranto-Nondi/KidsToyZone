import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Wonder Toys | ${title}`
    }, [title])
}
export default useTitle