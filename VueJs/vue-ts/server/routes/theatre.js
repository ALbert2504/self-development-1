import express from 'express';

const theatreRouter = express.Router();

import { getTheatres, createTheatre, deleteTheatre } from '../controllers/theatre.js';

theatreRouter.get('/get', getTheatres);
theatreRouter.post('/create', createTheatre);
theatreRouter.delete('/delete/:id', deleteTheatre);

export default theatreRouter;