export interface MoviesStateInterface {
    peliculas: Array<Pelicula>;
}

export interface Pelicula {
    nombre: string;
    descripcion: string;
    ano: number;
    duracion: string;
    caratula: string;
    id_categoria: number;
}