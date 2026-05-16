/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
    {
        name: "Thomas",
        male: true,
        age: 23,
        hobbies: ["cycling", "football", "pool"],
    },
    {
        name: "Susan",
        male: false,
        age: 26,
        hobbies: ["jogging", "travelling", "dancing"],
    },
    {
        name: "Monica",
        male: false,
        age: 21,
        hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
        name: "Avery",
        male: true,
        age: 28,
        hobbies: ["writing", "games", "memes"],
    },
    {
        name: "Phillip",
        male: true,
        age: 24,
        hobbies: ["boxing", "wrestling", "mma"],
    },
    {
        name: "Otto",
        male: true,
        age: 36,
        hobbies: ["movies", "cinema", "music"],
    },
    {
        name: "Annabelle",
        male: false,
        age: 30,
        hobbies: ["makeup", "fashion", "shopping"],
    },
    {
        name: "Cathy",
        male: false,
        age: 18,
        hobbies: ["design", "drawing", "css"],
    },
];
let combinedAge = 0;

// Skriv koden for oppgave 1 her

let averageAge = 0;

for (let i = 0; i < people.length; i++) {
    // 1. Hopp over Otto
    if (people[i].name === "Otto") {
        continue;
    }

    // 2. Flytt person til tilfeldig by
    const randomIndex = Math.floor(Math.random() * cities.length);
    // Ikke behov for + 1 når vi baserer oss på array.length, tror jeg. Og vi vil gjerne kunne få 0.

    people[i].city = cities[randomIndex];

    // 3. Gi person tittel tilsvarende kjønn
    people[i].gender = people[i].male ? "Mr." : "Ms.";

    // 4. Øk alderen med 2
    people[i].age += 2;

    // 5. Legg til "coding" i begynnelsen av hobbies
    people[i].hobbies.unshift("coding");

    // 6. Regne ut kombinert alder
    combinedAge += people[i].age;
}

console.log(people);

// Fortsettelse av oppgave 6. regne ut kombinert alder (uten Otto)
console.log("Kombinert alder:", combinedAge); // Flere argumenter til console.log kombineres med mellomrom i mellom seg

// 7. Regn ut gjennomsnittsalder (uten Otto)
const peopleWithoutOtto = people.length - 1; // kompenserer ikke for "nullindeksering" men at Otto ikke er med
averageAge = combinedAge / peopleWithoutOtto;

// Skriv ut gjennomsnittsalderen slik den er, men det ble veldig mange desimaler:
console.log("Gjennomsnittsalder:", averageAge);

// Reduser antall desimaler:
// console.log("Gjennomsnittsalder: %.2f", averageAge); // Begrenser til 2 desimaler med kryptisk google-magi (printf)
console.log("Gjennomsnittsalder:", averageAge.toFixed(2)); // Mye penere

// Alternativt, om vi ikke vil ha desimaler:
console.log("Gjennomsnittsalder:", Math.round(averageAge));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Skriv koden for oppgave 2 her

// 1. Funksjon som returnerer et array med tilfeldige tall mellom 1, og 6, hvor et argument bestemmer lengden på arrayet
function diceRoller(dices) {
    // Array.from kan ta en funksjon som brukes for å generere innholdet i en array.
    // Jeg spesifiserer .length attributten til det nye arrayet, for å beskrive hvor mange elementer jeg vil ha.

    return Array.from(
        { length: dices },
        () => Math.floor(Math.random() * 6) + 1,
    );

    /*
        Det første argumentet vi sender til Array.from, er vanligvis noe som lar seg oversette til en liste.
        Her sender vi den et objekt som har en .length attributt definert.
        Dette objektet blir utgangspunktet for generering av den nye listen.

        Argument 2 er en pil-funksjon med kode vi kjenner til fra forelesningene, og implisitt retur-verdi.

        Prettier extension legger til kommaet bak andre argument til Array.from() når jeg lagrer.
    */
}

console.log("Terningkast med 2 terninger:", diceRoller(2));
console.log("Terningkast med 4 terninger:", diceRoller(4));
console.log("Terningkast med 8 terninger:", diceRoller(8));

// 2. Funksjon som også lar brukeren spesifisere antal ansikter på terningen(e)
diceRoller = function (dices, faces) {
    // Jeg overskriver forrige funksjons "variabelnavn" med en ny "anonym" funksjon.
    // Dersom den deklareres som vanlig med "function diceRoller() {}" blir den hoistet,
    // og tidligere kode som forventer den tidligere deklarasjonen fungerer ikke.

    // Jeg løser denne oppgaven med en while loop for også å dekke bruken av løkker.
    // Ellers kan forrige fremgangsmåte brukes her også om vi erstatter *6 med *faces etter Math.random().
    const result = [];
    let randomFace = 0;
    while (dices) {
        randomFace = Math.floor(Math.random() * faces) + 1;
        result.push(randomFace);
        dices--;
    }

    return result;
};

console.log("Terningkast med 2 terninger og 6 sider:", diceRoller(2, 6));
console.log("Terningkast med 4 terninger og 12 sider:", diceRoller(4, 12));
console.log("Terningkast med 8 terninger og 24 sider:", diceRoller(8, 24));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

// Skriv koden for oppgave 3 her
const messyStringArray = [
    " thIS",
    "teXt  ",
    " nEeds ",
    "to",
    "BE",
    "cleANED   ",
    " Up",
];

