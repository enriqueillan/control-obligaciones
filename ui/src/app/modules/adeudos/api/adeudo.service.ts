import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdeudoDTO } from './adeudo.dto';

@Injectable({ providedIn: 'root' })
export class AdeudosService {
  private url = 'http://localhost:3000/adeudos';

  constructor(private http: HttpClient) {}

  create(dto: AdeudoDTO): Observable<AdeudoDTO> {
    return this.http.post<AdeudoDTO>(`${this.url}`, dto);
  }

  findAll(): Observable<AdeudoDTO[]> {
    return this.http.get<AdeudoDTO[]>(this.url);
  }

  // modificar, eliminar...
}
