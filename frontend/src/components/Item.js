export default (props) => {
  const {
    id,
    name,
    age,
    gender,
    content,
  } = props;

  const render = () => (
    `<div class="col-12 col-md-6 col-lg-4 card">
      <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">age: ${age}, ${gender}</h6>
        <p class="card-text">${content}</p>
        <button class="btn btn-outline-info btn-sm" onclick="Items.remove">Remove</button>
        <button class="btn btn-outline-info btn-sm">Update</button>
      </div>
    </div>`
  );
  return render();
};
