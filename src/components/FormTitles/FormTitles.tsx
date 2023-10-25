import * as TITLES from "../../features/step-title-content";
import "./FormTitles.scss";

type FormTitlesProps = {
  stepNumber: number;
};

type Titles = {
  title: string;
  subTitle: string;
};

export default function FormTitles({ stepNumber }: FormTitlesProps) {
  const titles: Record<number, Titles> = {
    1: { title: TITLES.STEP_ONE_TITLE, subTitle: TITLES.STEP_ONE_SUB_TITLE },
    2: { title: TITLES.STEP_TWO_TITLE, subTitle: TITLES.STEP_TWO_SUB_TITLE },
    3: { title: TITLES.STEP_THREE_TITLE, subTitle: TITLES.STEP_THIRD_SUB_TITLE },
    4: { title: TITLES.STEP_FOUR_TITLE, subTitle: TITLES.STEP_FOUR_SUB_TITLE },
  };

  return (
    <div className="form-titles-container">
      <h1>{titles[stepNumber].title}</h1>
      <h2>{titles[stepNumber].subTitle}</h2>
    </div>
  );
}
