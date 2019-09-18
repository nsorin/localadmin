const config = {
  baseURL: process.env.NODE_ENV === 'production' ? 'http://debian/api' : 'http://localhost:8080',
  url: '/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export default config
