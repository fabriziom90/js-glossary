// ----------------- DEFINIZIONE DELLE FUNZIONI ---------------
function showDefinition(definitions, dom_element) {
    definitions.forEach((elem) => {

        // creo l'elemento colonna da inserire nel dom
        let col = document.createElement('div');

        // aggiungo le classi all'elemento colonna
        col.classList.add('col-12', 'col-md-6', 'col-lg-4');

        // creo l'elemento card
        let card = document.createElement('card');
        // gli aggiungo le classi
        card.classList.add('card', 'p-3', 'rounded-0', 'bg-bluebool', 'text-white', 'm-2', 'min-height-300');

        // destrutturazione
        let { name, description } = elem

        // inserisco come html il titolo ed il testo della voce del glossario
        card.innerHTML += `<h3 class="text-center">${name}</h3><p>${description}</p>`;

        // appendo alla colonna l'elemento card creato
        col.append(card);

        //appendo alla riga di git, le colonne create 
        dom_element.append(col);

    })

}

// funzione che setta un timeout per il loader
function fakeLoader(row) {
    // rimuovo la classe d-none all'elemento loader
    document.getElementById('loader').classList.remove('d-none');

    // recupero tutte le righe con la classe definitions
    let definitions = document.querySelectorAll('.definitions');

    // le ciclo per mettere la classe d-none
    definitions.forEach((elem) => {
        elem.classList.add('d-none')
    });


    setTimeout(function () {
        // dopo due secondi e mezzo, aggiungo la classe d-none all'elemento loader e rimuovo la classe d-none alla riga passata
        document.getElementById('loader').classList.add('d-none');
        row.classList.remove('d-none');

        // scrollo la pagina in fino all'elemento con id da mostrare una volta tolto il loader
        location.href = `#${row.id}`
    }, 2500);
}

