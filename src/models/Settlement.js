import { Model } from "objection";

class Settlement extends Model {
    static get tableName(){
        return 'settlement'
    }

    static get jsonSchema (){
        return {
            type: 'object',
            required: ['employerId', 'staffId', 'paymentDueDate'],
            properties: {
                id: {type: 'uuid'},
                employerId: {type: 'uuid'},
                staffId: {type: 'uuid'},
                isSettled: {type: 'boolean'},
                paymentDueDate: {type: 'date'},
            }
        }
    }
}

export default Settlement;