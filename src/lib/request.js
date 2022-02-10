'use strict'

const Axios = require('axios')

function Request ({ hostUrl, apiKey, authToken } = {}) {
  this.hostUrl = hostUrl
  this.apiKey = apiKey
  this.authToken = authToken

  if (!this.hostUrl || !this.apiKey || !this.authToken) {
    throw new Error('HOST_URL, API_KEY or AUTH_TOKEN is not found')
  }

  return Axios.create({
    baseURL: this.hostUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.authToken,
      'X-ANYBUDDY-API-KEY': this.apiKey
    }
  })
}

module.exports = Request
