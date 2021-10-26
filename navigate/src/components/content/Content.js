
function Home({btn}) {
  return (
    <div className="content-div">
      <h1>Home</h1>
      {btn}
      <div className="actual-content">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-div">
      <h1>Content 1</h1>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-div">
      <h1>Content 2</h1>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-div">
      <h1>Content 3</h1>
    </div>
  );
}

export {Home, Content2, Content3, Content4};
