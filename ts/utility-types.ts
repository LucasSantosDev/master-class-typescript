// Tipo Record
const objeto1: Record<string, string | number> = {
  nome: "Lucas",
  sobrenome: "Santos",
  idade: 30,
};

console.log(objeto1);

//============================================================

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//============================================================

// Tipo Required
type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
  nome: "Lucas",
  sobrenome: "Santos",
  idade: 30,
};

console.log(objeto2);

//============================================================

// Tipo Partial
type PessoaPartial = Partial<PessoaRequired>;

const objeto3: PessoaPartial = {
  nome: "Lucas",
  sobrenome: "Santos",
};

console.log(objeto3);

//============================================================

// Tipo Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

const objeto4: PessoaReadonly = {
  nome: "Lucas",
  sobrenome: "Santos",
  idade: 30,
};

// objeto4.idade = 50; Not Work!!!
console.log(objeto4);

//============================================================

// Tipo Pick
type PessoaPick = Pick<PessoaRequired, "nome" | "idade">;

const objeto5: PessoaPick = {
  nome: "Lucas",
  idade: 30,
};

console.log(objeto5);

//============================================================

// Tipo Extract e Exclude

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type TipoExclude = Exclude<ABC, CDE>; // Exclui do Tipo ABC o que já existir no tipo CDE
type TipoExtract = Extract<ABC, CDE>; // C (O que tem nos dois)

//============================================================

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "as12-asd132sa-dasfasf12-asdsada",
  nome: "Lucas",
  idade: 26,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;

  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);

console.log(accountAPI);
