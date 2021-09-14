import { ChangeEventHandler, useCallback, VFC } from 'react';

import { Input } from 'src/components/form/Input';
import { SelectWatchDate } from 'src/components/form/SelectWatchDate';
import { Textarea } from 'src/components/form/Textarea';

type Props = {
  value: string;
  year: string;
  month: string;
  day: string;
  evaluation: string;
  impression: string;
  setYear: (value: string) => void;
  setMonth: (value: string) => void;
  setDay: (value: string) => void;
  setEvaluation: (value: string) => void;
  setImpression: (value: string) => void;
};

export const MovieNoteForm: VFC<Props> = (props) => {
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
  const onChangeYear: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setYear(e.target.value);
    },
    [setYear]
  );
  const onChangeMonth: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setMonth(e.target.value);
    },
    [setMonth]
  );
  const onChangeDay: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setDay(e.target.value);
    },
    [setDay]
  );
  const onChangeEvaluation: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setEvaluation(e.target.value);
    },
    [setEvaluation]
  );
  const onChangeImpression: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback(
      (e) => {
        setImpression(e.target.value);
      },
      [setImpression]
    );

  return (
    <div>
      <div>タイトル:</div>
      <p className='w-full p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'>{value}</p>
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
        type='text'
        label='評価'
        value={evaluation}
        onChange={onChangeEvaluation}
        placeholder='10点中何点？⭐️'
      />
      <br />
      <Textarea
        label='感想'
        value={impression}
        onChange={onChangeImpression}
        placeholder='映画に関する感想やメモを記録しておこう！！'
      />
    </div>
  );
};
