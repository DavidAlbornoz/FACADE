export class EmailSystem {
    sendEmail(name, email, status) {
        if (status) {
            return `Enviada verificacion de pago a ${name} al correo ${email}`;
        }
        else {
            return 'No se envio el correo';
        }
    }
}
