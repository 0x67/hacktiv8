const fs = require('fs')

class Person {
    constructor (data) {
        this.id = data.id 
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.email = data.email
        this.phone = data.phone
        this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    }
}

class PersonParser {
    constructor(file) {
        // convert csv file input to array 
        this.fileName = file
        this.peopleList = []
    }

    parse() {
        const parse = fs.readFileSync(this.fileName, { encoding: 'utf8' }).split('\n')    
    
        for (const element in parse) {
            if (element !== 0) {
                const splitted = parse[element].split(',')
    
                this.peopleList.push(new Person({
                    id: splitted[0],
                    firstName: splitted[1],
                    lastName: splitted[1],
                    email: splitted[3],
                    phone: splitted[4],
                    createdAt: splitted[5]
                }))
            }
        }
    }
}

const parser = new PersonParser('person.csv')
parser.parse()

console.log(parser)

