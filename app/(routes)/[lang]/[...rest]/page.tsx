import { notFound } from 'next/navigation'

// Any unknown path lands here (the middleware prefixes it with its language),
// so a 404 renders inside the [lang] root layout.
const CatchAll = () => notFound()

export default CatchAll
