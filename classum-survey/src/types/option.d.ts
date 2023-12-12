declare module "option" {
  export type OptionType = string;

  export type handleOptionChangeFuncType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    order: number
  ) => void;

  export type handleOptionDeleteFuncType = (order: number) => void;

  export type handleOptionAddFuncType = () => void;
}
