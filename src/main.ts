 // =========================
//        SNACK 1
// =========================

/* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato” */

let dato: unknown = null //testato facendo ciao, 23, true e false

if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
  
} else if (typeof dato === 'number'){
  console.log(dato * 2);
  
} else if (typeof dato === 'boolean'){
  if (dato === true) {
    console.log('si');
    
  } else {
    console.log('no');
    
  }
} else {
  console.log('Tipo non supportato');
  
}


 // =========================
//        SNACK 2
// =========================

/* Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018]) */

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[]
}

let dipendenteFemmina: Dipendente = {
  nome: 'Giorgia',
  cognome: 'Bianchi',
  annoNascita: 21,
  sesso:  'f',
  anniDiServizio: [2024,2025,2026]
}