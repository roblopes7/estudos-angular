import { ApiService } from './../../services/api.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  // public getTask = signal<null | Array<{
  //   id: string,
  //   title: string
  // }>>(null);

  //public getTask$ = toSignal(this.#apiService.httpListTask$());

  public getTaskList = this.#apiService.getTasktList;

  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskPatchError = this.#apiService.getTaskPatchError;

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$('nUbOAoWRK546A4OVyJoXewqewqe').subscribe();

    // console.log(this.#apiService.name());

    // this.#apiService.name$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete!'),
    //})

    // this.getTask$.subscribe({
    //   next: (next) => {
    //     console.log(next)
    //     this.getTask.set(next);
    //   },
    //   error: (error) => console.log(error),
    //   complete: () => console.log('completed!'),
    // });
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe({
        next: (next) => console.log(next),
        error: (error) => console.log(error),
      });
  }

  public httpTaskPatch(id: string, title: string) {
    return this.#apiService
      .httpTaskPatch$(id, title)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe({
        next: (next) => console.log(next),
        error: (error) => console.log(error),
      });
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe({
        next: (next) => console.log(next),
        error: (error) => console.log(error),
      });
  }

}
