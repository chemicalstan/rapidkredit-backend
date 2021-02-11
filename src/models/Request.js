import { Model } from "objection";
import { type } from "os";

class Request extends Model {
  static get tableName() {
    return "request";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["staffId", "amount", "requestStatus"],
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
    import Staff from "./Staff";
    return {
      relation: Model.BelongsToOneRelation,
      modelClass: Staff,
      join: {
        from: "request.staff_id",
        to: "staff.id"
      }
    };
  }
}

export default Request;
