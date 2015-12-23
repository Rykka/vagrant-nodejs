var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox" >
        Hello React
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.querySelector('.react')
);
