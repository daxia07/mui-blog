import { navigate as gNav } from "gatsby"

const navigate = typeof window !== "undefined" ? gNav : () => {
}

export default navigate