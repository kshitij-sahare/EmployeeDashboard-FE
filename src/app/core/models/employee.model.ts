// src/app/models/employee.model.ts
export interface Project {
    id: number;
    name: string;
    description: string;
  }
  
  export interface Deliverable {
    id: number;
    name: string;
    description: string;
  }
  
  export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    projects: Project[];
    deliverables: Deliverable[];
  }
  