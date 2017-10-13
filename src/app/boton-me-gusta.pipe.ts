import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'botonMeGusta'
})
export class BotonMeGustaPipe implements PipeTransform {

  transform(likes: any, userId: any): any {

    if(!likes){
      return 'Sin likes'
    }

    if(likes.length == 0){
      return 'Sin likes';
    }else{
      if(this.yaMeGusta(likes, userId)){
        return `Te gusta`;
      }else{
        return `${likes.length} likes`;
      }
    }
  }


  yaMeGusta(likes, userId): boolean{
    
    let yaGusta = false;
    likes.forEach((valor)=>{
        if(valor == userId){
          yaGusta = true;
        }
    });
    return yaGusta;
  }

}
