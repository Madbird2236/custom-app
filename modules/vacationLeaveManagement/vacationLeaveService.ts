export class VacationLeaveService {
    private leaveRequests: any[] = [];
    
    public requestLeave(employeeId: string, startDate: Date, endDate: Date): string {
        const leaveRequest = {
            employeeId,
            startDate,
            endDate,
            status: 'Pending'
        };
        this.leaveRequests.push(leaveRequest);
        return 'Leave request submitted successfully.';
    }

    public approveLeave(requestId: number): string {
        if (this.leaveRequests[requestId]) {
            this.leaveRequests[requestId].status = 'Approved';
            return 'Leave request approved.';
        }
        return 'Leave request not found.';
    }

    public rejectLeave(requestId: number): string {
        if (this.leaveRequests[requestId]) {
            this.leaveRequests[requestId].status = 'Rejected';
            return 'Leave request rejected.';
        }
        return 'Leave request not found.';
    }

    public getLeaveRequests(): any[] {
        return this.leaveRequests;
    }

    public checkAvailability(employeeId: string, date: Date): boolean {
        return !this.leaveRequests.some(request => 
            request.employeeId === employeeId && 
            request.startDate <= date && 
            request.endDate >= date && 
            request.status === 'Approved'
        );
    }
}