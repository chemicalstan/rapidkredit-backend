const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    delete this.created_at;
    this.updated_at = new Date().toISOString();
  }
  static get jsonSchema(){
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'password', 'email', 'phone', 'country'],
      properties: {
        uuid: {type: 'uuid'},
        first_name: {type: 'string', minLength: 1, maxLength: 255},
        last_name: {type: 'string', minLength: 1, maxLength: 255},
        password: {type: 'string', minLength: 1, maxLength: 255},
        email: {type: 'string', minLength: 1, maxLength: 255},
        image_url: {type: 'string', minLength: 1, maxLength: 255},
        phone: {type: 'string'},
        is_active: {type: 'boolean'},
        is_verified: {type: 'boolean'},
        is_staff: {type: 'boolean'},
        is_employer: {type: 'boolean'},
        is_admin: {type: 'boolean'},
        country: {type: 'string'},
      }
    }
  }
  static get relationMappings() {
    // const BankDetail = require("./BankDetail");
    // const Employer = require("./Employer");
    // const Request = require("./Request");

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

module.exports = User;
