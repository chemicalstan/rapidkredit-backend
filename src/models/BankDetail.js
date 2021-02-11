import { Model } from "objection";
// import { type } from "os";

class BankDetail extends Model {
  static get tableName() {
    return "bank_detail";
  }
  
  static get jsonSchema(){
    return {
      type: 'object',
      required: ['staffId', 'accountName', 'bankName', 'accountNumber'],
      properties: {
        id: {type: 'uuid'},
        staffId: {type: 'uuid'},
        accountName: {type: 'string', minLength: 1, maxLength: 255},
        bankName: {type: 'string', minLength: 1, maxLength: 255},
        accountNumber: {type: 'integer'}
      }
    }
  }

  static get relationMappings() {
    import Staff from "./Staff";
    return {
      // Relating bank details to a staff
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Staff,
        join: {
          from: "bank_detail.staff_id",
          to: "staff.id"
        }
      }
    };
  }
}

export default BankDetail;
