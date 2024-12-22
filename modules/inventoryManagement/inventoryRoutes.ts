import { Router } from 'express';
import { InventoryController } from './inventoryController';

const router = Router();
const inventoryController = new InventoryController();

// Define routes for inventory management
router.get('/inventory', inventoryController.getAllItems);
router.post('/inventory', inventoryController.addItem);
router.put('/inventory/:id', inventoryController.updateItem);
router.delete('/inventory/:id', inventoryController.deleteItem);
router.get('/inventory/report', inventoryController.generateReport);

export default router;