function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nascimento = document.getElementById("ano_de_nascimento").value
    var resp = document.getElementById("resposta")
    if (ano_nascimento == 0 || ano_nascimento > ano_atual){
        window.alert("DADOS INCORRETOS, TENTE NOVAMENTE!")
    }else{
        var idade = (ano_atual - ano_nascimento)
        var sexo = document.getElementsByName("sexo")
        var img = document.createElement("img")
        img.id = "img"
        var genero =""
        var faixa = ""
        if (sexo[0].checked){
            genero = "MASCULINO"
            document.body.style.background = ""
            if (idade >= 0 && idade <= 10){
                faixa = "criança"
                img.src = "homem-bebe.png"
                document.body.style.background = "rgb(137, 207, 240)"
            }else if(idade > 10 && idade <= 20){
                faixa = "adolecente"
                img.src = "homem-jovem.png"
                document.body.style.background = "rgb(0, 140, 255)"

        }else if(idade > 20 && idade <=50){
                faixa = "adulto"
                img.src = "homem-adulto.png"
                document.body.style.background = "rgb(25, 118, 210)"
        }else if(idade > 50){
            faixa = "idoso"
            img.src= "homem-idoso.png"
            document.body.style.background = "rgb(135, 176, 228)"
        }
        }else{
            genero = "FEMININO"
            if (idade >= 0 && idade <= 10){
                faixa = "criança"
                img.src = "mulher-bebe.png"
                document.body.style.background = "rgb(255, 182, 193)"

            }else if(idade > 10 && idade <= 20){
                faixa = "adolecente"
                img.src= "mulher-jovem.png"
                document.body.style.background = "rgb(255, 105, 180)"
            }else if(idade > 20 && idade <=50){
                faixa = "adulto"
                img.src= "mulher-adulta.png"
                document.body.style.background = "rgb(219, 112, 147)"
            }else if (idade > 50 ){
                faixa = "idoso"
                img.src= "mulher-idosa.png"
                document.body.style.background = "rgb(255, 182, 193)"
            }
        }
        resp.innerHTML = `Foi detectado um ${faixa} com ${idade} anos do sexo ${genero}`
        resp.appendChild(img)
    }
}