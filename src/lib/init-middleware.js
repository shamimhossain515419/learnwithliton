// lib/init-middleware.js
import Cors from 'cors';

let cors;

export default function initMiddleware(middleware) {
  // Initialize the middleware
  if (!cors) {
    cors = middleware();
  }
  return cors;
}
