export interface Vacancy {
   id: number;
   vacancyRole: string;
   wage: number;
   location: string;
   vacancyType: string;
   vacancyDescription: string;
   level: string;
   companyId: number;
   advertiserId: number;
   createAt: string;
   updateAt: string;
   deleteAt: string | null;
   technologies: [
      {
         id: number;
         tecName: string;
         creatorsName: string;
         createAt: string;
         updateAt: string;
         deleteAt: string | null;
      }
   ];
   company: {
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
   };
   advertiser: {
      id: number;
      name: string;
      email: string;
      role: string;
      createAt: string;
      updateAt: string;
      deleteAt: string | null;
   };
}

export interface VacancyFilters {
   tecName?: string;
   vacancyType?: string;
   level?: string;
   minSalary?: number;
   maxSalary?: number;
   location?: string;
}
