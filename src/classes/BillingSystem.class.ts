export class BillingSystem{
    public applyPayment(totalFounds: number, total: number): string{
        if(this.haveFounds(totalFounds, total)){
            return 'Se realizo el pago correctamente';
        }
        else{
            return 'No habia fondos suficientes';
        }
    }

    public haveFounds(totalFounds: number, total: number): boolean{
        if(total <= totalFounds){
            return true;
        } 
        else{
            return false;
        }
    }
}