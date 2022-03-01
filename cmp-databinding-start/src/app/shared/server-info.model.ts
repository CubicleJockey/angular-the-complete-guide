export class ServerInfo{
    constructor(public Name: string
               ,public Content: string
               ,public Type: string){
    }

    public IsServer(): boolean{
        return this.Type.toLowerCase() === 'server';
    }

    public IsBlueprint(): boolean{
        return this.Type.toLocaleLowerCase() === 'blueprint';
    }
}