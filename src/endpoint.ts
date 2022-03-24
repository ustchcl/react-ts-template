import Optional from "base/optional"

let token: Optional<string> = Optional.None()

export function setToken(_token: string | null) {
  if (_token === null) {
    token = Optional.None()
  } else {
    token = Optional.Some(_token)
  }
}