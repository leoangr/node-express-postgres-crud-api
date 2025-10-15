import express from 'express';
import * as clientsController from '../controllers/clientController.js';

const router = express.Router();

router.get('/clients', clientsController.getClients);
router.post('/clients', clientsController.createClient);
router.put('/clients/:id', clientsController.updateClient);
router.delete('/clients/:id', clientsController.deleteClient);
router.get('/clients/search', clientsController.searchClients);

export default router;