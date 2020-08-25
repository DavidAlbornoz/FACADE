export class EmailSystem{
    public sendEmail(name: string, email:string, status:boolean){
        if(status){
            return `Enviada verificacion de pago a ${name} al correo ${email}`;
        }
        else{
            return 'No se envio el correo';
        }
    }
}