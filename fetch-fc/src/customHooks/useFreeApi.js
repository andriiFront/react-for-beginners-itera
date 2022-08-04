import { useEffect, useState } from 'react'

const FREE_API_URL = "https://api.publicapis.org/entries?auth=null&cors=no&category=animals"

export const useFreeApi = () => {
  const [ data, setApi ] = useState({ errored: false, apis: [] })

  useEffect(() => {
    async function updateApi() {
      try {
        const rawData = await fetch(FREE_API_URL)
        const entries = await rawData.json()
        setApi({ errored: false, apis: entries })
      } catch(e) {
        setApi({ errored: true, apis: [] })
      }
    }

    updateApi()
  }, [])

  return data
}
