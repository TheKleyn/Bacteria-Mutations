//Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

const returnNewBase = (oldBase) => {
    const dnaBases = ['A', 'T', 'C', 'G']
    const newBase = dnaBases.filter(element => element !== oldBase)

    return newBase[Math.floor(Math.random() * 3)] 
  }

  console.log(returnNewBase('C'));
  

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let testArray = mockUpStrand();
let testArrayB = mockUpStrand();
console.log(`${testArray} the test array`);



  
  //tinCan.beep();


const pAequorFactory = (num, DNA) => {
  return {
    num: num,
    DNA: DNA,
    //baseArray wording is used here instead of DNA
    poop: 'shit',
    mutate () {
        let newDna = DNA;
        console.log(`${DNA} this is the baseArray`)
        let indexMut = Math.floor(Math.random() * 15);
        console.log(`${indexMut} this is the indexMut, index to replace`)
        let oldBase = newDna[indexMut];
        console.log(`${oldBase} this is the oldBase`)
        let newBase = returnNewBase(oldBase);  
        console.log(`${newBase} this is the newBase`)
        console.log(`${newDna} the newDna, actually same as old`);
        newDna.splice(indexMut, 1, newBase);
        //const finalDna = newDna.splice(2, 1, 'newBase');
        console.log(`${newDna} this is the final DNA result`)
        return newDna;
        },

        compareDNA (diffSpecimen) {
            let currentDna = DNA;
            let otherDNA = diffSpecimen.DNA;
            let similarCount = 0;
            let differenceCount = 0;
            console.log('what follows is otherDNA being called in compareDNA');
            console.log(otherDNA);
            console.log('following is current dna called currentDna')
            console.log(currentDna);
            for (x = 0; x < otherDNA.length; x++) {
                if (otherDNA[x] === currentDna[x]) {
                    similarCount += 1;
                } else {
                    differenceCount +=1;


                }
                
            }
            //console.log(differenceCount);
            console.log(`Bacterias numbered ${this.num} and ${diffSpecimen.num} are ${Math.floor((similarCount  / 15) * 100)} percent similar.`);
            },

        

        willLikelySurvive() {
            let countGC = 0;
            let currentDna = DNA;
            for (x=0; x < currentDna.length; x++) {
                if (currentDna[x] === 'G' || currentDna[x] === 'C') {
                    countGC += 1;
                }
            }
            console.log(countGC);
            if (countGC >= 9) {
                return true; 
            } else {
                return false;
            }
            },

        complementStrand() {
            let currentDna = DNA;
            let complementDna = [];
            for (x = 0; x < currentDna.length; x++) {
                switch (currentDna[x]) {
                    case ('A'):
                        complementDna.push('T');
                        break;
                    case ('T'):
                        complementDna.push('A');
                        break;
                    case ('C'):
                        complementDna.push('G');
                        break;
                    case ('G'):
                        complementDna.push('C');
                }
            }
            return complementDna;

            }
  }
}



const make30 = () => {
    let arrayOf30 = [];
    
    for (x=1; x < 31; x++) {
        let DNA = [];
        DNA = mockUpStrand();
        arrayOf30.push(pAequorFactory(x, DNA));


    }
    return arrayOf30;
}

const arrayOf30 = make30();

const mostRelated = (array) => {
    let originalArray = array;
    let compareArray =[];
    for (x=0; x < originalArray.length; x++) {
        for (i=0; i < originalArray.length; i++) {           
            compareArray.push(array[1].compareDNA(testBacteria));
            
        }
    }
    console.log(compareArray);
}

/* test factories
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep () {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true);

console.log(tinCan);

tinCan.beep();

const pAequorFactory = (num, baseArray) => {
    return {
      num: num,
      baseArray: baseArray,
      beep () {
        console.log('Beep Boop')
      }
    }
  }
  
  const hybrid = pAequorFactory(37878, testArray);
  
  console.log(hybrid);
*/

let artificialBact = ['A', 'T', 'A', 'A',
'A', 'T', 'G', 'C', 'A', 'G', 'C', 'C',
'G', 'T', 'C'];
let testBacteria = pAequorFactory(13, testArray);
let secondBacteria = pAequorFactory(244, testArrayB);
console.log('what follows is the test bacteria')
console.log(testBacteria);
console.log('following is mutate')
console.log(testBacteria.mutate());
console.log('what follows is the second bacteria');
console.log(secondBacteria);
console.log(testBacteria.compareDNA(secondBacteria))
console.log(testBacteria.willLikelySurvive());
console.log(make30());
console.log('following is complement strand');
console.log(testBacteria.complementStrand());
console.log(mostRelated(arrayOf30));


//months.splice(4, 1, 'May');
// replaces 1 element at index 4