// ---------------DEFINIZIONE DELLE VARIABILI-------------------
// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di git
const git_row = document.getElementById('git-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di html
const html_row = document.getElementById('html-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di css
const css_row = document.getElementById('css-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di js
const js_row = document.getElementById('js-row');

// recupero il pulsante che serve per tornare in alto alla pagina
const btn = document.querySelector('.to-top-button');

// array con le definizioni. L'array è un array di oggetti, ogni oggetto ha tre proprietà: 
// 1 - type: ambito delle definizioni
// 2 - dom_elem: elemento del dom in cui andare ad iniettare l'html delle definizioni
// 3 - defs: array con le definizioni. Ogni definizione è un oggetto composta dal nome della definizione e dalla s
let definitions = [
    {
        type: "git",
        defs: [
            {
                name: "GIT",
                description: "Sistema di versionamento che ci permette di tenere traccia di tutte le modifiche che avvengono all'interno di un progetto, permettendo di avere più versioni dello stesso."
            },
            {
                name: "REPOSITORY",
                description: "Insieme dei file e delle cartelle e della loro storia che compongono il progetto che vogliamo tracciare con git"
            },
            {
                name: "STAGING",
                description: "Inserire i file che abbiamo modificato in un'area temporanea"
            },
            {
                name: "COMMIT",
                description: "Creare uno stato recuperabile del progetto."
            },
            {
                name: "PUSH",
                description: "Operazione di upload dello / degli stato / i del progetto creato / i attraverso i commit."
            },
            {
                name: "REVERT",
                description: "Tornare ad uno stato precedente del progetto, senza cancellare la storia passata."
            },
            {
                name: "RESET",
                description: "Ritorno ad un commit precedente alterando la storia passata.Se si fa l'hard reset si cancella la storia, se si fa il reset semplice le modifiche dei commit successivi a quello in cui si vuole tornare vengono messe in area di staging."
            }
        ]
    },
    {
        type: "html",
        defs: [

            {
                name: "HTML",
                description: "L'html è un linguaggio di Markup (Hypertext Markup Language) che si occupa della visualizzazione delle pagine e non contiene logica. NON è un linguaggio di programmazione."
            },
            {
                name: "DOM",
                description: "Document Object Model forma di rappresentazione informatica dei documenti strutturati come modello orientato agli oggetti o ad albero. Si può definire anche come la struttura in cui è organizzata una pagina web."
            },
            {
                name: "BLOCK LEVEL TAGS",
                description: "Tag che occupano tutta la riga della pagina costringendo l'elemento successivo a posizionarsi in una nuova linea."
            },
            {
                name: "INLINE TAGS",
                description: "Tag che occupano solo lo spazio del loro contenuto. Gli elementi successivi, SE INLINE, si posizioneranno di fianco."
            },
            {
                name: "SELF CLOSING TAG",
                description: "Tag che non prevedono contenuto, non hanno un tag di chiusura;"
            },
            {
                name: "ENTITIES",
                description: "Codice HTML per rappresentare caratteri speciali, come ad esempio lettere accentate, simboli di valuta e altri simboli generici"
            },
            {
                name: "PATH ASSOLUTI",
                description: "Partono dall'inizio, tipicamente C o comunque la posizione iniziale dell'hard disk per arrivare dove è l'immagine."
            },
            {
                name: "PATH RELATIVI",
                description: "Partono da dove ci troviamo per andare dove si trova l'immagine."
            }
        ]
    },
    {
        type: "css",
        defs: [

            {
                name: "CSS",
                description: "CSS (Cascade StyleSheet) Sono degli insiemi di regole che servono per personalizzare le nostre pagine."
            },
            {
                name: "SELETTORE",
                description: "E' un modo per indicare un elemento dell'html a cui applciare delle regole di stile."
            },
            {
                name: "ID",
                description: "Identificatore univoco da utilizzare all'interno di un documento una volta sola. A questo id possiamo applicare delle regole di stile"
            },
            {
                name: "CLASSE",
                description: "E' un selettore che definiamo una volta sola all'interno del file css, ma possiamo utilizzare tutte le volte che vogliamo all'interno dell'html"
            },
            {
                name: "PADDING",
                description: "Il padding è la distanza tra il contenuto ed il bordo interno del suo contenitore"
            },
            {
                name: "MARGIN",
                description: "Il margine è la distanza tra i bordi esterni di due elementi adiacenti"
            },
            {
                name: "FLEXBOX",
                description: "E' una modalità di layout con la quale possiamo posizionare degli elementi all'interno di un contenitore o più in generale della pagina in maniera flessibile in modo semplice."
            },
            {
                name: "CONTENITORE",
                description: "Elemento di layout che si occupa di determinare dove deve essere posizionato il contenuto della pagina."
            },
            {
                name: "RIGA",
                description: "Elemento di layout che si occupa del posizionamento delle colonne al suo interno. Deve essere sempre contenuta in un contenitore.O al limite in una colonna."
            },
            {
                name: "COLONNA",
                description: "La colonna è l'elemento di layout risultante dalla suddivisione verticale dello spazio interno della riga.E' l'elemento in cui poi andremo a mettere il contenuto. Deve essere contenuta esclusivamente in una riga."
            },
            {
                name: "MODULO",
                description: "E' il risultato della suddivisione orizzontale dello spazio della colonna. Sono le righe tra l'altro, in cui andremo a mettere il contenuto testuale e le immagini, pulsanti, link."
            },
            {
                name: "GUTTER",
                description: "Spazio che separa due colonne in un layout. Può essere impostato tramite margini sulle colonne oppure attraverso la proprietà gap"
            },
            {
                name: "ADATTABILITA'",
                description: "L'adattabilità è la capacità di una pagina web di adattare le dimensioni delle componenti / parti che la compongono alle diverse tipologie di schermo.Ciò comporta un restringimento o più in generale ridimensionamento delle stesse senza intervenire sulla loro posizione."
            },
            {
                name: "RESPONSIVITA'",
                description: "La responsività è la capacità di una pagina web di adattare il proprio contenuto in dimensioni ed posizione ai diversi device."
            },
            {
                name: "MEDIA QUERY",
                description: "Una media query è un insieme di regole che definiscono il comportamento delle componenti(tutte o alcune) di una pagina quando raggiungono determinate risoluzioni.Tali risoluzioni vengono anche chiamate breakpoint."
            },
            {
                name: "MOBILE FIRST",
                description: "E' una modalità di progettazione delle pagine web in cui si da priorità allo sviluppo per i dispositivi mobile(smartphone).In questa modalità tutto ciò che si trova fuori da media query viene applicato subito(va da risoluzione 0px a quella della prima media query).Sviluppo le pagine partendo dalle risoluzioni mobile e andando a realizzare le media query che determinano il comportamento delle componenti a risoluzioni più grandi fino a quella desktop maggiore.Utilizziamo in questo caso < strong > min - width</strong > nei breakpoint."
            },
            {
                name: "DESKTOP FIRST",
                description: "E' una modalità di progettazione delle pagine web in cui si da priorità allo sviluppo desktop.In questa modalità tutto ciò che si trova fuori da media query viene applicato alla risoluzione più grande, quindi oltre al breakpoint più grande impostato nelle media query.Sviluppo le pagine partendo dalle risoluzioni desktop per poi andare a determinare il comportamento delle componenti a risoluzioni più basse, fino ad arrivare a quelle smartphone.Utilizziamo in questo caso <strong> max-width</strong> nei breakpoint."
            },
            {
                name: "FRAMEWORK",
                description: "Un framework un insieme di funzionalità di diverso tipo già pronte all'uso che possono essere utilizzate per realizzare una pagina / sito / applicazione in maniera più rapida e semplice.E' una sorta di intelaiatura su cui realizzare la nostra applicazione / sito.Una volta cominciato a lavorare su questo non si esce."
            },
            {
                name: "LIBRERIA",
                description: "Una libreria è un insieme di funzionalità, che non è detto che siano collegate tra di loro e che vado ad utilizzare solo al bisogno e solo quella che necessito al momento."
            }
        ]
    },
    {
        type: "javascript",
        defs: [

            {
                name: "LINGUAGGIO DI PROGRAMMAZIONE",
                description: "Un linguaggio di programmazione è un linguaggio formale (cioè costituito da simboli e che rispetta delle regole sintattiche, grammaticali e semantiche) in cui scriviamo istruzioni di input(entrata) per restituire qualcosa in output(uscita)"
            },
            {
                name: "LINGUAGGIO COMPILATO",
                description: "Un linguaggio compilato è una tipologia di codice che deve essere passata prima da un programma, detto appunto compilatore, che traduce il codice scritto in un linguaggio comprensibile per la macchina e pertanto ne genererà un file eseguibile per il sistema operativo."
            },
            {
                name: "LINGUAGGIO INTERPRETATI",
                description: "Un linguaggio interpretato è un linguaggio che viene direttamente eseguito da un programma chiamato interprete, che ne esegue appunto le istruzioni."
            },
            {
                name: "ALGORITMO",
                description: "L'algoritmo è una sequenza di istruzioni da eseguire in un ordine logico, volta a risolvere un problema."
            },
            {
                name: "DIAGRAMMA DI FLUSSO",
                description: "Un diagramma di flusso è una rappresentazione grafica delle operazioni che si devono eseguire per eseguire un certo algoritmo.Il diagramma di flusso è un linguaggio formale che deve rispettare determinate regole."
            },
            {
                name: "CLASSE",
                description: "E' un'astrazione informatica di un concetto / elemento reale avente determinate proprietà ed operazioni."
            },
            {
                name: "OGGETTO / ISTANZA",
                description: "L'oggeto o istanza è un elemento che nasce da una classe e pertanto avrà le stesse proprietà ed operazioni date dalla classe.A questi possiamo assegnare dei valori."
            },
            {
                name: "OPERATORE DI ASSEGNAZIONE <strong>=</strong>",
                description: "L'operatore di assegnazione è quell'operatore che mi permette di assegnare dei valori."
            },
            {
                name: "VARIABILE",
                description: "Una variabile è un contenitore in cui viene salvata una, ed una sola, informazione durante l'esecuzione del programma. Tale informazione rimarrà nella variabile finchè il programma rimane in esecuzione."
            },
            {
                name: "DICHIARAZIONE DI UNA VARIABILE",
                description: "La dichiarazione di una variabile avviene quando all'interno del nostro codice scrivamo una parola chiave tra <strong>const</strong>, <strong>let</strong> e <strong>var</strong> seguita dal nome che abbiamo scelto per la variabile <br> <br>"
            },
            {
                name: "INIZIALIZZAZIONE DI UNA VARIABILE",
                description: "L'inizializzazione di una variabile è l'assegnazione del primo valore della variabile.Molto spesso si fa assieme alla dichiarazione della variabile.In caso di variabile <strong>const</strong> queste due operazioni devono essere fatte assieme"
            },
            {
                name: "HOISTING",
                description: "L'hoisting è la capacità di Javascript di leggere le variabile presenti all'interno del documento e consentirne l'uso anche prima della dichiarazione <br>"
            },
            {
                name: "STRINGA",
                description: "Il tipo di dato Stringa è un insieme di caratteri.Possono essere inclusi caratteri minuscoli, maiuscoli caratteri speciali e numeri."
            },
            {
                name: "CONCATENAZIONE TRA STRINGHE",
                description: "La concatenazione tra stringhe è un'operazione tra stringhe che prevede l'unione di due o più stringhe in un'unica stringa."
            },
            {
                name: "SCOPE DI UNA VARIABILE",
                description: "Contesto nel quale si può richiamare una determinata variabile."
            },
            {
                name: "ITERAZIONE(o ciclata)",
                description: "L'iterazione (o ciclata) è il singolo insieme di operazioni che vengono svolte durante l'esecuzione di un ciclo for. Terminato questo insieme di operazioni, il for fa eseguire questo insieme di operazione nuovamente da capo, facendo così partire una nuova iterazione."
            },
            {
                name: "ARRAY(Vettore)",
                description: "Un array è una struttura dati che permette di contenere più valori contemporaneamente al suo interno in posizione l'uno adiacente all'altro."
            },
            {
                name: "INDICE DI UN ARRAY",
                description: "L'indice di un array è il valore che rappresenta la posizione di un elemento all'interno dell'array. Gli indici partono sempre da 0 ed arrivano al valore N - 1 (dove N è la lunghezza - numero di elementi lo compongono - dell'array)"
            },
            {
                name: "FUNZIONI",
                description: "Le funzioni sono porzioni di codice che svolgono una precisa attività/compito all'interno del programma. Servono per evitare ripetizione del codice, migliorare la manutenibilità dello stesso ed isolare una certa porzione di codice al fine di migliorare la leggibilità dello stesso."
            },
            {
                name: "DICHIARAZIONE/DEFINIZIONE DI UNA FUNZIONE",
                description: "Scrivo la funzione e quello che fa nel codice, in un certo senso avvertendo il programma che esiste questa funzione."
            },
            {
                name: "CHIAMATA DI UNA FUNZIONE",
                description: "Eseguo la funzione scrivendo all'interno del codice, dove deve essere eseguita, il nome della stessa seguito dalle parentesi ed eventuali parametri."
            },
            {
                name: "PARAMETRO DI UNA FUNZIONE",
                description: "Il parametro di una funzione è una variabile il cui valore è dato all'invocazione/chiamata della funzione. Il parametro prende il nome di generale o formale quando siamo nella definizione/dichiarazione della funzione. Prende invece il nome di attuale o effettivo quando siamo nell'invocazione/chiamata di una funzione."
            },
            {
                name: "FUNZIONI ANONIME",
                description: " Funzioni che non hanno un nome. Pertanto, non possono essere richiamate all'interno del codice dove vogliamo ma devono essere eseguite nell'ambito di un particolare evento. Essendo legate a degli eventi, queste funzioni, sono tendenzialmente uniche. Vengono chiamate anche Funzioni di callback. Non avendo un nome, non possono stare al di fuori di eventi."
            },
            {
                name: "THIS",
                description: "parola chiave che sta ad indicare il contesto in cui ci troviamo. E' un oggetto. Se clicchiamo un pulsante, il contesto è quello del pulsante. Infatti facendo il console.log di this all'interno della funzione di callback dell'evento click vedremo il pulsante che abbiamo cliccato."
            },
            {
                name: "PROGRAMMAZIONE SINCRONA",
                description: "La programmazione sincrona prevede l'esecuzione di tutti i passaggi uno dopo l'altro in maniera consecutiva"
            },
            {
                name: "PROGRAMMAZIONE ASINCRONA",
                description: "Un tipo programmazione in cui parte del codice prosegue parallelamente a quello principale."
            },
            {
                name: "PROPRIETA' DI UN OGGETT",
                description: " La proprietà di un oggetto è una coppia chiave valore in cui la chiave rappresenta il nome della proprietà, il valore invece il suo valore."
            },
            {
                name: "DESTRUTTURAZIONE",
                description: "Prendere tutte o solo alcune delle proprietà e dei loro valori di un oggetto per inserirle in delle variabili. Serve quando dobbiamo mostrare o utilizzare i valori di tutte o alcune delle proprietà dell'oggetto (senza cancellarlo) in maniera semplice ed immediata"
            }
        ]
    }
];

const rows = document.querySelectorAll('.definitions');

// -------------------LOGICA DI VISUALIZZAZIONE------------------------
//chiamo la funzione per mostrare le definizioni a video
definitions.forEach((elem, index) => {
    showDefinition(elem.defs, rows[index]);
})
// ---------------FINE LOGICA DI VISUALIZZAZIONE--------------



// --------------------LOGICA OPERATIVA-----------------------
document.getElementById('git').addEventListener('click', function () {
    fakeLoader(git_row);
});

document.getElementById('html').addEventListener('click', function () {
    fakeLoader(html_row);
});

document.getElementById('css').addEventListener('click', function () {
    fakeLoader(css_row);
});

document.getElementById('js').addEventListener('click', function () {
    fakeLoader(js_row);
});

document.getElementById('all').addEventListener('click', function () {

    // se presente rimuovo la classe d-none da tutte le righe con la classe definitions
    document.querySelectorAll('.definitions').forEach((elem) => {
        elem.classList.remove('d-none');
    })

});

// aggiungo l'evento click al pulsante
btn.addEventListener('click', function () {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});



/*<em>
    REGOLE PER I NOMI DELLE VARIABILI <br>
    1 - I nomi delle variabile devono esssere splicativi di ciò che fanno<br>
    2 - I nomi delle variabili NON devono cominciare con:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;a - numeri;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;b - caratteri speciali;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;c - spazi vuoti<br>
    3 - I nomi delle variaibili NON devono contenere nella maniera più assoluta i
    caratteri speciali<br>
    4 - I nomi delle variaibili DEVONO essere scritti in MINUSCOLO (così come i nomi
    delle cartelle)<br>
    5 - Gli spazi vuoti non sono ammessi. Se il nome che avete scelto per la
    variabile è composto da due parole, utilizzate l'underscore (_). NON potete
    utilizzare il -. Potete altrimenti utilizzare il camelCase (es. first_word
    oppure firstWord)<br>
    6 - I nomi delle variabili NON devono essere in maiuscolo.
</em>

<em>
    <code>
        console.log(ciccio); //undefined <br>
        ciccio = 'My Ciccio'; <br>
        var ciccio; <br><br><br>

        console.log(ciccio_bis); //error <br>
        ciccio_bis = 'My Ciccio 2'; <br>
        let ciccio_bis;<br> 
    </code>
</em> 

<em>
    <code>
        Differenze tra for, while e do while
        1 - il for viene utilizzato se si ha un numero definito di iterazioni da svolgere (non è detto che lo conosciamo!), se abbiamo bisogno di un contatore e se deve essere eseguito per forza.
        2 - il while viene utilizzato se la condizione non dipende da un contatore oppure se non abbiamo un numero definito di iterazioni da svolgere. Potrebbe anche non essere eseguito.
        3 - il do while viene eseguito sicuramente una volta. Per il resto è uguale al while.
    </code>
</em>
<em>
    <code>
        Tipologie di funzioni
        FUNZIONI NOMINATE => Funzioni che hanno un nome specifico,
    </code>
</em>
<em>
    <code>
        REGOLE DI SCOPE PER LA VISIBILITA' DELLE VARIABILI
        Le variabili let e const non possono essere viste al di fuori dei blocchi individuati da istruzioni condizionali (if, else if ecc), cicli (for, while ecc), e funzioni in cui sono state dichiarate.
        Sia let che const generano errore se le proviamo ad utilizzare prima che vengano dichiarate
        La variabile var può essere vista al di fuori di un blocco individuato da istruzioni condizioni o cicli in cui è dichiarata, ma non può essere vista al di fuori delle funzioni in cui è dichiarata.
        La variabile var non genera errore se utilizzata prima della sua dichiarazione, ma sarà semplicemente undefined
        Le variabili globali hanno i seguenti difetti
        1 - Potremmo avere difficoltà a capire da dove proviene il valore che contiene;
        2 - Rompe il concetto di funzione. E' paragonabile ad un virus che infetta una cellula;
    </code>
</em>
<em>
    <code>
        let obj = {
            chiave_uno: "Valore 1",
            chiave_due: "Valore 2",
            chiave_tre: "Valore 3"
        }

        let { chaive_uno, chiave_due } = obj;
    </code>
</em>
*/






