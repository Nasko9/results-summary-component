//Type
import { TestElementType } from '../../types/type';

export default function useResult() {
  const showResult = (props: TestElementType[]) => {
    const scoreArr = props.map(
      (singleItem: TestElementType) => singleItem.score,
    );
    const scoreSum = scoreArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return Math.round(scoreSum / scoreArr.length);
  };

  return { showResult };
}
