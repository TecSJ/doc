type DocumentoAttributes = {
    idDocumento: number;
  };
  
  type DeleteDocumentoData = Partial<DocumentoAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Documento } from 'models/types/Documentos';
  
  const deleteDocumento = async (where: DeleteDocumentoData) => {
    return await deleteQuery(Documento)(where);
  };
  
  export { deleteDocumento };