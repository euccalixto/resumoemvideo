var books = 
        [
            {
                name:"O Ego é seu Inimigo",
                desc:"Ideal para Empreendedores",
                link:"https://amzn.to/4iizv4M",
                image:"1"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:true
            },
            {
                name:"Como Convencer alguém em 90 segundos",
                desc:"Seja um Mestre em Vender",
                link:"https://amzn.to/4imhxye",
                image:"2"+".jpg",
                offer:1,
                cat:"sell",
                bestSeller:true
            },
            {
                name:"A montanha é você",
                desc:"Só depende de você",
                link:"https://amzn.to/4hx4vN7",
                image:"3"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:true
            },
            {
                name:"As armas da persuasão",
                desc:"Venda como uma serpente",
                link:"https://amzn.to/4izkqfa",
                image:"4"+".jpg",
                offer:1,
                cat:"sell",
                bestSeller:true
            },
            {
                name:"C. S. Lewis como cultivar uma vida de leitura",
                desc:"Seja rico sendo um leitor",
                link:"https://amzn.to/41LtqH0",
                image:"5"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:false
            },
            {
                name:"Objeções JEB Bloudunt",
                desc:"Quebre objeções como se fossem Ovos",
                link:"https://amzn.to/4hoA7EJ",
                image:"6"+".jpg",
                offer:1,
                cat:"sell",
                bestSeller:false
            },
            {
                name:"A Arte de Fazer Acontecer",
                desc:"Maestria e ousadia nos negócios",
                link:"https://amzn.to/4igMTX8",
                image:"7"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:false
            },
            {
                name:"O Princípio 80/20",
                desc:"Produtividade é a alma do negócio",
                link:"https://amzn.to/43LAaam",
                image:"8"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:false
            },
            {
                name:"Pai Rico Pai pobre, o que os ricos ensinam seus filhos sobre dinheiro",
                desc:"Seja inteligente com seu dinheiro",
                link:"https://amzn.to/41YUJPp",
                image:"9"+".jpg",
                offer:1,
                cat:"finance",
                bestSeller:true
            },
            {
                name:"Diário Estoico, 365 lições",
                desc:"Empreenda Forte como os Estoicos",
                link:"https://amzn.to/3DpPFua",
                image:"10"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:true
            },
            {
                name:"Primo Rico",
                desc:"Aprenda com um milhionário",
                link:"https://amzn.to/41YjRpq",
                image:"11"+".jpg",
                offer:1,
                cat:"finance",
                bestSeller:true
            },
            {
                name:"Maquiavél o Príncipe",
                desc:"Seja um Imperador em Vender",
                link:"https://amzn.to/3DBnFDW",
                image:"12"+".jpg",
                offer:1,
                cat:"coach",
                bestSeller:true
            },
            {
                name:"Obsessão Pelo CLiente",
                desc:"Seja um lider não um chefe",
                link:"https://amzn.to/3FktohI",
                image:"14"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:false 
            },
            {
                name:"O jeito Disney de encantar os clientes: Do atendimento excepcional ao nunca parar de crescer e acreditar",
                desc:"Seja um Imperador em Vender",
                link:"https://amzn.to/4kJ4OqX",
                image:"13"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:false
            },
            {
                name:"Geração de Valor 1 Flavio Augusto",
                desc:"Receba a mentalidade Geradora de Riqueza",
                link:"https://amzn.to/3R2uf9q",
                image:"15"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:true 
            },
            {
                name:"Geração de Valor 2 Flavio Augusto",
                desc:"Receba a mentalidade Geradora de Riqueza",
                link:"https://amzn.to/4bORTQj",
                image:"17"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:false 
            },
            {
                name:"Geração de Valor 3 Flavio Augusto",
                desc:"Receba a mentalidade Geradora de Riqueza",
                link:"https://amzn.to/3DDCjud",
                image:"18"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:false 
            },
            {
                name:"Box 3 Geração de Valor, 1 2 e 3, Flavio Augusto",
                desc:"Receba a mentalidade Geradora de Riqueza",
                link:"https://amzn.to/4hvmGTs",
                image:"16"+".jpg",
                offer:1,
                cat:"enterprise",
                bestSeller:true  //o proximo é 19
            }
        ];

        function redirect(url){
            var win = window.open(url, '_blank');
            win.focus();
        }        
       
        var clicked=[false,-1]
        var needBeBest = false;
        var limit= 11;
