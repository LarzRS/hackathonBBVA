import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucService {
  url: string = "https://apis.bbvabancomer.com/locations_sbx/v1/branches"
  token = "jwt eyJ6aXAiOiJERUYiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.qA3fzrenCNHLI6ZkjtNmKcgHynVtsJ4cXCmmULfNJVrQyFKGjhkRaFTqUnh5ZLypjUoo3zqgjwaLgN9RAu1MsEJjkqWM8N0UDuJLAKosSBdhWilKfID-2jemTcGNclusX-Nb4dZgrEfA_U-wrMkWoqkW_EDs_iNkp69mNTLZtBh7h5BH4qcQJYwRr-PbcNJNpm8rSmTxM75JSww_e-gqglnrAN6m_N84mT8T1wcNJqwclMAn0Y20CTWLDeHtw8jMq-yijIyk_vci6HdOn1SgJTgB5iWnWJ50Nr-iomRDyMGAoQviaKI8h0icz8q5B6RQyp7RjjEXVpzSmxab2A1ZFQ.gR615R1N6R-J5_C7.hKLRm9x7unxCrChJVibLjDpUSC-mzko-HEF5qXg10c606iuZg6_qbWYxRQJP6kEudcir38FZAn8CBOKpCVh37Kc2MLbpzFd_moQrEPF2JDvWfBt019f6skBvt5FXDDZQZBdKekDdvPQbrA1DSp8UXEtzXkHycMoXTwxda2rMClj43RZONtp1aON6aGRL7auX36p52H_aiZgZgrxFA9blmfYbiN0bD4oS3Mk.z34_Err7jP63u88t6XEZlA";
  constructor(
    private http: HttpClient
  ) { }

  obtenerSucursal() {
    let headers = new HttpHeaders();
    headers.set('Authorization', this.token);
    headers.set('Accept', 'application/json');
    console.log("Branches");
    return this.http.get<any>(this.url, { headers: headers });
  }
}
