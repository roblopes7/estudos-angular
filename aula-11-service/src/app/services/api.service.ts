import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Novo
  public name = signal('Lalaland');

  //Antigo
  public name$ = new BehaviorSubject('Lalaland $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setTaskList = signal<ITask[] | null>(null);
  get getTasktList() { return this.#setTaskList.asReadonly();}

  public httpListTask$(): Observable<Array<ITask>> {
    this.#setTaskList.set(null);
    return this.#http.get<Array<ITask>>(this.#url())
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskList.set(res)),
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() { return this.#setTaskId.asReadonly();}

  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() { return this.#setTaskIdError.asReadonly();}

  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskId.set(null);
    this.#setTaskIdError.set(null);

    return this.#http.get<ITask>(`${this.#url()}${id}`)
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError( (error:HttpErrorResponse) => {
        this.#setTaskIdError.set(error.error.message);
          return throwError(() => error);
      })
    );
  }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() { return this.#setTaskCreateError.asReadonly();}

  public httpTaskCreate$(title: string): Observable<ITask> {
    this.#setTaskCreateError.set(null);
    return this.#http.post<ITask>(`${this.#url()}`, {title})
    .pipe(
      shareReplay(),
      catchError( (error:HttpErrorResponse) => {
        this.#setTaskCreateError.set(error.error.message);
          return throwError(() => error);
      })
    );
  }

  #setTaskPatchError = signal<ITask | null>(null);
  get getTaskPatchError() { return this.#setTaskPatchError.asReadonly();}

  public httpTaskPatch$(id: string, title: string): Observable<ITask> {
    this.#setTaskPatchError.set(null);
    return this.#http.patch<ITask>(`${this.#url()}${id}`, {title})
    .pipe(
      shareReplay(),
      catchError( (error:HttpErrorResponse) => {
        this.#setTaskPatchError.set(error.error.message);
          return throwError(() => error);
      })
    );
  }

  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http.delete<void>(`${this.#url()}${id}`, {})
      .pipe(
        shareReplay()
      );
  }

}
