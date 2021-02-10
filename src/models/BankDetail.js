import { Model } from "objection";

class BankDetail extends Model {
  static get tableName() {
    return "bank_detail";
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
