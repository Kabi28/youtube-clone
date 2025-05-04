export const API_KEY = 'AIzaSyBmG67mZrlnpz8HtsazPRc8IDg_rXvTgnw';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}

export function truncateTitle(title, maxLength=40) {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  }