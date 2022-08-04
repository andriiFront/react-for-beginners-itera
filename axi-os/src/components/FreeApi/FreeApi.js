import { useFreeApi } from '../../customHooks/useFreeApi'

export const FreeApi = () => {
  const { errored, apis } = useFreeApi()

  return (
    errored
    ? "Smth went wrong.."
    : (
      <ul>
        {apis.map(({ API, Link }) => (
          <li key={Link}>
            {API}::{Link}
          </li>
        ))}
      </ul>
    )
  )
}
