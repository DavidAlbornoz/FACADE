export class BankSystem{
    public pay(total: number, name: string): string{
        return `Se recibio ${total} de ${name}`;
    }
}