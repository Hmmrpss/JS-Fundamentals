function printDNAHelix(length) {
    let dnaHelix = ['**AT**', '*C--G*', 'T----T', '*A--G*', '**GG**',
     '*A--T*', 'C----G', '*T--T*', '**AG**', '*G--G*',
     'A----T', '*C--G*', '**TT**', '*A--G*', 'G----G',
     '*A--T*', '**CG**', '*T--T*', 'A----G', '*G--G*'];
        for (let i = 0; i < length; i++){
          if (length <= 20) {
            console.log(dnaHelix[i]);
          } else{
            console.log(dnaHelix[i % 20]);
          }
    }
}
