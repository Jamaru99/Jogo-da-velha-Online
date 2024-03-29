class JogoDaVelha{

    constructor(response){
        this.tabuleiro = response.data[0].tabuleiro;
        this.simbolo = response.data[0].simbolo;
        this.elementoContainer = document.querySelector('.game');
        this.gameOver = false;
        this.sequenciasVencedoras = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        this.inicia();
    }

    inicia() {
        this.desenha();
        this.gameOver = false;       
    }

    desenha() {
        this.elementoContainer.innerHTML = '';

        for ( var i = 0; i < this.tabuleiro.length; i++ ) 
            this.elementoContainer.innerHTML += '<div id="q'+ i + '">' + this.tabuleiro[i] + '</div>';   

        this.tabuleiro.map((item, index) => {
            document.querySelector("#q" + index).onclick = function() {
                this.fazerJogada(index);
            }.bind(this);
        });
        
    }

    mudaSimbolo(){
        this.simbolo = this.simbolo === 'X'?'O':'X';
    }

    fazerJogada(posicao){
        if (this.gameOver) return false;
        if (this.tabuleiro[posicao] === ''){
            this.tabuleiro[posicao] = this.simbolo;
            axios.put("http://localhost:3001/api/5d373d3d0f227a2ad6632d9b", {tabuleiro: this.tabuleiro});
            this.desenha();
            let checaFim = this.checaSequenciasVencedoras( this.simbolo );
            if (checaFim){
                this.finalizar();
            } else{
                this.mudaSimbolo();
                axios.put("http://localhost:3001/api/5d373d3d0f227a2ad6632d9b", {simbolo: this.simbolo});
            }
            return true;
        }
        else {
            return false;
        }
    }

    checaSequenciasVencedoras(simbolo){
        for ( let i in this.sequenciasVencedoras ) {
            if (this.tabuleiro[ this.sequenciasVencedoras[i][0] ] == simbolo  &&
                this.tabuleiro[ this.sequenciasVencedoras[i][1] ] == simbolo &&
                this.tabuleiro[ this.sequenciasVencedoras[i][2] ] == simbolo) {
                    return true;
            }
        };
        return false;
    }

    finalizar(){
        this.gameOver = true;
        alert('CABÔÔÔ');
    }

}

