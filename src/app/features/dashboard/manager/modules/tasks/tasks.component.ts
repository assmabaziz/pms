import { Component } from '@angular/core';
import { Itasks } from './interfaces/itasks';
import { TasksService } from './services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewTaskComponent } from './components/view-task/view-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  dataSource!: Itasks[];
  displayedColumns: string[] = [
    'title',
    'status',
    'userName',
    'project',
    'creationDate',
    'description',
    'actions',
  ];
  actions: any[] = [
    {
      name: 'View',
      icon: 'visibility',
    },
    {
      name: 'Edit',
      icon: 'edit',
    },
    {
      name: 'Delete',
      icon: 'delete',
    },
  ];

  constructor(private _TasksService: TasksService, public dialog: MatDialog) {}

  pageSize: number = 5;
  pageNumber: number = 1;
  numRows!: number;
  moduleName: string = 'tasks';

  myparms = {
    pageNumber: this.pageNumber,
    pageSize: this.pageSize,
  };

  ngOnInit(): void {
    this._TasksService.getAllTasks(this.myparms).subscribe({
      next: (res) => {
        // console.log(res);
        this.dataSource = res.data;
        this.numRows = res.totalNumberOfRecords;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewTask(task: Itasks) {
    const dialogRef = this.dialog.open(ViewTaskComponent, {
      data: task,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
