const { Model } = require("objection");

class BankDetail extends Model {
  static get tableName() {
    return "bank_details";
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.update_at = new Date().toISOString();
  }

  $beforeUpdate() {
    delete this.created_at;
    this.updated_at = new Date().toISOString();
  }
  static get jsonSchema(){
    return {
      type: 'object',
      required: ['userId', 'accountName', 'bankName', 'accountNumber'],
      properties: {
        id: {type: 'uuid'},
        userId: {type: 'uuid'},
        accountName: {type: 'string', minLength: 1, maxLength: 255},
        bankName: {type: 'string', minLength: 1, maxLength: 255},
        accountNumber: {type: 'integer'}
      }
    }
  }

  static get relationMappings() {
    const User = require("./User");
    return {
      // Relating bank details to a staff
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "bank_detail.user_id",
          to: "user.id"
        }
      }
    };
  }
}

module.exports = BankDetail;
