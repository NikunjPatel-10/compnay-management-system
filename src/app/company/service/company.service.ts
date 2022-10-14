import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public baseurl: string
  public company: Company[];
  constructor(private http: HttpClient) {
    this.company = []
    this.baseurl = "http://localhost:3000/"
  }

  public getDatabyId(id: number): Observable<Company> {
    const url = this.baseurl + "companylist/" + id;
    return this.http.get<Company>(url);
  }

  public getData(): Observable<Company[]> {
    const url = this.baseurl + "companylist"
    return this.http.get<Company[]>(url);
  };
  public postData(company: Company): Observable<Company> {
    const url = this.baseurl + "companylist"
    return this.http.post<Company>(url, company);
  };

  public deleteData(id: number): Observable<Company> {
    const url = this.baseurl + "companylist/" + id;
    return this.http.delete<Company>(url);
  };
  public updateData(company: Company, id: number): Observable<Company> {
    const url = this.baseurl + "companylist/" + id;
    return this.http.put(url, company)
  }


}
