function TodoItem1() {
  let todoName = "Go to College";
  let todoDate = "26/08/2024";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
