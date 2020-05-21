import { CERTIFICATES } from '../certificatesData/certificates';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CertificateService {
  getCertificates() {
    return CERTIFICATES;
  }
}
