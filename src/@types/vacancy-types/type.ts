export interface VacancyFilters {
   tecName?: string;
   vacancyType?: string;
   level?: string;
   minSalary?: number;
   maxSalary?: number;
   location?: string;
}

export interface Company {
   id: number;
   name: string;
   city: string;
   state: string;
   address: string;
   foundedAt: string;
   description: string;
   createAt: string;
   updateAt: string;
   deleteAt: string | null;
}

export interface Advertiser {
   id: number;
   name: string;
   email: string;
   role: string;
   createAt: string;
   updateAt: string;
   deleteAt: string | null;
}

export interface Technology {
   id: number;
   tecName: string;
   creatorsName: string;
   createAt: string;
   updateAt: string;
   deleteAt: string | null;
}

export interface Vacancy {
   id: number;
   vacancyRole: string;
   wage: number;
   location: string;
   vacancyType: string;
   vacancyDescription: string;
   level: string;
   createAt: string;
   updateAt: string;
   deleteAt: string | null;
   company: Company;
   advertiser: Advertiser;
   technologies: Technology[];
}
