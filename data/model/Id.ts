export default class Id {
    static gerar() {
        return `${Id.Parte()}-${Id.Parte()}-${Id.Parte()}}`
    }

    static Parte() {
        return Math.random().toString(36).substring(2, 8);
    }
}
console.log(Id.gerar());