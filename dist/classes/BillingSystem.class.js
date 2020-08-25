export class BillingSystem {
    applyPayment(totalFounds, total) {
        if (this.haveFounds(totalFounds, total)) {
            return 'Se realizo el pago correctamente';
        }
        else {
            return 'No habia fondos suficientes';
        }
    }
    haveFounds(totalFounds, total) {
        if (total <= totalFounds) {
            return true;
        }
        else {
            return false;
        }
    }
}
