export class ProjectManagerController {
    constructor(private projectManagerService: ProjectManagerService) {}

    async createProject(req, res) {
        try {
            const projectData = req.body;
            const newProject = await this.projectManagerService.createProject(projectData);
            res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProjects(req, res) {
        try {
            const projects = await this.projectManagerService.getProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProject(req, res) {
        try {
            const projectId = req.params.id;
            const updatedData = req.body;
            const updatedProject = await this.projectManagerService.updateProject(projectId, updatedData);
            res.status(200).json(updatedProject);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProject(req, res) {
        try {
            const projectId = req.params.id;
            await this.projectManagerService.deleteProject(projectId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}