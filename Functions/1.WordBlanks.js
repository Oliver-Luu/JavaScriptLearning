function wordBlanks(noun, adjective, verb, adverb){
    let result = "";
    result += "The " + adjective + " " + noun + " " + verb + " " +adverb;
    return result;
}

console.log(wordBlanks("fox", "sly", "jumped", "quickly"));
console.log(wordBlanks("bird", "small", "flew", "rapidly"));