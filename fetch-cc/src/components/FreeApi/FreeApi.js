import { PureComponent } from "react"

const FREE_API_URL = "https://api.publicapis.org/entries?auth=null&cors=no&category=animals"

export class FreeApi extends PureComponent {
  state = { errored: false, apis: [] }

  async componentDidMount() {
    try {
      const rawData = await fetch(FREE_API_URL)
      const entries = await rawData.json()
      this.setState({ ...this.state, apis: entries })
    } catch(e) {
      this.setState({ errored: true, apis: [] })
    }
  }

  render() {
    const { apis, errored } = this.state
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
}
