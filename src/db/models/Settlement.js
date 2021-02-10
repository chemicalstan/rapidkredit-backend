import { Model } from "objection";

class Settlement extends Model {
    static get tableName(){
        return 'settlement'
    }
}

export default Settlement;