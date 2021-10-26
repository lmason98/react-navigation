import './Content.css';

import { ButtonGroup, Card, Breadcrumb } from 'react-bootstrap';

/*
* Component: ContentWrapper
* Description: Content entry point for the app, create new pages here
* Props:
*  - title: string
*  - breadcrumb: breadcrumb Component - Shows location on site
*  - content: content Component - Main body content
* */
function ContentWrapper({title, breadcrumb, content}) {
  const cName = title.replace(' ', '').toLowerCase() + '-div'; // lower title, append -div for className

  return (
    <Card className={cName}>
      <Card.Header>
        <h1>{title}</h1>
      </Card.Header>
      <Card.Body>
        {breadcrumb}
        {content}
      </Card.Body>
    </Card>
  );
}

/*
* Component: Home
* Props:
*  - toggleNav: Button
* */
function Home({toggleNav}) {
  const breadcrumb =
    <Breadcrumb>
      <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>;

  const body =
    <>
      <ButtonGroup className="ml-1 pr-1 pt-1 pb-1">{toggleNav}</ButtonGroup>

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
    </>;

  return <ContentWrapper title="Home"
                         breadcrumb={breadcrumb}
                         content={body} />;
}

function Content2() {
  const breadcrumb =
    <Breadcrumb>
      <Breadcrumb.Item active>Content 2</Breadcrumb.Item>
    </Breadcrumb>;

  const body =
    <>
      <p>Hello from content 2</p>
      <p>Hello from content 2</p>
      <p>Hello from content 2</p>
      <p>Hello from content 2</p>
    </>;

  return <ContentWrapper title="Content 2"
                         breadcrumb={breadcrumb}
                         content={body}/>;
}

function Content3() {
  const breadcrumb =
    <Breadcrumb>
      <Breadcrumb.Item active>Content 3</Breadcrumb.Item>
    </Breadcrumb>;

  const body =
    <>
      <p>Hello from content 3</p>
      <p>Hello from content 3</p>
      <p>Hello from content 3</p>
      <p>Hello from content 3</p>
    </>;

  return <ContentWrapper title="Content 3"
                         breadcrumb={breadcrumb}
                         content={body}/>;
}

function Content4() {
  const breadcrumb =
    <Breadcrumb>
      <Breadcrumb.Item active>Content 4</Breadcrumb.Item>
    </Breadcrumb>;

  const body =
    <>
      <p>Hello from content 4</p>
      <p>Hello from content 4</p>
      <p>Hello from content 4</p>
      <p>Hello from content 4</p>
    </>;

  return <ContentWrapper title="Content 4"
                         breadcrumb={breadcrumb}
                         content={body}/>;
}

export {Home, Content2, Content3, Content4};
