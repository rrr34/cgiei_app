export interface Pilares {
    id?: number;
    sub?: string;
    nombre: string;
    alcaldia: string | number;
    ubicacion: string;
    responsable: string | number;
    estado?: string | number;
    fecha?: Date;
}