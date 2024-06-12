import { Component, OnInit } from '@angular/core';
import { ClassScheduleService } from '../service/class-schedule.service';
import { ClassSchedule } from './classSchedule.model';
@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
export class ClassScheduleComponent implements OnInit {
  schedules: ClassSchedule[] = [];
  schedule: ClassSchedule = {
    id: 0,
    course: '',
    faculty: '',
    dayOfWeek: '',
    startTime: '',
    endTime: '',
    classroom: ''
  };
  editMode = false;
  editScheduleId: number | undefined;

  constructor(public scheduleService: ClassScheduleService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getClassSchedules().subscribe(schedules => this.schedules = schedules);
  }

  saveSchedule(): void {
    if (this.editMode && this.editScheduleId) {
      this.scheduleService.updateClassSchedule(this.editScheduleId, this.schedule).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    } else {
      this.scheduleService.addClassSchedule(this.schedule).subscribe(() => {
        this.loadSchedules();
        this.resetForm();
      });
    }
  }

  editSchedule(schedule: ClassSchedule): void {
    this.schedule = { ...schedule };
    this.editMode = true;
    this.editScheduleId = schedule.id;
  }

  deleteSchedule(id: number): void {
    this.scheduleService.deleteClassSchedule(id).subscribe(() => {
      this.loadSchedules();
    });
  }

  resetForm(): void {
    this.schedule = {
      id: 0,
      course: '',
      faculty: '',
      dayOfWeek: '',
      startTime: '',
      endTime: '',
      classroom: ''
    };
    this.editMode = false;
    this.editScheduleId = undefined;
  }
}
  

