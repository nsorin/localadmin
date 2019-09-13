const config = {
  baseURL: process.env.NODE_ENV === 'production' ? 'http://debian/api' : 'http://localhost',
  url: '/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export default config
