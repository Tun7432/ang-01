// To parse this data:
//
//   import { Convert } from "./file";
//
//   const users = Convert.toUsers(json);

export interface Users {
    id:           number;
    email:        string;
    password:     string;
    prefix:       string;
    first_name:   string;
    last_name:    string;
    birthdate:    string;
    phone_number: string;
    role:         number;
    created_at:   string;
    updated_at:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsers(json: string): Users[] {
        return JSON.parse(json);
    }

    public static usersToJson(value: Users[]): string {
        return JSON.stringify(value);
    }
}
