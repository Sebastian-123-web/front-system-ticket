import { dataUsers } from "../data/dataUsuarios"

export const Autenticacion = async (mailUser) => {

    const dataUser = dataUsers.find(u => u.email == mailUser)
    if(!dataUser){return false}
    return true //se debe devolver un objeto con los datos del usuario
    
}