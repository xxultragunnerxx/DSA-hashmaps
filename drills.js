const Hashmap = require('./hashmap')

MAX_LOAD_RATIO = 0.5
SIZE_RATIO = 3




function main() {
    let lor = new Hashmap()
    lor.set("Hobbit", "Bilbo")
    lor.set("Hobbit", "Frodo")
    lor.set("Wizard", "Gandolf")
    lor.set("Human", "Aragon")
    lor.set("Elf", "Legolas")
    lor.set("Maiar", "The Necromancer")
    lor.set("Maiar", "Sauron")
    lor.set("RingBearer", "Gollum")
    lor.set("LadyOfLight", "Galadriel")
    lor.set("HalfElven", "Arwen")
    lor.set("Ent", "Treebeard")
    console.log(lor)
    console.log(lor.get("Maiar"))
    console.log(lor.get("Hobbit"))
    // 8 bc of doubles and initial capacity didnt change
    // what does this do makes 2 Hashmaps map1.get(str1) will have 20
    //map2.get(str2) will have 10
    const WhatDoesThisDo = function(){
        let str1 = 'Hello World.';
        let str2 = 'Hello World.';
        let map1 = new Hashmap();
        map1.set(str1,10);
        map1.set(str2,20);
        let map2 = new Hashmap();
        let str3 = str1;
        let str4 = str2;
        map2.set(str3,20);
        map2.set(str4,10);
    
        console.log(map1.get(str1));
        console.log(map2.get(str3));
    }
        console.log(WhatDoesThisDo())

        function duplicate(str) {
            let dup = new Hashmap();
            for (let i = 0; i < str.length; i++) {
                dup.set(str[i], str[i]) 
            }  
                console.log(dup)
                let newStr = '';
                dup._hashTable.forEach(letter => {
                    newStr += letter.value;
                }) 
                console.log(newStr)    
        }
        console.log(duplicate('google all that you can think of'))

        function palindrome(str) {
            const pMap = new Map();
            console.log(pMap)
            let odd = 0 
            for(let i = 0; i < str.length; i++) {
                if(pMap.get(str[i]) === undefined) {
                    console.log(str[i])
                    pMap.set(str[i], 1)
                    console.log(pMap)
                } else {
                    let char = pMap.get(str[i])
                    pMap.set(str[i], char+=1)
                }
            }
            for (let i = 0; i < pMap.size; i++) {
                if(pMap.get(str[i]) % 2 !== 0){
                    odd++
                    console.log('odd', odd)
                }
                if(odd > 1) {
                    return false
                }
            }
            return true
        }
        console.log(palindrome('acecarr'))


}
main()
