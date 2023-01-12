import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from './article';
import { FileHandle } from './file-handle.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(article : Article){

    const articleImage : any =article.image;
    const articleName : any =article.name;

    const articleImageToFileHandle : FileHandle[]=[];


      const imageFileData = articleImage;
      const imageBlob = this.dataURItoBlob(articleImage);

      console.log(imageBlob);

      const imageFile = new File([imageBlob],articleName);

      const finalFileHandle : FileHandle = {
        file : imageFile,
        url :  this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      const urlofimage=finalFileHandle.url;
      console.log(finalFileHandle.url);


      articleImageToFileHandle.push(finalFileHandle);

      article.image=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile));

      //console.log(article.id);
      //console.log(article.name);
      //console.log(article.price);
      //console.log(article.image);

      return article;



    

  }

  public dataURItoBlob(picBytes: any){

    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i=0;i< byteString.length;i++){

      int8Array[i]=byteString.charCodeAt(i);

    }

    const blob = new Blob([int8Array]);
    console.log("converting bytes to blob");
    return blob;



  }

  public createBytes(article : Article){


    const reader = new FileReader();
      reader.onload = (e: any) => {
        const bytes = e.target.result.split('base64,')[1];
        console.log("bytes : ",bytes);
        article.image=bytes;
      }

      console.log(article.name);
      console.log(article.price);
      console.log(article.image);

      return article;



    

  }
}
