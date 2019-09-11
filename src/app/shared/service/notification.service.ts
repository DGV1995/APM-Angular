import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    confirmNotification(): boolean {
        return confirm('Are you sure?');
    }
}