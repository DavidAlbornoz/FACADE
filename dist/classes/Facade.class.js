import { EmailSystem } from './EmailSystem.class.js';
import { CRMSystem } from './CRMSystem.class.js';
import { BillingSystem } from './BillingSystem.class.js';
import { BankSystem } from "./BankSystem.class.js";
export class Facade {
    virtualPay(client, total) {
        let bankSystem = new BankSystem();
        let billingSystem = new BillingSystem();
        let crmSystem = new CRMSystem();
        let emailSystem = new EmailSystem();
        let results = [];
        results.push(bankSystem.pay(total, client.name));
        results.push(billingSystem.applyPayment(client.totalFounds, total));
        let status = crmSystem.changeStatus(billingSystem.haveFounds(client.totalFounds, total));
        results.push(emailSystem.sendEmail(client.name, client.email, status));
        return results;
    }
}
