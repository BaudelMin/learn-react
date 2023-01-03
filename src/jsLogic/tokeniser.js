import Tokenizer, { whitespace } from "tokenizer";

function Tokens(){
    let token = new Tokenizer()
    token.addRule(/\d+/, 'integer');
    token.addRule(/\d+.\d+/, 'float');
    token.ignore('whitespace')

    return token
}

export default Tokens