import Parser from "parser";
import Tokens from "./tokeniser";

function parseNumber(input_str){
    Parser.call(this, Tokens())
    this.defaultHandler(this.number)
}

parseNumber.prototype.number 