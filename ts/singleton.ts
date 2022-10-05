// Singleton | Factory Method

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private pass: string
  ) {}

  connect(): void {
    console.log(`Conectando ao host: ${this.host} com user: ${this.user}`);
  }

  static getDatabase(host: string, user: string, pass: string): Database {
    if (Database.database) {
      console.log("Retornando instância já criada");

      return Database.database;
    }

    console.log("Criando nova instância");

    return (Database.database = new Database(host, user, pass));
  }
}

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();

console.log(db1 === db2);
