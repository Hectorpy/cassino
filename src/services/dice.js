export default axios => resource => ({
  getStats() {
    return axios.get(`${resource}/stats`)
  }
})