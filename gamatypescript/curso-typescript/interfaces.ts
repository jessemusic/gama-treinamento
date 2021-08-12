interface Usuario {
    name: string;
    email: string;
    address?: string;
}
 function getUser(): Usuario{
     return{
        name:'jesse',
        email: 'jesse@Gmail.com'
     }
 }
 function setUser(usuario: Usuario){
     //.....
 }