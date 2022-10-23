function CreatedAtLabel(props) {
  return (
    <div>
      <p className="invisible text-xs group-hover/li:visible">
        {props.createdAt}
      </p>
    </div>
  );
}

export default CreatedAtLabel;
