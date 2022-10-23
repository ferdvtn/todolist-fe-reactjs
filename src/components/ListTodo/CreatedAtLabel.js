function CreatedAtLabel(props) {
  return (
    <p className="invisible text-xs group-hover/li:visible">
      {props.createdAt}
    </p>
  );
}

export default CreatedAtLabel;
