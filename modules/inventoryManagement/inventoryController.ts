export class InventoryController {
    constructor(private inventoryService: InventoryService) {}

    async getInventory(req, res) {
        try {
            const inventory = await this.inventoryService.getAllItems();
            res.status(200).json(inventory);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving inventory', error });
        }
    }

    async addItem(req, res) {
        try {
            const newItem = await this.inventoryService.addItem(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(400).json({ message: 'Error adding item', error });
        }
    }

    async updateItem(req, res) {
        try {
            const updatedItem = await this.inventoryService.updateItem(req.params.id, req.body);
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error updating item', error });
        }
    }

    async deleteItem(req, res) {
        try {
            await this.inventoryService.deleteItem(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: 'Error deleting item', error });
        }
    }

    async checkLowStock(req, res) {
        try {
            const lowStockItems = await this.inventoryService.getLowStockItems();
            res.status(200).json(lowStockItems);
        } catch (error) {
            res.status(500).json({ message: 'Error checking low stock', error });
        }
    }
}