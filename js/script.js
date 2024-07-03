// ---------------DEFINIZIONE DELLE VARIABILI-------------------
let git_defs = [
    "GIT:Sistema di versionamento che ci permette di tenere traccia di tutte le modifiche che avvengono all'interno di un progetto, permettendo di avere più versioni dello stesso.",
    "REPOSITORY:Insieme dei file e delle cartelle e della loro storia che compongono il progetto che vogliamo tracciare con git",
    "STAGING:Inserire i file che abbiamo modificato in un'area temporanea",
    "COMMIT:Creare uno stato recuperabile del progetto.",
    "PUSH:Operazione di upload dello / degli stato / i del progetto creato / i attraverso i commit.",
    "REVERT:Tornare ad uno stato precedente del progetto, senza cancellare la storia passata.",
    "RESET:Ritorno ad un commit precedente alterando la storia passata.Se si fa l'hard reset si cancella la storia, se si fa il reset semplice le modifiche dei commit successivi a quello in cui si vuole tornare vengono messe in area di staging."
];

let html_defs = [
    "HTML:L'html è un linguaggio di Markup (Hypertext Markup Language) che si occupa della visualizzazione delle pagine e non contiene logica. NON è un linguaggio di programmazione.",
    "DOM:Document Object Model forma di rappresentazione informatica dei documenti strutturati come modello orientato agli oggetti o ad albero. Si può definire anche come la struttura in cui è organizzata una pagina web.",
    "BLOCK LEVEL TAGS:Tag che occupano tutta la riga della pagina costringendo l'elemento successivo a posizionarsi in una nuova linea.",
    "INLINE TAGS:Tag che occupano solo lo spazio del loro contenuto. Gli elementi successivi, SE INLINE, si posizioneranno di fianco.",
    "SELF CLOSING TAG:Tag che non prevedono contenuto, non hanno un tag di chiusura;",
    "ENTITIES:Codice HTML per rappresentare caratteri speciali, come ad esempio lettere accentate, simboli di valuta e altri simboli generici",
    "PATH ASSOLUTI:Partono dall'inizio, tipicamente C o comunque la posizione iniziale dell'hard disk per arrivare dove è l'immagine.",
    "PATH RELATIVI:Partono da dove ci troviamo per andare dove si trova l'immagine."
];

let css_defs = [
    "CSS:CSS (Cascade StyleSheet) Sono degli insiemi di regole che servono per personalizzare le nostre pagine.",
    "SELETTORE:E' un modo per indicare un elemento dell'html a cui applciare delle regole di stile.",
    "ID:Identificatore univoco da utilizzare all'interno di un documento una volta sola. A questo id possiamo applicare delle regole di stile",
    "CLASSE:E' un selettore che definiamo una volta sola all'interno del file css, ma possiamo utilizzare tutte le volte che vogliamo all'interno dell'html",
    "PADDING:Il padding è la distanza tra il contenuto ed il bordo interno del suo contenitore",
    "MARGIN:Il margine è la distanza tra i bordi esterni di due elementi adiacenti",
    "FLEXBOX:E' una modalità di layout con la quale possiamo posizionare degli elementi all'interno di un contenitore o più in generale della pagina in maniera flessibile in modo semplice.",
    "CONTENITORE:Elemento di layout che si occupa di determinare dove deve essere posizionato il contenuto della pagina.",
    "RIGA:Elemento di layout che si occupa del posizionamento delle colonne al suo interno. Deve essere sempre contenuta in un contenitore.O al limite in una colonna.",
    "COLONNA:La colonna è l'elemento di layout risultante dalla suddivisione verticale dello spazio interno della riga.E' l'elemento in cui poi andremo a mettere il contenuto. Deve essere contenuta esclusivamente in una riga.",
    "MODULO:E' il risultato della suddivisione orizzontale dello spazio della colonna. Sono le righe tra l'altro, in cui andremo a mettere il contenuto testuale e le immagini, pulsanti, link.",
    "GUTTER:Spazio che separa due colonne in un layout. Può essere impostato tramite margini sulle colonne oppure attraverso la proprietà gap",
    "ADATTABILITA':L'adattabilità è la capacità di una pagina web di adattare le dimensioni delle componenti / parti che la compongono alle diverse tipologie di schermo.Ciò comporta un restringimento o più in generale ridimensionamento delle stesse senza intervenire sulla loro posizione.",
    "RESPONSIVITA':La responsività è la capacità di una pagina web di adattare il proprio contenuto in dimensioni ed posizione ai diversi device.",
    "MEDIA QUERY:Una media query è un insieme di regole che definiscono il comportamento delle componenti(tutte o alcune) di una pagina quando raggiungono determinate risoluzioni.Tali risoluzioni vengono anche chiamate breakpoint.",
    "MOBILE FIRST:E' una modalità di progettazione delle pagine web in cui si da priorità allo sviluppo per i dispositivi mobile(smartphone).In questa modalità tutto ciò che si trova fuori da media query viene applicato subito(va da risoluzione 0px a quella della prima media query).Sviluppo le pagine partendo dalle risoluzioni mobile e andando a realizzare le media query che determinano il comportamento delle componenti a risoluzioni più grandi fino a quella desktop maggiore.Utilizziamo in questo caso < strong > min - width</strong > nei breakpoint.",
    "DESKTOP FIRST:E' una modalità di progettazione delle pagine web in cui si da priorità allo sviluppo desktop.In questa modalità tutto ciò che si trova fuori da media query viene applicato alla risoluzione più grande, quindi oltre al breakpoint più grande impostato nelle media query.Sviluppo le pagine partendo dalle risoluzioni desktop per poi andare a determinare il comportamento delle componenti a risoluzioni più basse, fino ad arrivare a quelle smartphone.Utilizziamo in questo caso <strong> max - width</strong> nei breakpoint.",
    "FRAMEWORK:Un framework un insieme di funzionalità di diverso tipo già pronte all'uso che possono essere utilizzate per realizzare una pagina / sito / applicazione in maniera più rapida e semplice.E' una sorta di intelaiatura su cui realizzare la nostra applicazione / sito.Una volta cominciato a lavorare su questo non si esce.",
    "LIBRERIA:Una libreria è un insieme di funzionalità, che non è detto che siano collegate tra di loro e che vado ad utilizzare solo al bisogno e solo quella che necessito al momento."
];


