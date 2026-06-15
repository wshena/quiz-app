export default interface AllQuizCategoryResponse {
  trivia_categories: { id: number; name: string }[];
}

export default interface IconProps {
  size: number;
  color: string;
  style?: string;
}
