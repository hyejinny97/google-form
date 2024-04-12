declare module "option" {
  export type OptionType = string;

  export type handleOptionChangeFuncType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) => void;

  export type handleOptionDeleteFuncType = (id: number) => void;

  export type handleOptionAddFuncType = () => void;
}
