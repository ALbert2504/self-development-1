import {fieldNames} from "./constants";

export const validateField = (name: string, value: string): boolean => {
  switch (name) {
    case fieldNames.name:
      return name.length > 8;
    default:
      return false;
  }
}