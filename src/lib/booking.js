'use strict'
const Request = require('./request')

class Booking {
  constructor ({ hostUrl, apiKey, authToken }) {
    this.request = new Request({ hostUrl, apiKey, authToken })
  }

  async search (params = {}) {
    try {
      const { data } = await this.request.get('/v1/search', { params })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async availabilities (params = {}) {
    try {
      const { data } = await this.request.get('/v2/availabilities', { params })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async centerAvailabilities (params = {}) {
    if (!params.center) throw new Error('parameter center is required')

    try {
      const { data } = await this.request.get(
        `/v2/centers/${params.center}/availabilities`,
        { params }
      )
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async centerInfo (params = {}) {
    if (!params.center) throw new Error('parameter center is required')

    try {
      const { data } = await this.request.get(`/v1/centers/${params.center}`, {
        params
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async centerFeedbacks (params = {}) {
    if (!params.center) throw new Error('parameter center is required')

    try {
      const { data } = await this.request.get(
        `/v1/centers/${params.center}/feedbacks`,
        { params }
      )
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Booking
