export class InventoryService {
    private inventory: { [key: string]: { quantity: number; threshold: number } } = {};

    constructor() {
        // Initialize inventory with some default items if necessary
    }

    addItem(itemName: string, quantity: number, threshold: number): void {
        this.inventory[itemName] = { quantity, threshold };
    }

    updateItemQuantity(itemName: string, quantity: number): void {
        if (this.inventory[itemName]) {
            this.inventory[itemName].quantity += quantity;
        } else {
            throw new Error("Item not found in inventory.");
        }
    }

    checkLowStock(): string[] {
        return Object.keys(this.inventory).filter(item => 
            this.inventory[item].quantity < this.inventory[item].threshold
        );
    }

    generateInventoryReport(): { item: string; quantity: number }[] {
        return Object.keys(this.inventory).map(item => ({
            item,
            quantity: this.inventory[item].quantity
        }));
    }
}