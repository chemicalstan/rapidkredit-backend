import { Model } from "objection";

class Staff extends Model {
  static get tableName() {
    return "users";
  }
  static get jsonSchema(){
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'password', 'email', 'phone', 'country'],
      properties: {
        id: {type: 'uuid'},
        firstName: {type: 'string', minLength: 1, maxLength: 255},
        lastName: {type: 'string', minLength: 1, maxLength: 255},
        password: {type: 'string', minLength: 1, maxLength: 255},
        email: {type: 'string', minLength: 1, maxLength: 255},
        imageUrl: {type: 'string', minLength: 1, maxLength: 255},
        phone: {type: 'integer'},
        isActive: {type: 'boolean'},
        isVerified: {type: 'boolean'},
        isStaff: {type: 'boolean'},
        isEmployer: {type: 'boolean'},
        isAdmin: {type: 'boolean'},
        country: {type: 'string'},
      }
    }
  }
  static get relationMappings() {
    // import BankDetail from "./BankDetail";
    // import Employer from "./Employer";
    // import Request from "./Request";

    // return {
    //   // Relating a user to his many bank details\
    //   bankDetails: {
    //     relation: Model.HasManyRelation,
    //     modelClass: BankDetail,
    //     join: {
    //       from: "staff.id",
    //       to: "bank_detail.staff_id"
    //     }
    //   },

    //   requests: {
    //       relation: Model.HasManyRelation,
    //       modelClass: Request,
    //       join:{
    //           from: 'staff.id',
    //           to: 'request.staff_id'
    //       }
    //   },

    //   employers: {
    //       relation: Model.ManyToManyRelation,
    //       modelClass: Employer,
    //       join: {
    //           from: 'staff.id',
    //           through: {
    //               from: 'employer_staff.staff_id',
    //               to: 'employer_staff.employer_id'
    //           },
    //           to: 'employer.id'
    //       }
    //   }
    // };
  }
}

export default Staff;
