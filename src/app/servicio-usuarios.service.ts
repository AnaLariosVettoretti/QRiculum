import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const API_BASE = 'https://qriculum-back.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor(
    private http: HttpClient
  ) {
    this.checkHeader();
   }

  //Variable mostrar header
  showHeader$ = new BehaviorSubject(false);

  getAll() {
    return this.http.get(`${API_BASE}/usuarios`);
  }

  getOne(id: string) {
    return this.http.get(`${API_BASE}/usuarios/${id}`);
  }

  validate(id: string, contrasenia: string) {
    return this.http.get(`${API_BASE}/usuarios/user?id=${id}&hash=${contrasenia}`);
  }

  create(usuario: any) {
    return this.http.post(`${API_BASE}/usuarios`, usuario);
  }

  update(id: string, usuario: any) {
    return this.http.put(`${API_BASE}/usuarios/update/${id}`, usuario);
  }

  updateCV(id: string, usuario: any) {
    return this.http.put(`${API_BASE}/usuarios/updateCV/${id}`, usuario);
  }

  delete(id: string) {
    return this.http.delete(`${API_BASE}/usuarios/${id}`);
  }

  checkHeader(){
    
    if (sessionStorage.getItem('usuario')!= null) {
      this.showHeader$.next(true);     
    }else{
      this.showHeader$.next(false);
    }
  
  }

}
