export class OnboardingService {
    private onboardingTasks: any[];

    constructor() {
        this.onboardingTasks = [];
    }

    addTask(task: any) {
        this.onboardingTasks.push(task);
    }

    getTasks() {
        return this.onboardingTasks;
    }

    completeTask(taskId: number) {
        const taskIndex = this.onboardingTasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.onboardingTasks[taskIndex].completed = true;
        }
    }

    getPendingTasks() {
        return this.onboardingTasks.filter(task => !task.completed);
    }
}