import React from 'react';

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px"
    };
    return (
      <footer>
        <div class="row">
          <div class="row">
            <p>Copyright &copy; TodoList</p>
          </div>
        </div>
      </footer>
    );
  }
}
