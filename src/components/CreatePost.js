import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

const CreatePost = () => {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label htmlFor="">Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label htmlFor="">Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
