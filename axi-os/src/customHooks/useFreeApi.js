import Axios from 'axios'
import { useEffect, useState } from 'react'

const FREE_API_URL = "https://api.publicapis.org/entries?auth=null&cors=no&category=animals"

const axios = Axios.create();

axios.interceptors.response.use(response => {
  console.log(`${response.request.responseURL}:${response.status}`)
  
  return response
})

export const useFreeApi = () => {
  const [ data, setApi ] = useState({ errored: false, apis: [] })

  useEffect(() => {
    const abort = new AbortController()

    async function updateApi() {
      try {
        const { data } = await axios.get(FREE_API_URL, {
          signal: abort.signal,
          timeout: 1500
        })
        const { entries } = data
        setApi({ ...data, apis: entries })
      } catch(e) {
        if(e.message === 'canceled'){
          setApi({ ...data })
        } else {
          setApi({ ...data, errored: true })
        }
      }
    }

    updateApi()

    return () => abort.abort()
  }, [])

  return data
}
