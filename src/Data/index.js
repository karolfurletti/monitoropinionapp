import opinions from  './principal.json'
import opinions_concorrente from  './concorrente.json'
import opinions_concorrente2 from  './concorrentes2.json'
import opinions_concorrente3 from  './concorrentes3.json'
import opinions_concorrente4 from  './concorrentes4.json'
import opinions_concorrente5 from  './concorrentes5.json'
import opinions_concorrente6 from  './concorrentes6.json'

class DataOpinions{


GetOpinions(){
    return opinions
}

GetOpinions_Concorrente(concorrente_id){
    switch(concorrente_id){
        case '123':
            return opinions_concorrente
        break
        case '1234':
            return opinions_concorrente2
        break
        case '12345':
            return opinions_concorrente3
        break
        case '12356':
            return opinions_concorrente4
        break
        case '1234567':
            return opinions_concorrente5
        break
        case '12345678':
            return opinions_concorrente6
        break
        default:
            return opinions_concorrente

    }
    
}

}

export default DataOpinions