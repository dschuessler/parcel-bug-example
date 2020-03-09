export default interface Suggestion {
  type: string;
  action: string;
  description: string;
  param: string | null;
  isFallback: boolean;
  isSelected: boolean;
}
