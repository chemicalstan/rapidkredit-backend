import { Model } from "objection";
import knex from "../knex";

class Staff extends Model {
  static get tableName() {
    return "staff";
  }

  static get relationMappings() {
    import BankDetail from "./BankDetail";
    import EmployerStaff from "./EmployerStaff";
    import Employer from "./Employer";
    import Request from "./Request";

    return {
      // Relating a user to his many bank details\
      bankDetails: {
        relation: Model.HasManyRelation,
        modelClass: BankDetail,
        join: {
          from: "staff.id",
          to: "bank_detail.staff_id"
        }
      },

      requests: {
          relation: Model.HasManyRelation,
          modelClass: Request,
          join:{
              from: 'staff.id',
              to: 'request.staff_id'
          }
      },

      employers: {
          relation: Model.ManyToManyRelation,
          modelClass: Employer,
          join: {
              from: 'staff.id',
              through: {
                  from: 'employer_staff.staff_id',
                  to: 'employer_staff.employer_id'
              },
              to: 'employer.id'
          }
      }
    };
  }
}

export default Staff;
