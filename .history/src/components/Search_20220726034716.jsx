export default function Search({onChange}) {
  return (
    <div className='search'>
      <input
        onChange={onChange}
        type='text'
        placeholder='Search Your Pokemon'
      />
      <BiSearchAlt2 className='icon' />
    </div>
  );
}
