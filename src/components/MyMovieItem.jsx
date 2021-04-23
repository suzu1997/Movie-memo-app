export const MyMovieItem = () => {
  return (
    <div className='flex items-center justify-between px-3 py-2 border-b border-solid border-black'>
      <div className='flex items-center'>
        <img
          src='prada.jpg'
          alt='映画のサムネイル'
          style={{ width: '50px', height: '50px' }}
        />
        <p className='ml-4'>プラダを着た悪魔</p>
      </div>
      <div className='flex items-center'>
        <div className='text-xs mr-4'>
          <div>鑑賞日:</div>
          <div>
            ○○○○年 <br />
            ○月○○日
          </div>
        </div>
        <i className='fas fa-caret-right fa-2x'></i>
      </div>
    </div>
  );
};
