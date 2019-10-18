import auth0 from "auth0-js"
import navigate from "./navigate"

const windowGlobal = typeof window !== "undefined" && window

const isBrowser = windowGlobal

export const webAuth = isBrowser
  ? new auth0.WebAuth({
    domain: process.env.GATSBY_AUTH0_DOMAIN,
    clientID: process.env.GATSBY_AUTH0_CLIENTID,
    redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
    responseType: "token id_token",
    scope: `openid profile email ${process.env.GATSBY_MY_DOMAIN}`,
    audience: `https://${process.env.GATSBY_AUTH0_DOMAIN}/api/v2/`,
  })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }
  webAuth.authorize()
}

const setSession = (cb = () => {
}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("accessToken", tokens.accessToken)
    // navigate("/")
    cb()
  }
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  webAuth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  webAuth.parseHash(setSession())
}

export const getProfile = () => {
  //TODO: refresh token and user app meta
  // load temp meta data
  // const appMeta = JSON.parse(localStorage.getItem("appMeta"))
  const accessToken = localStorage.getItem("accessToken")
  // const localUserName = localStorage.getItem("userName")
  // if (localUserName) {
  //   user["userName"] = localUserName
  // }
  if (accessToken) {
    user["accessToken"] = accessToken
  }
  return user
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", "false")
  localStorage.setItem("accessToken", "false")
  const returnUrl = process.env.GATSBY_AUTH0_CALLBACK
    .slice(0, process.env.GATSBY_AUTH0_CALLBACK.lastIndexOf("callback") - 1)
  webAuth.logout({
    returnTo: returnUrl,
    client_id: process.env.GATSBY_AUTH0_CLIENTID,
  })
}

