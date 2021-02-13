const { Model } = require("objection");

class Request extends Model {
  static get tableName() {
    return "requests";
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.update_at = new Date().toISOString();
  }

  $beforeUpdate() {
    delete this.created_at;
    this.updated_at = new Date().toISOString();
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "amount", "requestStatus"],
      properties: {
        id: { type: "uuid" },
        staffId: { type: "uuid" },
        requestTime: { type: "datetime" },
        amount: { type: "decimal" },
        requestStatus: { type: "string" },
        updatedAt: { type: "timestamp" }
      }
    };
  }
  static get relationMappings() {
    // const Staff = require("./Staff";
    // return {
    //   relation: Model.BelongsToOneRelation,
    //   modelClass: Staff,
    //   join: {
    //     from: "request.staff_id",
    //     to: "staff.id"
    //   }
    // };
  }
}

module.exports = Request;
