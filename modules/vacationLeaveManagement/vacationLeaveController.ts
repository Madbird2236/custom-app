export class VacationLeaveController {
    constructor(private vacationLeaveService: VacationLeaveService) {}

    async requestLeave(req, res) {
        try {
            const leaveData = req.body;
            const result = await this.vacationLeaveService.requestLeave(leaveData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async approveLeave(req, res) {
        try {
            const { leaveId } = req.params;
            const result = await this.vacationLeaveService.approveLeave(leaveId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async rejectLeave(req, res) {
        try {
            const { leaveId } = req.params;
            const result = await this.vacationLeaveService.rejectLeave(leaveId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getLeaveRequests(req, res) {
        try {
            const result = await this.vacationLeaveService.getLeaveRequests();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}