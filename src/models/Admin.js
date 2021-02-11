import { Model } from "objection";

class Admin extends Model {
  static get tableName() {
    return "admin";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName", "password", "email", "phone"],
      properties: {
        id: { type: "uuid" },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "integer" },
        superPower: { type: "boolean" },
        updatedAt: { type: "timestamp" }
      }
    };
  }
}
