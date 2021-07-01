import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  passward: string;
};

export const SignUp: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg mb-10'>ユーザー登録</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 flex flex-col'>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className='w-full p-2 mb-10 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
            placeholder='emailアドレスを入力してください'
            type='text'
            name='email'
            {...register('email', { required: true })}
          />
          {errors.email ? (
            <span className='text-red-400'>※必須項目です</span>
          ) : null}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className='w-full p-2 mb-10 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
            placeholder='パスワードを8文字以上で入力してください'
            type='password'
            {...register('passward', { required: true, minLength: 8 })}
          />
          {/* errors will return when field validation fails  */}
          {errors.passward?.type === 'required' ? (
            <span className='text-red-400'>※必須項目です</span>
          ) : null}
          {errors.passward?.type === 'minLength' ? (
            <span className='text-red-400'>※8文字以上で設定してください</span>
          ) : null}
          <br />
          <input
            type='submit'
            value='登録'
            className='text-white bg-green-700 text-xs sm:text-sm px-4 py-3 focus:outline-none rounded-lg hover:bg-opacity-90 w-20 m-auto'
          />
        </form>
      </div>
    </>
  );
};
