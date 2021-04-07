import opinions from './principal.json'
import competingOpinions from './concorrente.json'
import competingOpinions2 from './concorrentes2.json'
import competingOpinions3 from './concorrentes3.json'
import competingOpinions4 from './concorrentes4.json'
import competingOpinions5 from './concorrentes5.json'
import competingOpinions6 from './concorrentes6.json'

class DataOpinions {
  GetOpinions() {
    return opinions
  }

  getCompetingOpinions(competingId) {
    switch (competingId) {
      case '123':
        return competingOpinions
      case '1234':
        return competingOpinions2
      case '12345':
        return competingOpinions3
      case '12356':
        return competingOpinions4
      case '1234567':
        return competingOpinions5
      case '12345678':
        return competingOpinions6
      default:
        return competingOpinions
    }
  }
}

export default DataOpinions
