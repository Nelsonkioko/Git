// export class Repos {
//     message:string;
//     documentation_url:string;
// }
export class Repos {

    constructor(public description:string, public name:string,public forks:number,public watches:number,public language:string,
      public git_url:number) {
  
    } 
  }