//This file is only enabled in production. In development, next error overlay will show instead.

'use client'

import { useDictionary } from '../_i18n/LocaleProvider'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useDictionary()
  return (
    <>
      <h2>{t.error.title}</h2>
      <button onClick={() => reset()}>{t.error.retry}</button>
    </>
  )
}