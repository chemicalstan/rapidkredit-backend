import { Model } from "objection";

class Company extends Model {
  static get tableName() {
    return "company";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ['companyName', 'companyEmail', 'employerId', 'companyAddress'],
      properties: {
          id: {type: 'uuid'},
          companyName: {type: 'string', minLength: 1, maxLength: 255 },
          companyEmail: {type: 'string', minLength: 1, maxLength: 255 },
          employerId: {type: 'uuid'},
          aboutCompany: {type: 'text'},
          companyAddress: {type: 'json'},
      }
    }
  }

  static get relationMappings() {
    // import Employer from "./Employer";
    // import Staff from "./Staff";
    // return {
    //     employer: {
    //         relation: Model.BelongsToOneRelation,
    //         modelClass: Employer,
    //         join: {
    //             from: 'company.employer_id',
    //             to: 'employer.id'
    //         }
    //     },
    //     staffs: {
    //         relation: Model.ManyToManyRelation,
    //         modelClass: Staff,
    //         join: {
    //             from: 'company.id',
    //             through: {
    //                 from: 'company_staff.company_id',
    //                 to: 'company_staff.staff_id'
    //             },
    //             to: 'staff.id'
    //         }
    //     }
    // }
  }
}
