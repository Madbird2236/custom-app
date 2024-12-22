export class TimeSheetController {
    constructor(private timeSheetService: TimeSheetService) {}

    logHours(req, res) {
        const { employeeId, hours, date } = req.body;
        this.timeSheetService.logHours(employeeId, hours, date)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json({ error: error.message }));
    }

    generateReport(req, res) {
        const { employeeId, startDate, endDate } = req.query;
        this.timeSheetService.generateReport(employeeId, startDate, endDate)
            .then(report => res.status(200).json(report))
            .catch(error => res.status(400).json({ error: error.message }));
    }
}