let js_defs = [
    "LINGUAGGIO DI PROGRAMMAZIONE:Un linguaggio di programmazione è un linguaggio formale (cioè costituito da simboli e che rispetta delle regole sintattiche, grammaticali e semantiche) in cui scriviamo istruzioni di input(entrata) per restituire qualcosa in output(uscita)",
    "LINGUAGGIO COMPILATO:Un linguaggio compilato è una tipologia di codice che deve essere passata prima da un programma, detto appunto compilatore, che traduce il codice scritto in un linguaggio comprensibile per la macchina e pertanto ne genererà un file eseguibile per il sistema operativo.",
    "LINGUAGGIO INTERPRETATI:Un linguaggio interpretato è un linguaggio che viene direttamente eseguito da un programma chiamato interprete, che ne esegue appunto le istruzioni.",
    "ALGORITMO:L'algoritmo è una sequenza di istruzioni da eseguire in un ordine logico, volta a risolvere un problema.",
    "DIAGRAMMA DI FLUSSO:Un diagramma di flusso è una rappresentazione grafica delle operazioni che si devono eseguire per eseguire un certo algoritmo.Il diagramma di flusso è un linguaggio formale che deve rispettare determinate regole.",
    "CLASSE:E' un'astrazione informatica di un concetto / elemento reale avente determinate proprietà ed operazioni.",
    "OGGETTO / ISTANZA:L'oggeto o istanza è un elemento che nasce da una classe e pertanto avrà le stesse proprietà ed operazioni date dalla classe.A questi possiamo assegnare dei valori.",
    "OPERATORE DI ASSEGNAZIONE <strong>=</strong>:L'operatore di assegnazione è quell'operatore che mi permette di assegnare dei valori.",
    "VARIABILE:Una variabile è un contenitore in cui viene salvata una, ed una sola, informazione durante l'esecuzione del programma. Tale informazione rimarrà nella variabile finchè il programma rimane in esecuzione.",
    "DICHIARAZIONE DI UNA VARIABILE:La dichiarazione di una variabile avviene quando all'interno del nostro codice scrivamo una parola chiave tra <strong>const</strong>, <strong>let</strong> e <strong>var</strong> seguita dal nome che abbiamo scelto per la variabile <br> <br>",
    "INIZIALIZZAZIONE DI UNA VARIABILE:L'inizializzazione di una variabile è l'assegnazione del primo valore della variabile.Molto spesso si fa assieme alla dichiarazione della variabile.In caso di variabile <strong>const</strong> queste due operazioni devono essere fatte assieme",
    "HOISTING:L'hoisting è la capacità di Javascript di leggere le variabile presenti all'interno del documento e consentirne l'uso anche prima della dichiarazione <br>",
    "STRINGA:Il tipo di dato Stringa è un insieme di caratteri.Possono essere inclusi caratteri minuscoli, maiuscoli caratteri speciali e numeri.",
    "CONCATENAZIONE TRA STRINGHE:La concatenazione tra stringhe è un'operazione tra stringhe che prevede l'unione di due o più stringhe in un'unica stringa.",
    "SCOPE DI UNA VARIABILE:Contesto nel quale si può richiamare una determinata variabile.",
    "ITERAZIONE(o ciclata):L'iterazione (o ciclata) è il singolo insieme di operazioni che vengono svolte durante l'esecuzione di un ciclo for. Terminato questo insieme di operazioni, il for fa eseguire questo insieme di operazione nuovamente da capo, facendo così partire una nuova iterazione.",
    "ARRAY(Vettore):Un array è una struttura dati che permette di contenere più valori contemporaneamente al suo interno in posizione l'uno adiacente all'altro.",
    "INDICE DI UN ARRAY:L'indice di un array è il valore che rappresenta la posizione all'interno dell'array. Gli indici partono sempre da 0 ed arrivano al valore N - 1 (dove N è la lunghezza - numero di elementi lo compongono - dell'array)"
];

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di git
const git_row = document.getElementById('git-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di html
const html_row = document.getElementById('html-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di css
const css_row = document.getElementById('css-row');

// recupero l'elemento del dom che dovrà contenere le colonne con le definizioni di js
const js_row = document.getElementById('js-row');


// --------------FINE DEFINIZIONE VARIABILI------------------


// -------------------LOGICA OPERATIVA------------------------
// ciclo l'array delle definizioni di git
for (let i = 0; i < git_defs.length; i++) {

    // creo l'elemento colonna da inserire nel dom
    let col = document.createElement('div');

    // aggiungo le classi all'elemento colonna
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    // creo l'elemento card
    let card = document.createElement('card');
    // gli aggiungo le classi
    card.classList.add('card', 'p-3', 'rounded-0', 'bg-bluebool', 'text-white', 'm-2', 'min-height-300');

    // la stringa deve essere divisa in due parti: titolo e definizione
    let array_def = git_defs[i].split(':');

    // inserisco come html il titolo ed il testo della voce del glossario
    card.innerHTML += `<h3 class="text-center">${array_def[0]}</h3><p>${array_def[1]}</p>`;

    // appendo alla colonna l'elemento card creato
    col.append(card);

    //appendo alla riga di git, le colonne create 
    git_row.append(col);
}

// ciclo l'array delle definizioni di html
for (let i = 0; i < html_defs.length; i++) {

    // creo l'elemento colonna da inserire nel dom
    let col = document.createElement('div');

    // aggiungo le classi all'elemento colonna
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    // creo l'elemento card
    let card = document.createElement('card');
    // gli aggiungo le classi
    card.classList.add('card', 'p-3', 'rounded-0', 'bg-bluebool', 'text-white', 'm-2', 'min-height-300');

    // la stringa deve essere divisa in due parti: titolo e definizione
    let array_def = html_defs[i].split(':');

    // inserisco come html il titolo ed il testo della voce del glossario
    card.innerHTML += `<h3 class="text-center">${array_def[0]}</h3><p>${array_def[1]}</p>`;

    // appendo alla colonna l'elemento card creato
    col.append(card);

    //appendo alla riga di html, le colonne create 
    html_row.append(col);
}

// ciclo l'array delle definizioni di css
for (let i = 0; i < css_defs.length; i++) {

    // creo l'elemento colonna da inserire nel dom
    let col = document.createElement('div');

    // aggiungo le classi all'elemento colonna
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    // creo l'elemento card
    let card = document.createElement('card');
    // gli aggiungo le classi
    card.classList.add('card', 'p-3', 'rounded-0', 'bg-bluebool', 'text-white', 'm-2', 'min-height-300');

    // la stringa deve essere divisa in due parti: titolo e definizione
    let array_def = css_defs[i].split(':');

    // inserisco come css il titolo ed il testo della voce del glossario
    card.innerHTML += `<h3 class="text-center">${array_def[0]}</h3><p>${array_def[1]}</p>`;

    // appendo alla colonna l'elemento card creato
    col.append(card);

    //appendo alla riga di css, le colonne create 
    css_row.append(col);
}

// ciclo l'array delle definizioni di js
for (let i = 0; i < js_defs.length; i++) {

    // creo l'elemento colonna da inserire nel dom
    let col = document.createElement('div');

    // aggiungo le classi all'elemento colonna
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    // creo l'elemento card
    let card = document.createElement('card');
    // gli aggiungo le classi
    card.classList.add('card', 'p-3', 'rounded-0', 'bg-bluebool', 'text-white', 'm-2', 'min-height-300');

    // la stringa deve essere divisa in due parti: titolo e definizione
    let array_def = js_defs[i].split(':');

    // inserisco come js il titolo ed il testo della voce del glossario
    card.innerHTML += `<h3 class="text-center">${array_def[0]}</h3><p>${array_def[1]}</p>`;

    // appendo alla colonna l'elemento card creato
    col.append(card);

    //appendo alla riga di js, le colonne create 
    js_row.append(col);
}

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
*/






