import { useCallback } from 'react';

import { Input } from 'src/components/form/Input';
import { SelectWatchDate } from 'src/components/form/SelectWatchDate';
import { Textarea } from 'src/components/form/Textarea';

export const MovieNoteForm = (props) => {
  const {
    value,
    year,
    month,
    day,
    evaluation,
    impression,
    setYear,
    setMonth,
    setDay,
    setEvaluation,
    setImpression,
  } = props;

  //テキストフィールドのvalueの変更のための関数
  const onChangeYear = useCallback(
    (e) => {
      setYear(e.target.value);
    },
    [setYear]
  );
  const onChangeMonth = useCallback(
    (e) => {
      setMonth(e.target.value);
    },
    [setMonth]
  );
  const onChangeDay = useCallback(
    (e) => {
      setDay(e.target.value);
    },
    [setDay]
  );
  const onChangeEvaluation = useCallback(
    (e) => {
      setEvaluation(e.target.value);
    },
    [setEvaluation]
  );
  const onChangeImpression = useCallback(
    (e) => {
      setImpression(e.target.value);
    },
    [setImpression]
  );

  return (
    <div>
      <Input type='text' label='タイトル' value={value} readOnly={true} />
      <br />
      <SelectWatchDate
        year={year}
        month={month}
        day={day}
        onChangeYear={onChangeYear}
        onChangeMonth={onChangeMonth}
        onChangeDay={onChangeDay}
      />
      <br />
      <Input
        label='評価'
        value={evaluation}
        onChange={onChangeEvaluation}
        placeholder='10点中何点？⭐️'
      />
      <br />
      <Textarea
        type='text'
        label='感想'
        value={impression}
        onChange={onChangeImpression}
        placeholder='映画に関する感想やメモを記録しておこう！！'
      />
    </div>
  );
};
