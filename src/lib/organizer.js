'use strict'
const Request = require('./request')

class Organizer {
  constructor ({ hostUrl, apiKey, authToken }) {
    this.request = new Request({ hostUrl, apiKey, authToken })
  }

  async getById (id) {
    try {
      const { data } = await this.request.get(`/v1/users/${id}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async getByEmail (params = {}) {
    try {
      const { data } = await this.request.get('/v1/users', {
        params
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async add (body) {
    try {
      const { headers } = await this.request.post('/v1/users', {
        ...body
      })
      return { token: headers.authorization }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Organizer
