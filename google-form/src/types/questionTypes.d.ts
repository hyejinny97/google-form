import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";

declare module "questionTypes" {
  export type QuestionTypes =
    | typeof Q_TYPE_SHORT
    | typeof Q_TYPE_LONG
    | typeof Q_TYPE_MULTIPLE_CHOICE
    | typeof Q_TYPE_CHECKBOX
    | typeof Q_TYPE_DROPDOWN;
}
