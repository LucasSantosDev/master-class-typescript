type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "O título",
  texto: "O texto",
  //   data: new Date(),
};

console.log(documento.data?.toDateString() ?? "Ixxi não existe valor");
