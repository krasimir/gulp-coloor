import react from 'react';

export default class Component extends React.Component {
  render() {
    return (
      <section>
        <img data-coloor='./photos/img.jpg' data-coloor-size='640x480'  src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAklEQVR4AewaftIAAAAjSURBVAEaAOX/Ab24tf+42PMA09zsAAL6+fkACwH3AOPq8QDUQg74d7o9lAAAAABJRU5ErkJggg==' alt='something' />
        <img data-coloor='./photos/green.jpg' data-coloor-size='500x499'  src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAklEQVR4AewaftIAAAAuSURBVGNUt+D+r+vIxfDk8Q8GJi4uJoYvrxgYHt/8zcDEycXEIK/AxcDw/x8DAO3IC6w6YFW8AAAAAElFTkSuQmCC' alt='else' />
      </section>
    )
  }
}