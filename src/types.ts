export type Site = {
    id: number;
    url: string;
    certid: number;
    expirydate: string;
    issuedate: string;
    issuer: string;
    subject: string;
  };

  export type Cert = {
    id: number;
    expirydate: string;
    issuedate: string;
    issuer: string;
    subject: string;
  };