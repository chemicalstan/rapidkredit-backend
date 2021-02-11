import { Model } from "objection";

class Employer extends Model {
  static get tableName() {
    return "employer";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "firstName",
        "lastName",
        "password",
        "phone",
        "email",
        "companyName"
      ],
      properties: {
        id: { type: "uuid" },
        firstName: { type: "string" },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "integer" },
        email: { type: "string", minLength: 1, maxLength: 255 },
        emmployerImageUrl: { type: ["string", "null"] },
        companyName: { type: "string", minLength: 1, maxLength: 255 },
        companyEmployeeApi: { type: "string", minLength: 1, maxLength: 255 },
        updatedAt: { type: "timestamp" }
      }
    };
  }
  static get relationMappings() {
    import Staff from "./Staff";
    import Company from './Company';
    return {
      // Relating employer to their staffs
      staffs: {
        relation: Model.ManyToManyRelation,
        modelClass: Staff,
        join: {
          from: "employer.id",
          through: {
            from: "company.employer_id",
            to: "company.staff_id"
          },
          to: "staff.id"
        }
      },
      companies: {
        
      }
    };
  }
}

export default Employer;
