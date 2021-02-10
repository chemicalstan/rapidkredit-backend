import { Model } from "objection";

class Employer extends Model {
    static get tableName(){
        return 'employer'
    }

    static get relationMappings () {
        import Staff from "./Staff";
        return {
            // Relating employer to their staffs
            Staffs: {
                relation: Model.ManyToManyRelation,
                modelClass: Staff,
                join: {
                    from: 'employer.id',
                    through: {
                        from: 'employer_staff.employer_id',
                        to: 'employer_staff.staff_id'
                    },
                    to: 'staff.id'
                }
            }
        }
    }
}

export default Employer;