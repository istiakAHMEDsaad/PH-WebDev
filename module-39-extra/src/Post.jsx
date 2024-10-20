import './index.css';
export default function Post({ post }) {
  const { id, title, body } = post;
  return (
    <>
      <div className='border border-stone-500 mb-4 rounded-sm w-3/4 mx-auto p-5 space-y-3'>
        <h4 className='text-lg'>User id: <span className='text-red-500'>{id}</span></h4>
        <p className='text-lg'>Title: <span className='text-amber-500'>{title}</span></p>
        <p className='text-lg'>Post Summary: <span className='text-rose-300'>{body}</span></p>
      </div>
    </>
  );
}
