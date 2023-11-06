export class coffee {
    id: number;
    nombre: string;
    tipo: string;
    region: string;
    sabor: string;
    altura: number;
    imagen: string;

    public constructor(id: number, name: string, type: string, region: string, flavor: string,height: number,image: string ) {
        this.id =  id;
        this.nombre = name;
        this.tipo = type;
        this.region = region;
        this.sabor = flavor;
        this.altura = height;
        this.imagen = image;
      }

}
