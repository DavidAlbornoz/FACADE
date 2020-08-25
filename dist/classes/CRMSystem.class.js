export class CRMSystem {
    changeStatus(status) {
        if (status) {
            console.log('Modificando las tablas necesarias en el sistema');
            return true;
        }
        else {
            console.log('Sin modificaciones');
            return false;
        }
    }
}
