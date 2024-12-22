export class TimeSheetService {
    private timeSheets: any[] = [];

    public logHours(employeeId: string, hours: number, date: Date): void {
        const entry = { employeeId, hours, date };
        this.timeSheets.push(entry);
    }

    public getReport(employeeId: string): any[] {
        return this.timeSheets.filter(entry => entry.employeeId === employeeId);
    }

    public calculatePayroll(employeeId: string, hourlyRate: number): number {
        const report = this.getReport(employeeId);
        const totalHours = report.reduce((total, entry) => total + entry.hours, 0);
        return totalHours * hourlyRate;
    }
}