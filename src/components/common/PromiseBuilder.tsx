import Optional from 'base/optional';
import React, { useState, useEffect } from 'react'

export function PromiseBuilder<a>({promise, builder}: {
  promise: Promise<a>;
  builder: Fn<a, JSX.Element>
}): JSX.Element {
  const [data, setData] = useState(Optional.None<a>())
  useEffect(() => {
    (async () => {
      const d = await promise
      setData(d as any)
    })()
  })

  return data.bind(
    builder,
    () => <></>
  ) 
}