function issFacilityServices(stringArray) {
    // Jeg lager en oppsamlings-liste fordi for..of ikke direkte gir tilgang til en index som kan brukes ved modifisering
    const result = [];

    for (let item of stringArray) {
        result.push(item.toLowerCase().trim());
    }
    return result.join(" ");

    /*
        Alternativt kan for...of brukes i kombinasjon med "destrukturering" på stringArray.entries():

            for (const [index, tekst] of stringArray.entries()) {}
        
        der .entries returnerer en "array" (iterator) med arrays som hver inneholder de to verdiene som
        destruktureres av "const [index, tekst]"
    */
}

console.log(
    "Renvasket liste med tekst:",
    issFacilityServices(messyStringArray),
);

/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

function doubleSwap(string, charA, charB) {
    // Skriv koden for oppgave 4 her

    // Dersom jeg først endrer alle charA til charB, så alle charB til charA, får jeg problemet at jeg reverserer tidligere endringer.
    // Dette blir et problem ved bruk av tilnærminger som opererer på hele strengen, f.ex String.replace().

    // En løkke kan gå igjennom hele strengen bokstav for bokstav og utføre endringer uten dette problemet:

    string = Array.from(string); // Strenger lar seg iterere over, men ikke endres, så jeg gjør strengen til et array.

    for (let i = 0; i < string.length; i++) {
        if (string[i] === charA) {
            string[i] = charB;
        } else if (string[i] === charB) {
            string[i] = charA;
        }
        // Bruken av else if sikrer at byttingen bare gjennomføres en gang per bokstav.
    }

    return string.join(""); // Gjør arrayet til streng igjen
}

console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwap("what is the point of this?", "o", "t"));

/*

// Alternativ løsning: regex

function doubleSwapRegEx(string, charA, charB) {
    // For å bruke variabler i en regex i JS må vi bygge den med RegExp()

    const regex = new RegExp(`(${charA}|${charB})`, "g");

    // (a|b) Matcher a eller b, parentesene grupperer/lagrer matchen, "g" utfører matchen mer enn 1 gang.
    // Nå kan string.replaceAll bruke regexen og gis en funksjon som avgjør hva matchen skal erstattes med.

    return string.replaceAll(regex, (match) =>
        match == charA ? charB : charA,
    );
}

console.log(doubleSwapRegEx("this is a string", "i", "s"));
console.log(doubleSwapRegEx("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwapRegEx("what is the point of this?", "o", "t"));


// Alternativ løsning: map

function doubleSwapMap(string, charA, charB) {
    // RegEx versjonen har den fordelen at substitusjons-funksjonen kun kjører dersom bokstavene matcher, mens
    // map må vurdere alle bokstavene, noe som krever en ekstra test, tror jeg.

    string = Array.from(string);

    string = string.map((chr) => {
        // Jeg konstruerer et anonymt array for å teste inkludering istedet for to likhets-tester
        // Bokstaven erstattes med sin motpart dersom den blir funnet i arrayet

        if ([charA, charB].includes(chr)) {
            chr = chr === charA ? charB : charA;
        }

        // Så returneres bokstaven enten den er endret eller urørt
        return chr;
    });

    return string.join("");
}

console.log(doubleSwapMap("this is a string", "i", "s"));
console.log(doubleSwapMap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwapMap("what is the point of this?", "o", "t"));

*/

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
    "Hello, how are you today?",
    "Diciamo ciao prima di andare!",
    "Salut, ça va bien?",
    "Kannst du mich hören? Hallo!",
    "Hva er regex?",
    "Nos saludamos con un alegre hola.",
    "Ona pomachała i powiedziała cześć z uśmiechem.",
    "Good afternoon gentlemen!",
];

// Skriv koden for oppgave 5 her
function helloChecker(greeting) {
    // Jeg lager et objekt for ord og språk for å sammenligne med senere
    const languages = {
        hello: "engelsk",
        ciao: "italiensk",
        salut: "fransk",
        hallo: "tysk",
        hola: "spansk",
        cześć: "polsk",
    };

    // Jeg rydder tekststrengen for symbolene ,.?! ved bruk av en character class [] som matcher en av alle bokstavene mellom.
    greeting = greeting.replaceAll(/[,.?!]/g, "");

    // Teksten blir nå til rene ord når den splittes på mellomrom.
    const words = greeting.split(" ");

    let lang;
    words.forEach((word) => {
        word = word.toLowerCase();

        // Jeg tester om objektet jeg lagde i begynnelsen har en nøkkel som samsvarer med ordet vi ser på, og finner i så fall språket
        if (Object.hasOwn(languages, word)) {
            lang = languages[word];
        }
    });

    return lang ? `HELLO oppdaget på ${lang}` : "Ingen HELLO oppdaget";
}

greetings.forEach((greeting) => console.log(helloChecker(greeting)));

/*
    Akkurat i vårt tilfelle kunne vi også skrive if (word in languages) {} i stedet for if (Object.hasOwn(languages, word)), noe som
    ville sett penere ut sånn rent estetisk sett, men er dårlig skikk tror jeg.

    Fordi languages-objektet ble definert via en object literal har det ingen uoversiktlig prototype-kjede imellom seg og Object.prototype,
    og det finnes ingen kollisjoner mellom Object.prototype sine nøkkler og verdiene vi ser etter (italiensk, tysk, etc). Så her går det
    tilfeldigvis bra å la "in" operatoren traversere hele prototype-kjeden. Men hasOwn er tryggere.
*/
