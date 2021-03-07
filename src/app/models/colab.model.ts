export interface Colab {
    id?: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    alcaldia: string | number;
    ubicacion: string;
    responsable: string | number;
    estado?: string | number;
    fecha?: Date;
}