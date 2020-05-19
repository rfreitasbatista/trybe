function high(x) {
  let abcWords = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
    }
  let palavraFinal
  let maiorNumero = 0
  let words = x.split(" ");
  for(let i = 0; i < words.length; i += 1) {
    let palavra = words[i];
    let contador = 0;
    for(j = 0; j < palavra.length; j += 1) {
    
    if(palavra[j] in abcWords) {
      contador += abcWords[palavra[j]];
    }
    if ( contador > maiorNumero) {
    maiorNumero = contador;
    palavraFinal = words[i]
  };
  }
}
return palavraFinal;
}
high("man i need a taxi up to ubud");