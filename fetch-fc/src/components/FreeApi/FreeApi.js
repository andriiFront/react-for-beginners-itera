import { useFreeApi } from "../../customHooks/useFreeApi"

export const FreeApi = () => {
  const { apis, errored } = useFreeApi()
  const { entries } = apis

  if (errored) {
    return "Smth went wrong"
  }

  if (typeof entries === "function") {
    return 'Please Wait...'
  }

  return (
    <ul>
      {entries.map(({ API, Link }) => (
        <li key={Link}>
          {API}::{Link}
        </li>
      ))}
    </ul>
  )
}
