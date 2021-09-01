var letraDaMusica = `
            Domingo, eu vou ao Maracanã
            Vou torcer pro time que sou fã
               
            Não quero cadeira numerada
            Vou ficar na arquibancada
            Pra sentir mais emoção
            Vou levar foguetes e bandeira
            Não vai ser de brincadeira
            Ele vai ser campeão
                
            Porque meu time bota pra ferver
            E o nome dele são vocês que vão dizer
            Porque meu time bota pra ferver
            E o nome dele são vocês que vão dizer

            (Ô, ô, ô)
            Ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô Mengo!
            Ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô, ô Mengo!
        `;

var mengo = letraDaMusica.indexOf('Mengo');
console.log(mengo);

var vasco = letraDaMusica.replace('Mengo','Vasco');     
console.log(vasco);

var caracter = letraDaMusica.trim();
console.log(caracter.length);

var letraSemEspaco = caracter.split(" ");
console.log(letraSemEspaco.length);


