import { Client } from "./Client.class.js";
import { EmailSystem } from './EmailSystem.class.js';
import { CRMSystem } from './CRMSystem.class.js';
import { BillingSystem } from './BillingSystem.class.js';
import { BankSystem } from "./BankSystem.class.js";

export class Facade{
    public virtualPay(client: Client, total: number): string[]{
        let bankSystem: BankSystem = new BankSystem();
        let billingSystem: BillingSystem = new BillingSystem();
        let crmSystem: CRMSystem = new CRMSystem();
        let emailSystem: EmailSystem = new EmailSystem();
        let results: string[] = [];
        
        results.push(bankSystem.pay(total, client.name));
        results.push(billingSystem.applyPayment(client.totalFounds, total));
        let status = crmSystem.changeStatus(billingSystem.haveFounds(client.totalFounds, total));
        results.push(emailSystem.sendEmail(client.name, client.email, status));

        return results;
    }
}