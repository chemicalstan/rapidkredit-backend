import { Model } from "objection";

class Request extends Model {
    static get tableName(){
        return 'request'
    }
    static get relationMappings (){
        import Staff from './Staff';
        return {
            relation: Model.BelongsToOneRelation,
            modelClass: Staff,
            join: {
                from: 'request.staff_id',
                to: 'staff.id'
            }
        }
    }
}

export default Request;