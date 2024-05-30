import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const createMovieRouter = ({ movieModel }) => {
  // Con esta definicion exportamos el router, sin necesidad
  // de al final del archivo escribir 'export default router'
  const moviesRouter = Router()
  const movieController = new MovieController({ movieModel })

  moviesRouter.get('/', movieController.getAll)
  moviesRouter.post('/', movieController.create)
  moviesRouter.get('/:id', movieController.getById)
  moviesRouter.patch('/:id', movieController.update)
  moviesRouter.delete('/:id', movieController.delete)

  return moviesRouter
}

/** The router is in fact a middleware,
 * that can be used for defining "related routes" in a single place,
 * which is typically placed in its own module. */
