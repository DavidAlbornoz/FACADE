export class CRMSystem{
    public changeStatus(status: boolean): boolean{
        if(status){
            console.log('Modificando las tablas necesarias en el sistema');
            return true;
        }
        else{
            console.log('Sin modificaciones');
            return false;
        }
    }
}