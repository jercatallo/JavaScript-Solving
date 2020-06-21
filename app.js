function encode(string) {
  var encoded = "";
  for(let i =0; i <string.length;i++){
    switch(string[i]){
      case 'a' || 'A':
        encoded += '1';
        break;
        case 'e' || 'E':
          encoded += '2';
          break;
          case 'i' || 'I':
            encoded += '3';
            break;
            case 'o' || 'O':
              encoded += '4';
              break;
              case 'u' || 'U':
                encoded += '5';
                break;
                default:
                  encoded += string[i];
    }
  }
  return encoded;
  

}

function decode(string) {
  var decoded = "";
  for(let i =0; i <string.length ;i++){
    switch(string[i]){
      case '1':
        decoded += 'a';
        break;
        case '2':
          decoded += 'e';
          break;
          case '3':
            decoded += 'i';
            break;
            case '4':
              decoded += 'o';
              break;
              case '5':
                decoded += 'u';
                break;
                default:
                  decoded += string[i];
    }
  }
 return decoded;
}





encode("hello");
decode("h2ll4")