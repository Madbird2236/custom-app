export class ProjectManagerService {
    private projects: any[] = [];

    public createProject(project: any): void {
        this.projects.push(project);
    }

    public getProjects(): any[] {
        return this.projects;
    }

    public updateProject(projectId: string, updatedProject: any): void {
        const index = this.projects.findIndex(project => project.id === projectId);
        if (index !== -1) {
            this.projects[index] = { ...this.projects[index], ...updatedProject };
        }
    }

    public deleteProject(projectId: string): void {
        this.projects = this.projects.filter(project => project.id !== projectId);
    }

    public allocateResources(projectId: string, resources: any[]): void {
        const project = this.projects.find(project => project.id === projectId);
        if (project) {
            project.resources = resources;
        }
    }
}